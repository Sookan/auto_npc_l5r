import psycopg
import os
from data_model import NPC_data
from psycopg.types.json import Jsonb
import json


with open('json_data/db_key.json', 'r') as f:
    db_key = json.load(f)


class App_DB:
    def __init__(self):
        self.__dbname = db_key["dbname"]
        self.__user = db_key["user"]
        self.__password = db_key["password"]
        self.__host = db_key["host"]
        self.__port = db_key["port"]
        self.conn = psycopg.connect(dbname=self.__dbname, user=self.__user,
                                     password=self.__password, host=self.__host, port=self.__port)

    def check_user_password(self, email, password):
        with self.conn.cursor() as cur:
            query = "SELECT * FROM login_token(%s,%s)"
            cur.execute(query, (password, email))
            self.conn.commit()
            return cur.fetchone()

    def check_user_token(self, user_id, token):
        with self.conn.cursor() as cur:
            query = """ SELECT * FROM check_token(%s,%s)"""
            cur.execute(query, (user_id, token))
            return cur.fetchone()

    def delete_user_token(self, user_id):
        with self.conn.cursor() as cur:
            query = """
                SELECT delete_user_token(%s);
                """
            cur.execute(query,  (user_id,))
            self.conn.commit()
        return None

    def insert_user_npc(self, user_id, npc_data: NPC_data)-> bool:
        try:
            print((int(user_id), *(Jsonb(i) if type(i) is dict else i for i in npc_data.model_dump().values())))
            with self.conn.cursor() as cur:
                query = """
                        SELECT * FROM insert_user_npc(%s, %s, %s, %s , %s, %s, %s, %s, %s , %s, %s, %s, %s, %s, 
                        %s, %s, %s, %b, %b, %b, %b, %s, %s, %s, %s)
                        """
                cur.execute(query, (int(user_id), *(Jsonb(i) if type(i) is dict else i for i in npc_data.model_dump().values())))
                self.conn.commit()
                return cur.fetchone()
        except:
            return False


    def select_all_user_npc(self,user_id):
        with self.conn.cursor() as cur:
            query = "SELECT * from select_all_user_npc(%s) "
            cur.execute(query, (user_id,))
            return cur.fetchall()

    def select_user_npc(self,npc_id):
        with self.conn.cursor() as cur:
            query = "SELECT * from select_user_npc(%s)"
            cur.execute(query, (npc_id,))
            return cur.fetchone()

    def drop_user_npc(self,npc_id):
        with self.conn.cursor() as cur:
            query = "SELECT * from drop_user_npc(%s)"
            self.conn.commit()
            cur.execute(query, (npc_id,))
            return cur.fetchone()

