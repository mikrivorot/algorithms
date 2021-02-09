'use strict';
const assert = require('assert').strict;
const quickSort = require('../quickSort');

module.exports = function quickSortTests() {
    console.log('Binary Search tests');

    const emptyArray = quickSort([]);
    assert.deepStrictEqual(emptyArray, []);

    const notArray = quickSort(5);
    assert.deepStrictEqual(notArray, 5, "Not array should be 5");

    let sortedArray = quickSort([200,2,100,400,1]);
    assert.deepStrictEqual(sortedArray, [1,2,100,200,400]);

    sortedArray = quickSort([-1,-2,0,4,-5, 0, 1,0]);
    assert.deepStrictEqual(sortedArray, [-5,-2,-1,0,0,0,1,4]);
};