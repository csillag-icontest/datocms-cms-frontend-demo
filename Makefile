NPM=/usr/bin/npm

default: dev

test-npm:
	$(NPM) --version

install-deps:
	$(NPM) install

dev: install-deps
	$(NPM) run dev

clean:
	rm -rf node_modules
