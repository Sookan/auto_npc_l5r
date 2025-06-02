from typing import Annotated, Any
from fastapi import FastAPI, Request, Form, Depends, Response
from fastapi.responses import RedirectResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from app_back import (check_login, check_token, RequiresLoginException, auto_npc_inference, save_user_npc,
                      get_all_user_npc, get_user_npc, disconnect_user, del_user_npc)
from data_model import Form_data, NPC_data, save_npc_order_reverse

app = FastAPI()

templates = Jinja2Templates(directory="../ui/templates")
app.mount('/static', StaticFiles(directory="../ui/static"), 'static')


@app.exception_handler(RequiresLoginException)
async def exception_handler(request: Request, exc: RequiresLoginException) -> Response:
    redirect = RedirectResponse(url='/login')
    redirect.set_cookie(key="redirect_from", value=f"{exc.url_redirected}", httponly=True)
    return redirect

@app.get("/")
async def serve_spa(request: Request, should_redirect: bool = Depends(check_token)):
    return templates.TemplateResponse(name="index.html", context={"request": request})

@app.get("/login")
async def get_login(request: Request):
    return templates.TemplateResponse(name="identification.html", context={"request": request, "error": None})

@app.post("/login")
async def post_login(email: Annotated[str, Form()], pwd: Annotated[str, Form()], request: Request):
    response = check_login(email, pwd, request.cookies.get("redirect_from"))
    if response == 'user not fund':
        return templates.TemplateResponse(name="identification.html",
                                          context={"request": request, "error": "Utilisateur inconue"})
    if response == 'bad password':
        return templates.TemplateResponse(name="identification.html",
                                          context={"request": request, "error": "Mot de passe erronée"})
    else:
        return response


@app.get("/cookie")
async def get_cookie(request: Request): #, should_redirect: bool = Depends(check_token)):
    return request.cookies

@app.get("/auto_npc")
async def auto_npc(request: Request, should_redirect: bool = Depends(check_token)):
    user_npc = get_all_user_npc(request)
    return templates.TemplateResponse(name="Auto_NPC.html", context={"request": request, "select_npc":user_npc,
                                                                     "order": save_npc_order_reverse})
@app.get("/disconnect")
async def get_disconnect(request: Request):
    redirect_response = disconnect_user(request)
    return redirect_response


@app.post("/form_result")
async def form_result(form_data: Form_data, should_redirect: bool = Depends(check_token)):
    return auto_npc_inference(form_data)

@app.post("/save_npc")
async def save_npc(npc_data: NPC_data,request: Request, should_redirect: bool = Depends(check_token)):
    return save_user_npc(npc_data,request)

@app.get("/get_npc/{npc_id}")
async def get_npc(npc_id: int, should_redirect: bool = Depends(check_token)):
    return get_user_npc(npc_id)

@app.post("/del_npc/{npc_id}")
async def del_npc(npc_id: int, should_redirect: bool = Depends(check_token)):
    return del_user_npc(npc_id)


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8080)
