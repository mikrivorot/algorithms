'use strict';
const assert = require('assert').strict;
const {sumListNumbers, countListNumbers, findMax, binarySearch} = require('../divideAndConquer');

function sumTests() {
    console.log('Divide And Conquer "sumListNumbers" tests');

    const emptyArraySum = sumListNumbers([]);
    assert.strictEqual(emptyArraySum, 0, "Sum for empty array should be 0");

    const oneElementArraySum = sumListNumbers([1]);
    assert.strictEqual(oneElementArraySum, 1, "Sum for one-element-array should be 1");

    let sum = sumListNumbers([1, 100, 11, 14, 15, 15]);
    assert.strictEqual(sum, 156, "Sum should be equal 156");

    sum = sumListNumbers([1, -1, 0, 1, -1, 0, -1, 1]);
    assert.strictEqual(sum, 0, "Sum should be equal 0");
}

function findMaxTests() {
    console.log('Divide And Conquer "findMax" tests');
    const emptyArrayMax = findMax([]);
    assert.strictEqual(emptyArrayMax, NaN, "Max element for empty array should be NaN");

    const oneElementArrayMax = findMax([1]);
    assert.strictEqual(oneElementArrayMax, 1, "Max element for one-element-array should be 1");

    let max = findMax([1, 100, 11, 14, 15, 15]);
    assert.strictEqual(max, 100, "Max should be equal 100");

    max = findMax([-1, -9, -11, -14, -15, -15]);
    assert.strictEqual(max, -1, "Max should be equal -1");
}

function countTests() {
    console.log('Divide And Conquer "countListNumbers" tests');
    const emptyArrayCount = countListNumbers([]);
    assert.strictEqual(emptyArrayCount, 0, "Elements count for empty array should be 0");

    const oneElementArrayCount = countListNumbers([1]);
    assert.strictEqual(oneElementArrayCount, 1, "Elements count for one-element-array should be 1");

    let count = countListNumbers([1, 100, 11, 14, 15, 15]);
    assert.strictEqual(count, 6, "Count should be equal 6");

    count = countListNumbers(new Array(1000));
    assert.strictEqual(count, 1000, "Count should be equal 1000");
}

function binarySearchTests() {
    console.log('Divide And Conquer "binarySearch" tests');

    const emptyArrayIndex = binarySearch([], 5);
    assert.strictEqual(emptyArrayIndex, -1, "For empty array index should be -1");

    const notFoundIndex = binarySearch([1,3,6,8], 5);
    assert.strictEqual(notFoundIndex, -1, "For 'non-found' case index should be -1");

    let index = binarySearch([1,2,100,400,501], 2);
    assert.strictEqual(index, 1, "Index should be 1 - element '2' is in array");

    index = binarySearch([1,2,3,4,5], 5);
    assert.strictEqual(index, 4, `Index should be 4, but received ${index}`);
}

module.exports = function divideAndConquerTests() {
    sumTests();
    countTests();
    findMaxTests();
    binarySearchTests();
}
