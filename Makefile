compile:
	@echo "Compiling typescript files with --strict"
	@tsc --strict *.ts tsmoduleHello/*.ts
clean:
	@echo "Deleting all javascript files"
	@rm -f *.js && rm -f tsmoduleHello/*.js

all: clean compile