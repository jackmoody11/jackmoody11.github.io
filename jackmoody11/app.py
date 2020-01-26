import os

from flask import Flask
from flask_frozen import Freezer
from jackmoody11.config import Config


def create_app(config_class=Config):
    _app = Flask(__name__)

    _app.config.from_object(config_class)

    from jackmoody11.blog import blog
    from jackmoody11.euler import euler
    from jackmoody11.main import main

    _app.register_blueprint(main)
    _app.register_blueprint(blog)
    _app.register_blueprint(euler)

    return _app


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
    print('Deploying to GitHub templates...')
    command = 'ghp-import -b master -m "[deploy] Build" '
    command += '-p -f '  # Force push
    command += build_dir
    print(build_dir)
    os.system(command)
    print('...done')


if __name__ == '__main__':
    app = create_app()
    app.run()
