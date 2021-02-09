'use strict';
const assert = require('assert').strict;
const binarySearch = require('../binarySearch');

module.exports = function binarySearchTests() {
    console.log('Binary Search tests');

    const emptyArrayIndex = binarySearch([], 5);
    assert.strictEqual(emptyArrayIndex, -1, "For empty array index should be -1");

    const notFoundIndex = binarySearch([1,3,6,8], 5);
    assert.strictEqual(notFoundIndex, -1, "For 'non-found' case index should be -1");

    let index = binarySearch([1,2,100,400,501], 2);
    assert.strictEqual(index, 1, "Index should be 1 - element '2' is in array");

    index = binarySearch([1,2,3,4,5], 5);
    assert.strictEqual(index, 4, "Index should be 4");
};