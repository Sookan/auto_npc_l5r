import os
from data_model import NPC_data
import sqlalchemy
from sqlalchemy.dialects.postgresql import JSONB, insert



class App_DB:
    def __init__(self):
        self.__dbname = "postgres"
        self.__user = "postgres"
        self.__password = os.environ['DB_GCP_PASSWORD']
        self.__host = "10.112.176.3"
        self.__port = "5432"
        self.pool = sqlalchemy.create_engine.connect(
            drivername="postgresql+pg8000",
            username=self.__user,
            password=self.__password,
            host=self.__host,
            port=self.__port,
            database=self.__dbname,)


    def check_user_password(self, email, password):
        query = "SELECT * FROM login_token(%s,%s)"
        self.pool.exec_driver_sql(query, (password, email))
        self.pool.commit()
        return self.pool.fetchone()

    def check_user_token(self, user_id, token):
        query = """ SELECT * FROM check_token(%s,%s)"""
        self.pool.exec_driver_sql(query, (user_id, token))
        return self.pool.fetchone()

    def delete_user_token(self, user_id):

        query = """
            SELECT delete_user_token(%s);
            """
        self.pool.exec_driver_sql(query,  (user_id,))
        self.pool.commit()
        return None

    def insert_user_npc(self, user_id, npc_data: NPC_data)-> bool:
        try:
            query = """
                    SELECT * FROM insert_user_npc(%s, %s, %s, %s , %s, %s, %s, %s, %s , %s, %s, %s, %s, %s, 
                    %s, %s, %s, %b, %b, %b, %b, %s, %s, %s, %s)
                    """
            self.pool.exec_driver_sql(query, (int(user_id), *(JSONB(i) if type(i) is dict else i for i in npc_data.model_dump().values())))
            self.pool.commit()
            return self.pool.fetchone()
        except:
            return False


    def select_all_user_npc(self,user_id):
        query = "SELECT * from select_all_user_npc(%s) "
        self.pool.exec_driver_sql(query, (user_id,))
        return self.pool.fetchall()

    def select_user_npc(self,npc_id):
        query = "SELECT * from select_user_npc(%s)"
        self.pool.exec_driver_sql(query, (npc_id,))
        return self.pool.fetchall()

    def drop_user_npc(self,npc_id):
        query = "SELECT * from drop_user_npc(%s)"
        self.pool.exec_driver_sql(query, (npc_id,))
        self.pool.commit()
        return self.pool.fetchall()

