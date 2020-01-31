from flask import current_app
from flask_frozen import Freezer
import os

from flask.cli import AppGroup

build_cli = AppGroup('build')


@build_cli.command('build')
def build():
    """Builds the static files."""
    print("Freezing it up! Brr...")
    freezer = Freezer(current_app)
    freezer.freeze()  # Freezes the project to build/
    # print('Copying CNAME...')
    # cname = os.path.join(HERE, 'CNAME')
    # shutil.copyfile(cname, os.path.join(build_dir, 'CNAME'))
    print('...done')


@build_cli.command('deploy')
def deploy():
    """Deploys the site to GitHub Pages."""
    print('Freezing it up! Brr...')
    freezer = Freezer(current_app)
    freezer.freeze()
    print('...done')
    print('Deploying to GitHub pages...')
    build_dir = current_app.config['FREEZER_DESTINATION']
    command = 'ghp-import -b master -m "[deploy] Build" '
    command += '-p -f '  # Force push
    command += build_dir
    os.system(command)
    print('...done')
