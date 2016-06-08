all: assets app
assets:
	@cd assets && make
app:
	@cd app && go build .
install: all
	@echo Creating install dir
	@mkdir -p install
	@cp -r assets/compiled install/
	@cp -r app/app install
	@cp -r templates install/
ball: install
	@echo Creating tarball

.PHONY: ball app
