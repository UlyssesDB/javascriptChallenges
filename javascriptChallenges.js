function convertToF(a) {
    let fahrenheit = (a * (9 / 5)) + 32;
    return fahrenheit;
}

convertToF(30);

findLongestWordLength("The quick brown fox jumped over the lazy dog");

function reverseString(str) {
    return str.split('').reverse().join('');
}

reverseString("hello");

findLongestWordLength("The quick brown fox jumped over the lazy dog");

function factorialize(num) {
    if (num <= 1) { return 1 }
    else {
        let counter = num;
        let number = num;
        while (counter > 1) {
            number = number * (counter - 1);
            counter--;
        }
        return number;
    }

}

factorialize(5);

findLongestWordLength("The quick brown fox jumped over the lazy dog");

function findLongestWordLength(str) {
    let longestWord = '';
    let wordArray = str.split(' ');

    for (i = 0; i < wordArray.length; i++) {
        // console.log(wordArray[i].length);
        if (wordArray[i].length > longestWord.length) {
            longestWord = wordArray[i];
        }
    }
    return longestWord.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

