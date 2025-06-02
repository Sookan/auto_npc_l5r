import json

from db_but_with_google import App_DB
from fastapi import WebSocket, status, Request
from fastapi.responses import RedirectResponse
from api_openai_call import Connect_to_openAI_api
from data_model import User, Form_data, NPC_data, save_npc_order



class ConnectionManager:
    def __init__(self):
        self.active_connections: list[WebSocket] = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)

    def disconnect(self, websocket: WebSocket):
        self.active_connections.remove(websocket)

    async def send_prgress_message(self, progress: int, message: str, websocket: WebSocket):
        await websocket.send_json({'progess': progress, 'message': message})

    async def broadcast(self, message: str):
        for connection in self.active_connections:
            await connection.send_text(message)


class RequiresLoginException(Exception):
    def __init__(self, url_redirected: str = '/'):
        super().__init__()
        self.url_redirected = url_redirected


manager = ConnectionManager()
db = App_DB()
default_form_data = Form_data()
openAI_api = Connect_to_openAI_api(default_form_data)


def check_login(email: str, psw: str, url: str = '/'):
    db_response = db.check_user_password(email, psw)
    if db_response is None:
        return "user not fund"
    elif not (db_response[1] is None):
        user_id, token, email = db_response
        user = User(user_id=user_id, token=token)
        response = RedirectResponse(url=url, status_code=status.HTTP_303_SEE_OTHER)
        response.set_cookie(key="access_token", value=token)
        response.set_cookie(key="user_id", value=user_id)
        return response
    else:
        return "bad password"


def check_token(request: Request):
    cookies = request.cookies
    if ('user_id' not in cookies or 'access_token' not in cookies):
        raise RequiresLoginException(request.url.path)

    db_response = db.check_user_token(cookies['user_id'], cookies['access_token'])
    if db_response is None:
        raise RequiresLoginException(request.url.path)

def save_user_npc(npc_data: NPC_data, request: Request):
    cookies = request.cookies
    db_response = db.insert_user_npc(cookies['user_id'], npc_data)
    return db_response

def get_all_user_npc(request: Request):
    cookies = request.cookies
    tmp = db.select_all_user_npc(cookies['user_id'])
    npc = {clan:[] for i,clan,nom in tmp }
    for i, clan, nom in tmp:
        npc[clan].append((i,nom))
    tmp = [[(None,None)] for i in range(8)]
    for clan in npc:
        npc[clan].sort(key=lambda x: x[0])
        tmp[save_npc_order[clan]] = npc[clan]
    return tmp

def disconnect_user(request: Request):
    cookies = request.cookies
    redirect_response = RedirectResponse(url='/login')
    db.delete_user_token(cookies["user_id"])
    redirect_response.delete_cookie("access_token")
    redirect_response.delete_cookie("user_id")
    return redirect_response

def get_user_npc(npc_id: int):
    db_response = db.select_user_npc(npc_id)
    db_response = {key: value for key, value in zip(NPC_data.model_fields.keys(),db_response)}
    return db_response

def del_user_npc(npc_id: int):
    db_response = db.drop_user_npc(npc_id)
    db_response = {key: value for key, value in zip(["npc_id", "clan", "name"],db_response)}
    for i in ["schools", "advantages", "disadvantages", "skills"]:
        db_response[i] = json.loads(db_response[i])
    return db_response

def auto_npc_inference(form_data: Form_data):
    success, response = openAI_api.call_api(form_data)
    return response


