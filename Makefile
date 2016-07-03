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
	@cp -r assets/templates install/
ball: install
	@echo Creating tarball
clean:
	@echo cleaning
	@rm -rf app/app
	@rm -rf install

.PHONY: ball app assets
