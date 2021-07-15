class User:

    def __init__(self, name, street, number, district):
        '''Você nunca vai passar a rua sem passar também o número e o bairro!'''
        self.name = name
        self.address_street = street
        self.address_number = number
        self.address_district = district