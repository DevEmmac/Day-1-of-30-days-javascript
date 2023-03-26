//EXERCISE: LEVEL 2


/*
(Question 1)
Write a function called tenMostFrequentWords which get the ten
most frequent word from a string?
*/

const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
function tenMostFrequentWords (paragraph, num) {
   let words = [];
    [...new Set(paragraph.match( /[a-zA-Z0-9]+/g))].forEach((word) => {
        words.push({
            'word': word,
            'countt': paragraph.match(new RegExp(word+'(?=(\\s|\\.|\\,|\\;|\\?))', 'g')).length
        })
    })
    words.sort((a,b) => b.count - a.count);
    for(let i = 0; i < num; i++){
        console.log(words[i])
    }
    return words;   
    
}
tenMostFrequentWords(paragraph,10)