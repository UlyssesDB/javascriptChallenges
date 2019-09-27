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

function titleCase(inputString) {
    var arr = inputString.split(" ");
    var arr2 = [];
    for (var i = 0; i < arr.length; i++) {
        arr2.push(arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1, arr[i].length).toLowerCase());
    }
    return arr2.join(" ");
}

titleCase("I'm a little tea pot");

function frankenSplice(arr1, arr2, n) {
    let index = n;
    let arr3 = [];
    arr2.map(x => arr3.push(x))
    for (let i = 0; i < arr1.length; i++) {
        arr3.splice(index, 0, arr1[i]);
        index++;
    }
    return arr3;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

function bouncer(arr) {
    let newArr = [];
    arr.map(
        (x) => {
            x ? newArr.push(x) : null
        }
    )
    return newArr;
}

bouncer([7, "ate", "", false, 9]);

function getIndexToIns(arr, num) {
    return arr.concat(num).sort((a, b) => a - b).indexOf(num);
}

getIndexToIns([40, 60], 50);

function mutation(x){ // not happy with this one, don't fully understand the logic
    let a = x[1].toLowerCase();
    let b = x[0].toLowerCase();
    for (let i = 0; i < a.length; i++) {
      if (b.indexOf(a[i]) < 0)
        return false;
    }
    return true;
  }
  
  mutation(["hello", "hey"]);