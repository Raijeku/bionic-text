// Word validation
const isAlphaWithPunctuation = str => /^[a-zA-Z.,'!?;:()]*$/.test(str);

// Main function for converting text in all paragraphs to bionic text
function bionicText(){
    // Useful for Arxiv HTML papers
    const allElements = document.querySelectorAll('*')
    allElements.forEach(el => el.classList.remove('ltx_para'))

    paragraphs = document.querySelectorAll('p');
    newParagraphs = []
    paragraphs.forEach(element => {

        text = element.innerHTML;
        textSplit = text.split(' ');
        newTextSplit = [];
        textSplit.forEach(word => {
            if(isAlphaWithPunctuation(word)){
                newTextSplit.push(bionicWord(word));
            } else {
                newTextSplit.push(word);
            }
        });
        newParagraph = newTextSplit.join(' ');
        newParagraphs.push(newParagraph);
    });
    for (let index = 0; index < newParagraphs.length; index++) {
        const element = newParagraphs[index];
        paragraphs[index].innerHTML = element;
    }
}

// Random range integer
function getRandomInt(min, max) {
    return Math.floor(Math.random() * max) + min;
}

// Converts a word into a bionic word
function bionicWord(word){
    wordLength = word.length;
    bionicLength = Math.floor(wordLength/2);
    newWord = '<b>'+word.substring(0, bionicLength)+'</b>'+word.substring(bionicLength);
    return newWord;
}