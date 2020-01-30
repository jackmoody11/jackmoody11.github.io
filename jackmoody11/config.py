import os


class Config:
    TEMPLATES_AUTO_RELOAD = True
    # Assumes this file is in project's home directory
    PROJECT_ROOT = os.path.dirname(os.path.join(os.path.abspath(__file__), '..'))
    # Build static files here
    FREEZER_DESTINATION = os.path.join(PROJECT_ROOT, 'build')
    BASE_URL = "https://jackmoody11.github.io"
    GITHUB_REPO = "https://github.com/jackmoody11/jackmoody11.github.io"
