import json

from flask import Blueprint, render_template

home = Blueprint('home', __name__, template_folder='templates', static_folder='static')


@home.route('/index/')
@home.route('/')
def index():
    return render_template('home.html')


@home.route('/projects/')
def projects():
    with home.open_resource('static/json/projects.json') as f:
        _projects = json.load(f)['projects']
    return render_template('projects.html', projects=_projects)
