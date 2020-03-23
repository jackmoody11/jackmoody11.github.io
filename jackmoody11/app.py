from flask import Flask, render_template
from jackmoody11 import blog, euler, home

from jackmoody11.blog import blog_pages
from jackmoody11.cli import build_cli
from jackmoody11.config import Config


def error_handler(e):
    return render_template('404.html'), 404


def create_app(config_class=Config):
    """Flask application factory. Initializes and returns the Flask app."""
    app = Flask(__name__)

    app.config.from_object(config_class)

    app.register_blueprint(blog.bp)
    app.register_blueprint(euler.bp)
    app.register_blueprint(home.bp)

    app.register_error_handler(404, error_handler)

    # Add build commands to CLI
    app.cli.add_command(build_cli)

    @app.context_processor
    def app_context_processor():
        return {
            "blog": blog_pages
        }

    blog_pages.init_app(app)
    return app
