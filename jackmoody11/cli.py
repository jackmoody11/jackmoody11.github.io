from flask import current_app
from flask_frozen import Freezer
import os
import shutil

from flask.cli import AppGroup

build_cli = AppGroup('build')


def build():
    """Builds the static files."""
    print("Freezing it up! Brr...")
    freezer = Freezer(current_app)
    freezer.freeze()  # Freezes the project to build/
    print('Copying CNAME...')
    top_level_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    cname = os.path.join(top_level_dir, 'CNAME')
    shutil.copyfile(cname, os.path.join(
        current_app.config['FREEZER_DESTINATION'], 'CNAME'))
    print('...done')


@build_cli.command('deploy')
def deploy():
    """Deploys the site to GitHub Pages."""
    build()
    print('Deploying to GitHub pages...')
    build_dir = current_app.config['FREEZER_DESTINATION']
    command = 'ghp-import -b master -m "[deploy] Build" '
    command += '-p -f '  # Force push
    command += build_dir
    os.system(command)
    print('...done')
