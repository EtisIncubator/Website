all: assets app
assets:
	@cd assets && make
app:
	@cd app && go build .
install: all
	@echo Creating install dir
	@mkdir -p install
	@cp -r assets/compiled install/public
	@cp -r app/app install
	@cp -r template install/
	@cp -r assets/js/out install
ball: install
	@echo Creating tarball

.PHONY: ball app assets
