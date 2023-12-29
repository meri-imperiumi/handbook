.PHONY: run
venv=. venv/bin/activate &&

venv:
	python -m venv venv

deps: venv
	$(venv) pip install -r requirements.txt

run:
	$(venv) mkdocs serve -a 0.0.0.0:8000 --no-livereload

all: deps
