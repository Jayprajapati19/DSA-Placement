// left rotation by 1

// let arr = [1, 2, 3, 4, 5];

// let copy = arr[0];
// for (let i = 0; i < arr.length - 1; i++) {
//   arr[i] = arr[i + 1];
// }
// arr[arr.length - 1] = copy;
// console.log(arr);

// op->[ 2, 3, 4, 5, 1 ]

// +++++++++++++++++++++++++
// Right rotation by 1
let arr = [1, 2, 3, 4, 5];

let copy = arr[arr.length - 1];

// store last element

for (let i = arr.length - 1; i > 0; i--) {
  arr[i] = arr[i - 1];
  // shift elements to the right
}
arr[0] = copy;
// place last element at the start
console.log(arr);

// Output: [5, 1, 2, 3, 4]
