#Convert Json to Dictionary
import json

person = '{"name": "Bob", "languages": ["English", "Fench"]}'
person_dict = json.loads(person)

print( person_dict)

print(person_dict['languages'])