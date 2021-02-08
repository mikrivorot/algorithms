'use strict';

module.exports = function binarySearch(orderedList, item) {
    if (!orderedList.length) {
        return -1;
    }
    let lowIndex = 0;
    let highIndex = orderedList.length - 1;

    while (lowIndex < highIndex) {
        let middleIndex = Math.round((lowIndex + highIndex) / 2);
        let selectedItem = orderedList[middleIndex];
        if (selectedItem === item) {
            return middleIndex; // binary search finished, return index
        }

        if (item > selectedItem) { //required item is bigger then the middle value in the list
            lowIndex = middleIndex + 1;
        }

        if (item < selectedItem) { //required item is less then the middle value in the list
            highIndex = middleIndex - 1;
        }
    }
    return -1;
}