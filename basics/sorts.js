let swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

let bubbleSort = arr => {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        // let temp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = temp;
      }
    }
  }
};

let selectSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    swap(arr, i, min);
  }
};

let insertSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      swap(arr, j, j - 1);
      j--;
    }
  }
};

let quickSort = (arr, s, e) => {
  if (s == null) s = 0;
  if (e == null) e = arr.length - 1;
  if (s >= e) return;

  swap(arr, (s + e) >> 1, e);
  let index = s - 1;
  for (let i = s; i <= e; ++i) {
    if (arr[i] <= arr[e]) {
      swap(arr, i, ++index);
    }
  }
  quickSort(arr, s, index - 1);
  quickSort(arr, index + 1, e);
};

test = [11, 2, 3, 5, 7, 13, 27];
// bubbleSort(test);
// selectSort(test);
// insertSort(test);
quickSort(test);
console.log(test);
