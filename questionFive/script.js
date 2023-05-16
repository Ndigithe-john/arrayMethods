'use strict';
// Write a JavaScript function to filter false, null, 0 and blank values from an array.

// Test Data :
// console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
// [58, "abcd", true]

const array_test = [58, '', 'abcd', true, null, false, 0];
// solution 1: Using boolean to filter out all falsy values from the array
const array_test_filtered = array_test.filter(Boolean);
console.log(array_test_filtered);

// using && operator to filter out all falsy values from the array
const array_test_filtered2 = array_test.filter(
  ele => ele !== null && ele !== 0 && ele !== false && ele !== ''
);
console.log(array_test_filtered2);
