all: pre css js static

pre:
	@mkdir -p compiled

css:
	@echo none
js:
	@cd js && lein cljsbuild once
static:
	@echo copy static files
	@cp -r img/* compiled/

.PHONY: pre css js static
