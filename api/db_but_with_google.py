import os
from data_model import NPC_data
import sqlalchemy
from sqlalchemy.dialects.postgresql import JSONB, insert
from google.cloud.sql.connector import Connector
import pg8000


class App_DB:
    def __init__(self):
        self.__dbname = "postgres"
        self.__user = "postgres"
        self.__password = os.environ['DB_GCP_PASSWORD']
        self.__host = "35.195.101.89"
        self.__port = 5432
        self.pool = sqlalchemy.create_engine(
            sqlalchemy.engine.url.URL.create(
            drivername="postgresql+pg8000",
            username=self.__user,
            password=self.__password,
            host=self.__host,
            port=self.__port,
            database=self.__dbname,
            query={"unix_sock": f"{os.environ['INSTANCE_CONNECTION_NAME']}"}))

    def check_user_password(self, email, password):
        with self.pool.connect() as cur:
            query = "SELECT * FROM login_token(%s,%s)"
            tmp = cur.exec_driver_sql(query, (password, email)).fetchone()
            cur.commit()
            return tmp

    def check_user_token(self, user_id, token):
        with self.pool.connect() as cur:
            query = """ SELECT * FROM check_token(%s,%s)"""
            tmp = cur.exec_driver_sql(query, (user_id, token)).fetchone()
            return tmp

    def delete_user_token(self, user_id):
        with self.pool.connect() as cur:
            query = """SELECT delete_user_token(%s);"""
            cur.exec_driver_sql(query, (user_id,))
            cur.commit()
        return None

    def insert_user_npc(self, user_id, npc_data: NPC_data) -> bool:
        try:
            with self.pool.connect() as cur:
                query = """
                        SELECT * FROM insert_user_npc(%s, %s, %s, %s , %s, %s, %s, %s, %s , %s, %s, %s, %s, %s, 
                        %s, %s, %s, %b, %b, %b, %b, %s, %s, %s, %s)
                        """
                tmp = cur.exec_driver_sql(query, (int(user_id),
                                    *(JSONB(i) if type(i) is dict else i for i in npc_data.model_dump().values()))).fetchone()
                cur.commit()
                return tmp
        except:
            return False

    def select_all_user_npc(self, user_id):
        with self.pool.connect() as cur:
            query = "SELECT * from select_all_user_npc(%s) "
            tmp = cur.exec_driver_sql(query, (user_id,)).fetchall()
            return tmp

    def select_user_npc(self, npc_id):
        with self.pool.connect() as cur:
            query = "SELECT * from select_user_npc(%s)"
            tmp = cur.exec_driver_sql(query, (npc_id,)).fetchone()
            return tmp

    def drop_user_npc(self, npc_id):
        with self.pool.connect() as cur:
            query = "SELECT * from drop_user_npc(%s)"

            tmp = cur.exec_driver_sql(query, (npc_id,)).fetchone()
            cur.commit()
            return tmp

