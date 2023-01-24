install:
	@echo "Installing typescript"
	@npm install -g typescript
	@npm install -g ts-node typescript '@types/node'

build:
	@echo "Compiling typescript files with --strict"
	@tsc --strict *.ts 

run:
	@ts-node *.ts "Marco"

clean:
	@echo "Deleting all javascript files"
	@rm -f *.js && rm -f tsmoduleHello/*.js

all: clean build