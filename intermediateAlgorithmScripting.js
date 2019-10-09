function sumAll(arr) {
    let counter = 0;
    let newArr = arr.sort(function(a, b){return a-b});
    let decreaser = newArr[newArr.length-1];
    let num = newArr[0];
    while (decreaser >= newArr[0]) {
      newArr.splice(newArr[newArr.length-2], 0, num+1)
      num++;
      decreaser--;
    }
    console.log(newArr);
    for (let i = 0; i < arr.length-2; i++) {
      counter += newArr[i]
    }
    return counter;
  }
  
  console.log(sumAll([1, 4]));
  console.log(sumAll([4, 1]));
  console.log(sumAll([5, 10]));
  console.log(sumAll([10, 5]));

  function diffArray(arr1, arr2) {
    return [...new Set(arr1.concat(arr2))].filter(f => !arr1.includes(f) ||  !arr2.includes(f));
  }
  
//   diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
  diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])