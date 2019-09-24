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

function largestOfFour(arr) {
    let largestArray = [];
    for (let i = 0; i < arr.length; i++) {
        let largestNumber = arr[i][0];
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > largestNumber) {
                largestNumber = arr[i][j];
            }
        }
        largestArray.push(largestNumber)
    }
    return largestArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

function confirmEnding(str, target) {
    let strEnd = str.slice((str.length - target.length), str.length);
    return strEnd === target;
}

confirmEnding("Bastian", "n");

function repeatStringNumTimes(str, num) {
    if (num <= 0) { return '' };
    let counter = num;
    let strArray = str.split(' ');
    while (counter > 1) {
        strArray.push(str);
        counter--;
    }
    return strArray.join('');
}

repeatStringNumTimes("abc", 3);

function truncateString(str, num) {
    if (num >= str.length) {
        return str;
    } else {
        return str.slice(0, num).concat('...');
    }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

function findElement(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return arr[i]
        }
    }
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

function findElement(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) { return arr[i] }
    }
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

function booWho(bool) {
    if (typeof bool === 'boolean') { return true }
    else { return false }
}

booWho(null);

