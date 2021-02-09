module.exports = function quicksort(list){
    if (!list || !list.length || list.length < 2) { // base cases
        return list;
    }

    const pivotElementIndex = Math.round((list.length - 1) / 2);
    const pivotElement = list[pivotElementIndex];

    let lessPart = [];
    let greaterPart = [];

    for (let i = 0; i < list.length; i ++) {
        if (i !== pivotElementIndex) {
            if (list[i] < pivotElement) {
                lessPart.push(list[i]);
            } else {
                greaterPart.push(list[i])
            }
        }
    }

    return [].concat(quicksort(lessPart), [pivotElement], quicksort(greaterPart));
}