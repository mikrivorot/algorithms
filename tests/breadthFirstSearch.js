'use strict';
const assert = require('assert').strict;
const breadthFirstSearch = require("../breadthFirstSearch");

// page 110
module.exports = function breadthFirstSearchTests() {
    console.log('Breadth First Search tests');

    // Directed graph
    const friendGraph = {};
    friendGraph["root"] = "me";
    friendGraph["me"] = ["Alice", "Mary", "Ivan"]; // first level

    // second level
    friendGraph["Alice"] = ["Mary", "Garry", "me"];
    friendGraph["Mary"] = ["Alice", "me"];
    friendGraph["Ivan"] = ["me"];

    // third level
    friendGraph["Garry"] = ["Alice", "Anton"];

    // forth level
    friendGraph["Anton"] = ["Garry"];

    // function to find required node
    function isNodeEnd(node) {
        return node === "Anton"
    }

    const requiredNodeInEmptyGraph = breadthFirstSearch({}, isNodeEnd);
    assert.strictEqual(requiredNodeInEmptyGraph, null);

    let requiredNode = breadthFirstSearch(friendGraph, isNodeEnd);
    assert.strictEqual(requiredNode, "Anton");

    requiredNode = breadthFirstSearch({"me": ["Alica"], "Alice": []}, isNodeEnd);
    assert.strictEqual(requiredNode, null);

    requiredNode = breadthFirstSearch({"Alice": []}, isNodeEnd);
    assert.strictEqual(requiredNode, null);
};