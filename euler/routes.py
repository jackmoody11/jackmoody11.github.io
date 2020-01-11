from flask import Blueprint, render_template
import json
import requests
import sys

euler = Blueprint('euler', __name__)


@euler.route('/euler/solutions/<number>/')
def show(number):
    return render_template('euler/solutions/{number}.html'.format(number=number), number=number)


@euler.route('/euler/')
def index():
    with open('./static/json/euler_solutions.json') as f:
        _solutions = json.load(f)['solutions']
    return render_template('euler/base.html', solutions=_solutions)
