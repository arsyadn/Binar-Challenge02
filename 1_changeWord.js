
const sentence1 = "My father went to Bandung last week";
const sentence2 = "I am watching movie now";

function changeWord(selectedText, changedText, text){
    return text.replace(selectedText, changedText);
}

//first sentence
console.log(changeWord("Bandung","Jogjakarta",sentence1));
//second sentence
console.log(changeWord("movie","korean drama",sentence2));



