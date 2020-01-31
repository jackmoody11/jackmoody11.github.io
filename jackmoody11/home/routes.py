import json

from flask import Blueprint, render_template

bp = Blueprint('home', __name__, static_folder='home/static')


@bp.route('/index/')
@bp.route('/')
def index():
    return render_template('home/home.html')


@bp.route('/projects/')
def projects():
    with bp.open_resource('static/json/projects.json') as f:
        _projects = json.load(f)['projects']
    return render_template('home/projects.html', projects=_projects)
