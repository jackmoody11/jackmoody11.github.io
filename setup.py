import codecs
import os
import re

from setuptools import setup, find_packages

from setuptools.command.install import install

here = os.path.abspath(os.path.dirname(__file__))


def find_version(*file_paths):
    """Read the version number from a source file.
    Why read it, and not import?
    see https://groups.google.com/d/topic/pypa-dev/0PkjVpcxTzQ/discussion
    """
    # Open in Latin-1 so that we avoid encoding errors.
    # Use codecs.open for Python 2 compatibility
    with codecs.open(os.path.join(here, *file_paths), 'r', 'latin1') as f:
        version_file = f.read()

    # The version line must have the form
    # __version__ = 'ver'
    version_match = re.search(r"^__version__ = ['\"]([^'\"]*)['\"]",
                              version_file, re.M)
    if version_match:
        return version_match.group(1)
    raise RuntimeError("Unable to find version string.")


def parse_requirements(*files):
    required = []
    for file in files:
        with open(file) as f:
            required.append(f.read().splitlines())
    return required


# Get the long description from the relevant file
with codecs.open('README.md', encoding='utf-8') as f:
    LONG_DESCRIPTION = f.read()

setup(
        name='Jack Moody\'s Website',
        version=find_version('jackmoody11', '__init__.py'),
        long_description=LONG_DESCRIPTION,
        packages=find_packages(exclude=['build', 'contrib', 'docs', 'tests*']),
        url='https://github.com/jackmoody11/jackmoody11.github.io',
        cmdclass={'install': install},
        license='MIT',
        author='Jack Moody',
        include_package_data=True,
        zip_safe=False,
        install_requires=parse_requirements('requirements.txt')
)
