
PI = 3.14159

class Circulo:    
    def __init__(self, raio):
        self.raio = raio


    def calcular_area(self):
        return PI * (self.raio * self.raio)


    def calcular_perimetro(self):
        return PI + (2 * self.raio)


circulo2 = Circulo(7)
print(circulo2.calcular_area())
print(circulo2.calcular_perimetro())