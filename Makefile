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
clean:
	@echo cleaning
	@rm -rf app/app
	@rm -rf assets/compiled
	@rm -rf assets/js/out
	@rm -rf install

.PHONY: ball app assets
