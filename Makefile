compile:
	@echo "Compiling typescript files with --strict"
	@tsc --strict *.ts
clean:
	@echo "Deleting all javascript files"
	@rm -f *.js