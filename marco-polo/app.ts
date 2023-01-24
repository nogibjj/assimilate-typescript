/*
Marco Polo cli that takes a string and returns Polo if the string is Marco
or Who? if the string is not Marco
*/

//build a Marco Polo function that takes a string and returns a string
function marcoPolo (phrase: string) {
    if (phrase === "Marco") {
        return "Polo";
    } else {
        return "Who?";
    }
}

//invoke the function and accept user input via the command line
console.log(marcoPolo(process.argv[2]));
