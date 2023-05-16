'use strict';
// . Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array

const test_array_data = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  8,
  9,
  40,
  70,
  'Kisheey',
  'John',
  'Martha',
];
const last_element_of_array = function (n) {
  return n.splice(-1).join();
};
const last_el = last_element_of_array(test_array_data);
console.log(last_el);
