import os


class Config:
    TEMPLATES_AUTO_RELOAD = True
    FREEZER_DESTINATION = os.path.dirname(os.path.abspath(__file__))
