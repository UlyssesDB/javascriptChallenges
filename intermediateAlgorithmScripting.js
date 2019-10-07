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

  