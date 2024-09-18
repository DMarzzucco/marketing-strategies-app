from models.product import products


class DataRepository:
    def __init__(self):
        self.products = products

    def get_all(self):
        return self.products

    def get_by_id(self, name):
        return next((product for product in self.products if product["name"] == name), None)

    def save_data(self, data):
        self.products.append(data)

    def update(self, name, data):
        res = self.get_by_id(name)
        if res:
            res.update(data)

    def delete(self, name):
        res = self.get_by_id(name)
        if res:
            self.products.remove(res)
            return True
        return False
