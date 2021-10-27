function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    return arr;
}

/**
 * Applies in-place Fisher-Yates Shuffle (a.k.a. Knuth Shuffle). 
 * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
 * 
 * @param {Array[*]} arr array of elements to be shuffled 
 * @returns the same array that was passed in.
 */
function shuffle(arr) {
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