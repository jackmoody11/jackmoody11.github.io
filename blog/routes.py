from flask import Blueprint, render_template

blog = Blueprint('blog', __name__)


@blog.route('/<page>')
def show(page):
    return render_template('/blog/{page}.html'.format(page=page))


@blog.route('/blog')
def index():
    return render_template('blog/base.html')


@blog.route('/euler')
def euler():
    return render_template('project_euler/base.html')
