import json
import os

from flask import Blueprint, render_template

main_directory = os.path.dirname(os.path.abspath(__file__))
template_directory = os.path.join(main_directory, 'templates')
main = Blueprint('main', __name__, template_folder=template_directory)


@main.route('/index/')
@main.route('/')
def index():
    return render_template('home.html')


@main.route('/projects/')
def projects():
    print(os.getcwd())
    with open('jackmoody11/static/json/projects.json') as f:
        _projects = json.load(f)['projects']
    return render_template('projects.html', projects=_projects)
