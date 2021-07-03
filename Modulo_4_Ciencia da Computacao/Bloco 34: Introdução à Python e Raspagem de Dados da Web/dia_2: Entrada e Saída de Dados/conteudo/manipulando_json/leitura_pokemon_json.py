import json


with open("pokemons.json") as file:
    pokemons = json.load(file)["results"]

print(pokemons[0]["type"])  # imprime o primeiro pokemon da lista