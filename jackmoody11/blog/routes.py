import datetime
import os

# from jackmoody11.app import pages
from flask import Blueprint, render_template

blog_directory = os.path.dirname(os.path.abspath(__file__))
template_directory = os.path.join(blog_directory, 'templates')
blog = Blueprint('blog', __name__, template_folder=template_directory)


def _ensure_datetime(val):
    """Ensure ``val`` is a datetime.datetime object, converting it
    from a datetime.date if necessary.
    """
    if isinstance(val, datetime.date):
        ret = datetime.datetime.combine(val, datetime.datetime.min.time())
    elif isinstance(val, datetime.datetime):
        ret = val
    else:
        raise ValueError('Could not convert {} to a datetime.datetime')
    return ret


@blog.route('/<path:path>/')
def show(path):
    return render_template('/blog/{path}.html'.format(path=path))


@blog.route('/blog/')
def index():
    def sort_key(page):
        return _ensure_datetime(page.meta['updated'])

    # pages_sorted = [page for page in sorted(pages,
    #                                         reverse=True,
    #                                         key=sort_key)]
    # return render_template('blog/base.html', pages=pages_sorted)
    return 'Nothing'
