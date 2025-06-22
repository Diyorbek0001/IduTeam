import os

ALLOWED_HOSTS = ['*']
DEBUG = os.getenv('DEBUG', 'False') == 'True'
