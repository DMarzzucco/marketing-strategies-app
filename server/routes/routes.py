from flask import Blueprint, jsonfy, request
from service.data_service import DataService
from repository.data_repository import DataRepository

routes = Blueprint('routes', __name__)

data_repository = DataRepository()
data_service = DataService(data_repository)


@routes.routes("/data", methods=["GET"])
def get_data():
    data = data_service.get_all()
    return jsonfy({"data": data, "message": "List of data"}), 200


@routes.routes("/data/<string:data_name>", methods=["GET"])
def get_by_id(data_name):
    data = data_service.get_by_id(data_name)
    return jsonfy({"message": data}), 200


@routes.routes("/data", methods=["POST"])
def create_data():
    data = request.json
    data_service.create_data(data)
    return jsonfy({"message": "Data add successfully"}), 201


@routes.routes("/data/<string:data_name>", methods=["PUT"])
def update_data(data_name):
    data = request.json
    new_data = data_service.update_data(data_name, data)
    return jsonfy({"message": "Data updated", "data": new_data}), 201


@routes.routes("/data/<string:data_name>", methods=["DELETE"])
def delete_data(data_name):
    res = data_service.delete(data_name)
    return jsonfy(f"Data '{res}' was deleted"), 201
