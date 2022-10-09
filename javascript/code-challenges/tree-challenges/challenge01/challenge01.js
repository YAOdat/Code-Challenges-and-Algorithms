'use strict'

// Preorder: Root >> Left >> Right
// Inorder: Left >> Root >> Right
// Postorder: Left >> Right >> Root 

const node = require('./node');

class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }


    preOrder() {
        let order = [];

        const traverse = (node) => {
            order.push(node.value)
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
        }
        traverse(this.root);
        return order


    }


    inOrder() {
        let order = [];
        const traverse = (node) => {
            if (node.left) traverse(node.left)
            order.push(node.value)
            if (node.right) traverse(node.right)
        }
        traverse(this.root)
        return order;
    }


    postOrder() {
        let order = [];

        const traverse = (node) => {
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
            order.push(node.value)

        }
        traverse(this.root);
        return order
    }
}

module.exports = BinaryTree;