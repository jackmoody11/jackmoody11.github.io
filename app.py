import click
import os

from flask import Flask
from flask_frozen import Freezer
from personal_site.config import Config


def create_app(config_class=Config):
    app = Flask(__name__)

    app.config.from_object(config_class)

    from personal_site.blog import blog
    from personal_site.euler import euler
    from personal_site.main import main

    app.register_blueprint(main)
    app.register_blueprint(blog)
    app.register_blueprint(euler)

    return app


app = create_app()
freezer = Freezer(app)
build_dir = app.config['FREEZER_DESTINATION']


@app.cli.command('build')
def build():
    """Builds the static files."""
    print("Freezing it up! Brr...")
    freezer.freeze()  # Freezes the project to build/
    # print('Copying CNAME...')
    # cname = os.path.join(HERE, 'CNAME')
    # shutil.copyfile(cname, os.path.join(build_dir, 'CNAME'))
    print('...done')


@app.cli.command('deploy')
def deploy():
    """Deploys the site to GitHub Pages."""
    print('Freezing it up! Brr...')
    freezer.freeze()
    print('...done')
    print('Deploying to GitHub pages...')
    command = 'ghp-import -b master -m "[deploy] Build" '
    command += '-p '
    command += build_dir
    print(build_dir)
    os.system(command)
    print('...done')


if __name__ == '__main__':
    app = create_app()
    app.run()
