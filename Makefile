NPM=/usr/bin/npm

default: dev

test-npm:
	$(NPM) --version

install-deps:
	$(NPM) install

dev: install-deps
	$(NPM) run dev

build:
	$(NPM) run build

clean:
	rm -rf node_modules

lint: install-deps
	./node_modules/.bin/next lint
