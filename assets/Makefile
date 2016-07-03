all: pre css compiled/bundle.js static

pre:
	@mkdir -p compiled

compiled/bundle.js:
	gulp
compiled/bundle.css:
	gulp css
static:
	@echo copy static files
	@cp -r img/* compiled/


.PHONY: pre css static compiled/bundle.js
