# Django Project

This is a web application built with Django.

# Screenshots
<img src="/assets/home.png" alt="Screenshot 1" width="600"/>
<img src="/assets/quiz.png" alt="Screenshot 2" width="600"/>

## Prerequisites

Before you begin, ensure you have met the following requirements:

* You have installed the latest version of Python and pip.
* You have a Linux machine. (I havent tried on windows yet)

## Installing Django Project

To install Django, follow these steps:

1. Create a new directory for your project:

```bash
mkdir django_project
cd django_project# django-project
python3 -m venv env

source env/bin/activate

pip install django

cd QuizWhiz/QuizWhiz

python manage.py runserver