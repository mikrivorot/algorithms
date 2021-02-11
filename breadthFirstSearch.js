// Note: there is no way to restore short path to the end node
module.exports = function(graph, fnToCompare) {
    if (!Object.keys(graph).length) {
        console.log("Empty graph");
        return null;
    }

    const searchQueue = [];
    const visitedNodes = [];

    searchQueue.push(graph["root"]); // enqueue

    while (searchQueue.length > 0) {
        const nodeToVisit = searchQueue.shift(); // dequeue
        if (!visitedNodes.find(visitedNode => visitedNode === nodeToVisit) && nodeToVisit) {
            visitedNodes.push(nodeToVisit);
            if (fnToCompare(nodeToVisit)) {
                return nodeToVisit;
            } else {
                searchQueue.push(...graph[nodeToVisit]);
            }
        }
    }

    return null;
}