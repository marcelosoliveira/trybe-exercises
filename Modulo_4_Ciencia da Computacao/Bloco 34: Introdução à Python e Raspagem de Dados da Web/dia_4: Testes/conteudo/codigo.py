def is_odd(number):
    'Retorna True se um número é verdadeiro, senão False.'
    return number % 2 != 0


def get_most_ordered_dish_per_costumer(orders, customer):
    return orders[customer].order

def get_order_frequency_per_costumer(orders, customer, order):
    for index in orders:
        if index.customer == customer and index.order == order:
            return 1
        else:
            return 0    
