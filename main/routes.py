from flask import Blueprint, render_template
import json

main = Blueprint('main', __name__)


@main.route('/index/')
@main.route('/')
def index():
    return render_template('home.html')


@main.route('/projects/')
def projects():
    with open('./static/json/projects.json') as f:
        _projects = json.load(f)['projects']
    return render_template('projects.html', projects=_projects)
