'use strict';

// Preorder: Root >> Left >> Right
// Inorder: Left >> Root >> Right
// Postorder: Left >> Right >> Root 

const BinaryTree = require("./challenge01")
const Node = require("./node")
let tree = null;
let emptyTree = null;

beforeAll(()=> { 

    let first = new Node(1);
    let second = new Node(2);
    let third = new Node(3);
    let fourth = new Node(4);
    let fifth = new Node(5);
    let sixth = new Node(6);

    first.left = second;
    first.right = third;
    second.right = sixth;
    second.left = fifth;
    third.left = fourth;
  
    tree = new BinaryTree(first);
    emptyTree = new BinaryTree()
});

describe('Binary Tree Test', () => {
    it ('Root Test', () => {
        expect(tree.root.value).toEqual(1)
    })

    it ('Preorder Method Test', () => {
        let expectedOutput = [1, 2, 5, 6, 3, 4]
        let realOutput = tree.preOrder();
        expect(realOutput).toEqual(expectedOutput)
    })

    it ('In-order Method Test', () => {
        let expectedOutput = [5, 2, 6, 1, 4, 3]
        let realOutput = tree.inOrder();
        expect(realOutput).toEqual(expectedOutput)
    })

    it ('Postorder Method Test', () => {
        let expectedOutput = [5, 2, 6, 1, 4 ,3]
        let realOutput = tree.inOrder();
        expect(realOutput).toEqual(expectedOutput)
    })


})