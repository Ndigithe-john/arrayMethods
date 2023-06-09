'use strict';
function difference(arr1, arr2) {
  return arr1
    .filter(x => !arr2.includes(x))
    .concat(arr2.filter(x => !arr1.includes(x)))
    .map(String)
    .sort();
}

console.log(difference([1, 2, 3], [100, 2, 1, 10]));
