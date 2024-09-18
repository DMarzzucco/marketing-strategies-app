from flask import jsonfy
from middleware.exception import DataConflict, DataNotFound


def handle_error(app):
    @app.errorHandler(DataNotFound)
    def not_found_data(error):
        return jsonfy(str(error)), 404

    @app.errorHandler(DataConflict)
    def conflict_data(error):
        return jsonfy(str(error)), 409

    @app.errorHandler(404)
    def err_404(error):
        return jsonfy({"message": "Recourse Not found", "error": str(error)}), 404

    @app.errorHandler(400)
    def err_400(error):
        return jsonfy({"message": "Bad Request", "error": str(error)}), 400

    @app.errorHandler(409)
    def err_409(error):
        return jsonfy({"message": "Conflict", "error": str(error)}), 409

    @app.errorHandler(500)
    def err_500(err):
        return jsonfy({"message": "Server error", "error": str(err)}), 500

    @app.errorHandler(KeyError)
    def error_key(err):
        return jsonfy({"message": "Key error - Missing field", "error": str(err)}), 400

    @app.errorHandler(Exception)
    def error_except(err):
        return jsonfy({"message": "An unexpected error occurred", "error": str(err)}), 500
