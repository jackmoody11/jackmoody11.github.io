from flask import Flask, render_template
from config import Config
import json


def create_app(config_class=Config):
    app = Flask(__name__)

    app.config.from_object(Config)

    from main import main
    from blog import blog
    from euler import euler

    app.register_blueprint(main)
    app.register_blueprint(blog)
    app.register_blueprint(euler)

    return app


if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)
