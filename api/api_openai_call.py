from openai import OpenAI
from data_model import Form_data, NPCBackground
import json


with open('json_data/api_key.json', 'r') as f:
    api_key = json.load(f)



class Connect_to_openAI_api:
    def __init__(self, data: Form_data, model="gpt-4.1", reasoning={}, tools=[], temperature=1, max_output_tokens=2048, top_p=1, store=True):
        self.client = OpenAI(api_key=api_key['API_KEY'])
        self.model = model
        self.reasoning = reasoning
        self.tools = tools
        self.temperature = temperature
        self.max_output_tokens = max_output_tokens
        self.top_p = top_p
        self.store = store
        self.data = data
        with open(f'json_data/great_families.json', 'r') as file:
            self.families = json.load(file)
        with open(f'json_data/disadvantages.json', 'r') as file:
            self.disadvantages = json.load(file)
        with open(f'json_data/advantages.json', 'r') as file:
            self.advantages = json.load(file)
        with open(f'json_data/clan_view.json', 'r') as file:
            self.clan_view = json.load(file)

    def complete_build_prompt(self):
        build_prompt = f""" the NPC is from {self.data.clan}, 
            {"a ".join([f"{self.data.schools[f'name_{i}']} rank {self.data.schools[f'rank_{i}']}" for i in range(1, len(self.data.schools)//2+1)])}
            of the {self.data.family}, 
            {f"its advantage are: {', '.join([self.data.advantages[i] for i in self.data.advantages])}" if len(self.data.advantages) > 0 else ''}.
            {f"its disadvantage are: {', '.join([self.data.disadvantages[i] for i in self.data.disadvantages])}" if len(self.data.disadvantages) > 0 else ''}.
            {f"otheir info: {self.data.info_sup}" if self.data.info_sup else ''}
            Give me only the name (family name then first name up to you ), background, appearance, personality. 
            format this info as a Json, don't put any uppercase character in the key of the JSON.
            Include nothing else.
            Remember to only respond with name, background, appearance, personality"""
        return build_prompt

    def complete_clan_information(self, clan_description: str, family_description: str):
        clan_information = f"""here the description of the clan: 
            {clan_description}
            Here how they view other member of Rokugan: 
            {self.clan_view[self.data.clan]}
            Here how his family description:
            {family_description}
        """
        return clan_information

    def complete_build_information(self, schools: str, advantage_description: str, disadvantage_description: str):
        build_information = f"""here more specific information about the NPC build. 
             {schools}
             {advantage_description}
             {disadvantage_description}
            """
        return build_information

    def input_info(self, data: Form_data):
        self.data = data
        print(data.schools, data.family)
        if data.schools != {} and data.family != '':
            with open(f'json_data/{self.data.clan}_clan_schools.json', 'r') as file:
                self.schools = json.load(file)
            families = self.families[self.data.clan]
            print(families)
            if self.data.family[-1] == ')':
                family_description = None
            else:
                family_description = families[self.data.family]
            clan_description = families["clan_description"]
            if self.data.advantages:
                advantage_description = ''
            else:
                advantage_description = "advantages description:\n"
                for adv in self.data.advantages:
                    advantage_description += f"{adv}: {self.advantages[adv]['description']}\n"
            if self.data.disadvantages:
                disadvantage_description = ''
            else:
                disadvantage_description = "disadvantages description:\n"
                for dis in self.data.disadvantages:
                    disadvantage_description += f"{dis}: {self.disadvantages[dis]['description']}"
            if self.data.schools:
                schools = "schools:\n"
                for i in range(1, len(self.data.schools)//2+1):
                    schools += f"{self.data.schools[f'name_{i}']}: {self.schools[self.data.schools[f'name_{i}']]['Schools_description']}"
            else:
                pass
            self.build_prompt = self.complete_build_prompt()
            self.clan_information = self.complete_clan_information(clan_description, family_description)
            self.build_information = self.complete_build_information(schools, advantage_description, disadvantage_description)
            return True
        else:
            return False

    def call_api(self, data: Form_data):
        correct = self.input_info(data)
        if correct:
            response = self.client.responses.parse(
                model=self.model,
                input=[
                    {
                        "role": "system",
                        "content": [
                            {
                                "type": "input_text",
                                "text": "Forget every thing that was said before."
                                        "You're a game master for a legend of the five rings (L5R) 4th edition."
                                        "Your goal is to create interesting Non Playable Character (NPC)."
                            }
                        ]
                    },
                    {
                        "role": "user",
                        "content": [
                            {
                                "type": "input_text",
                                "text": self.clan_information
                            }
                        ]
                    },
                    {
                        "role": "user",
                        "content": [
                            {
                                "type": "input_text",
                                "text": self.build_information
                            }
                        ]
                    },
                    {
                        "role": "user",
                        "content": [
                            {
                                "type": "input_text",
                                "text": self.build_prompt
                            }
                        ]
                    }
                ],
                text_format=NPCBackground,
                reasoning=self.reasoning,
                tools=self.tools,
                temperature=self.temperature,
                max_output_tokens=self.max_output_tokens,
                top_p=self.top_p,
                store=self.store
            )
            return correct, response.output_parsed
        else:
            return correct, 'fail'

