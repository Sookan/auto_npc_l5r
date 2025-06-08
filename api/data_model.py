from pydantic import BaseModel
from typing import Union

class User(BaseModel):
    token: Union[str, None] = None
    user_id: Union[int, None] = None

class Form_data(BaseModel):
    earth_cicle: int = 2
    stamina: int = 2
    willpower: int = 2
    air_cicle: int = 2
    reflexes: int = 2
    awareness: int = 2
    fire_cicle: int = 2
    agility: int = 2
    intelligence: int = 2
    water_cicle: int = 2
    strength: int = 2
    perception: int = 2
    void: int = 2
    info_sup: str = ''
    clan: str = "crab"
    family: str = ""
    schools: dict[str, str] = {}
    advantages: dict[str, str] = {}
    disadvantages: dict[str, str] = {}
    skills: dict[str, str] = {}

class NPCBackground(BaseModel):
    name: str = ''
    npc_background: str = ''
    appearance: str = ''
    personality: str = ''

class NPC_data(NPCBackground, Form_data ):
    pass

save_npc_order = {'crab':0, 'crane':1, 'dragon':2, 'lion':3, 'mantis':4, 'phoenix':5, 'scorpion':6, 'unicorn':7 }
save_npc_order_reverse = {value:key for key,value in save_npc_order.items() }