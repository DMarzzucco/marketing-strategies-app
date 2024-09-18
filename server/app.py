from flask import Flask
from routes.routes import routes
from middleware.error_handler import handle_error

app = Flask(__name__)

app.register_blueprint(routes)
handle_error(app)

if __name__ == "__main__":
    app.run(debug=True, port=4000)
