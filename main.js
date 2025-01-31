/*== Understanding the sort() method ==*/

/*=== alpha sort order ===*/
const alphaArray = ["zebra", "arial", "medium"];
const alphaArray2 = ["zebra", "arial", "medium", 3, 1, 1000];

const alphaSort = (array) => {
    if (!array.length) return;
    return array.sort();
}

console.log(alphaSort(alphaArray));
console.log(alphaSort(alphaArray2));

/*=== Solution 1: Sort numbers accurately ===*/

const arrayOfNumbers = [1, 100000, 21, 30, 4];

const numberSortAsc = (array) => {
    if (!array.length) return;
    return array.sort((a, b) => a - b);
}

console.log(numberSortAsc(arrayOfNumbers));

/*=== Solution 2: Sort numbers in descending order ===*/
const numberSortDesc = (array) => {
    if (!array.length) return;
    return array.sort((a, b) => a - b).reverse();
}

console.log(numberSortDesc(arrayOfNumbers));

/*== Solution 3: Sort an array of numbers AND strings ==*/

const arrayNumAndString = [1, 100000, 21, 30, 4, "zebra", "abc", "medium"];

const sortNumbersAndStrings = (array) => {
    if (!array.length) return;
    const numArray = [];
    const strArray = [];
    array.forEach(el => {
        isNaN(el) ? strArray.push(el) : numArray.push(el);
    });
    strArray.sort();
    numArray.sort((a, b) => a - b);
    return [...numArray, ...strArray];
}

// console.log(sortNumbersAndStrings(arrayNumAndString));