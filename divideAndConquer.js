// Exercises from page 59
// list elements sum
function sumListNumbers(list) {
    if (!list || !list.length) { // base case 2
        return 0;
    }
    if (list.length === 1) { // base case 1
        return list[0];
    }

    return list.pop() + sumListNumbers(list);
}

// count the number of items in the list (list.length)
function countListNumbers(list) {
    if (!list || !list.length) { // base case 2
        return 0;
    }
    list.pop(); // remove one element
    return 1 + countListNumbers(list);
}

function findMax(list) {
    if (!list || !list.length) {
        return NaN; // base case 2
    }
    if (list.length === 1) {
        return list[0]; // base case 1
    }
     if (list.length === 2) {
         return list[0] > list[1] ? list[0] : list[1]; // base case 3: compare two elements
     }
     const oneElement = list.pop();
     const maxFromRest = findMax(list);
     return oneElement > maxFromRest ? oneElement : maxFromRest;
}

function binarySearch(orderedList, item, highIndex, lowIndex = 0) {
    if (!orderedList.length　|| lowIndex >= highIndex) {
        return -1; // base case 1, 3
    }

    if (highIndex === undefined) {
        highIndex = orderedList.length - 1;
    }

    let middleIndex = Math.round((lowIndex + highIndex) / 2);
    let selectedItem = orderedList[middleIndex];
    if (selectedItem === item) {
        return middleIndex; // base case 2
    }
    if (item > selectedItem) {
        return binarySearch(orderedList, item, highIndex, middleIndex + 1)
    }

    if (item < selectedItem) {
        return binarySearch(orderedList, item, middleIndex - 1, lowIndex)
    }
}

module.exports = {
    sumListNumbers,
    countListNumbers,
    findMax,
    binarySearch
}