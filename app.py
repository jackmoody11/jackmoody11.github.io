from flask import Flask, render_template
from config import Config


def create_app(config_class=Config):
    app = Flask(__name__)

    app.config.from_object(config_class)

    from blog import blog
    from euler import euler
    from main import main

    app.register_blueprint(main)
    app.register_blueprint(blog)
    app.register_blueprint(euler)

    return app


if __name__ == '__main__':
    from elsa import cli

    cli(create_app(), base_url='https://jackmoody11.github.io')
