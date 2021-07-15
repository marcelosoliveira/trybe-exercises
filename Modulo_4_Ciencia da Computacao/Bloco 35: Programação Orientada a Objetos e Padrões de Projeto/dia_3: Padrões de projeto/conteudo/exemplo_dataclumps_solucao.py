class Address:
    def __init__(self, street, number, district):
        '''As informações que nunca vem separadas são uma entidade separada agora.'''
        self.street = street
        self.number = number
        self.district = district

class User:
    def __init__(self, name, address):
        self.name = name
        self.address = address



GeoPoint = namedtuple('GeoPoint', 'lat lon')
location = GeoPoint(-22.81711234090266, -47.069559317039655)
print(location.lat) # muito melhor do que location[0]