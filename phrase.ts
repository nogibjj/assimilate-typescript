//phrase repeater cli
//build a function that takes a phrase and a number of times to repeat it and use types
//to make sure the function is called with the correct arguments
function phraseRepeater (phrase: string, num: number) {
    for (let i = 0; i < num; i++) {
        console.log(phrase);
    }
}

phraseRepeater("fruit", 3);