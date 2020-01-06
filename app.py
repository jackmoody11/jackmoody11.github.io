from flask import Flask, render_template
import json

app = Flask(__name__)
app.config['TEMPLATES_AUTO_RELOAD'] = True


@app.route('/index')
@app.route('/')
def index():
    return render_template('home.html')


@app.route('/projects')
def projects():
    with open('./static/json/projects.json') as f:
        _projects = json.load(f)['projects']
    return render_template('projects.html', projects=_projects)


@app.route('/blog')
def blog():
    return render_template('blog/base.html')


@app.route('/euler')
def euler():
    return render_template('/project_euler/base.html')


if __name__ == '__main__':
    app.run()
