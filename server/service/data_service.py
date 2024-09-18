from repository.data_repository import DataRepository
from middleware.exception import DataConflict, DataNotFound


class DataService:
    def __init__(self, data_repository: DataRepository):
        self.data_repository = data_repository

    def get_all(self):
        return self.data_repository.get_all()

    def get_by_id(self, name):
        data = self.data_repository.get_by_id(name)
        if not data:
            raise DataNotFound(f"Data '{name}'not found")
        return data

    def create_data(self, data):
        if not data or not all(k in data for k in ("name", "price", "quantity")):
            raise DataConflict()
        exist = self.data_repository.get_by_id(data["name"])
        if exist:
            raise DataConflict(f"Data '{data['name']}' already exist ")
        return self.data_repository.update(data)

    def update_data(self, name, data):
        us = self.data_repository.get_by_id(name)
        if not us:
            raise DataNotFound(f"Data '{name}' not found")
        new_data = self.data_repository.update(name, data)
        if not new_data:
            raise DataConflict("Invalid Input")
        return new_data

    def delete(self, name):
        data = self.data_repository.get_by_id(name)
        if not data:
            raise DataNotFound(f"Data {name} not found")
        return self.data_repository.delete(data)
