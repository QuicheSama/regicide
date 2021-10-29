const { isArray, isNumber } = require('./types');

/**
 * Check if a provided number is within the specified range.
 * 
 * @param {number} n value to be verified
 * @param {*} inclusiveMin minimum value a valid value may have (inclusive)
 * @param {*} exclusiveMax maximum value a valid value may have (exclusive)
 * @returns true if the value is within range.
 */
function withinRange(n, inclusiveMin, exclusiveMax) {
    return inclusiveMin <= n && n < exclusiveMax;
}

/**
 * Check if provided index is a valid index given a specific array.
 * 
 * @param {*} index index to be checked
 * @param {*} arr array in which index should reside.
 * @returns true if index is within array bounds.
 */
function validIndex(index, arr) {
    return withinRange(index, 0, arr.length);
}

/**
 * Performs an in-place swap of two elements in the array.
 * 
 * REMARK (@kbehari): Let's over-engineer the fuck outta this sumbitch.
 * 
 * @param {Array<*>[]} arr array in which elements will be swapped 
 * @param {*} i index of first element to be swapped
 * @param {*} j index of second element to be swapped
 * @returns the same array that was passed in
 */
function swap(arr, i, j) {
    if(!isArray(arr)) {
        throw Error (`swap function must be provided an array. Function was provided a(n) ${typeof arr}.`);
    }
    if(!isNumber(i) || !isNumber(j)) {
        throw Error(`swap function must be provided two numbers as indices. Indicies provided were i=${i}, j=${j}.`)
    }

    if(!validIndex(i, arr) || !validIndex(j, arr)){
        throw Error(`sawp function provided out of range indices. Provided i=${i}, j=${j} when exepected range is [0, ${arr.length}).`);
    }

    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    return arr;
}

/**
 * Performs in-place Fisher-Yates Shuffle (a.k.a. Knuth Shuffle). 
 * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
 * 
 * @param {Array[*]} arr array of elements to be shuffled 
 * @returns the same array that was passed in.
 */
function shuffle(arr) {
    if(!isArray(arr)) throw Error(`shuffle function must be provided an array. Function was provided a(n) ${typeof arr}`)

    const n = arr.length;
    for(let i = n - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        swap(arr, i, j);
    }

    return arr;
}

module.exports = {
    swap,
    shuffle
}