//Example:

// let tree1 = [7,2,9,1,5,null,14];
// let integer = 3
// treeChecker (tree1, integer)
// should return true

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class Tree {
    constructor() {
        this.root = null;
    }

    add(value) {
        const node = new Node(value);
        if (this.root === null) {
            this.root = node;
        } else {
            let current = this.root;
            while (current) {
                if (value < current.value) {
                    if (!current.left) {
                        current.left = node;
                        break;
                    }
                    current = current.left;
                } else {
                    if (!current.right) {
                        current.right = node;
                        break;
                    }
                    current = current.right;
                }
            }
        }
    }
}

function treeChecker(tree, integer) {
    let hashTable = {};
   
    const nodesCheck = (node) => {
        if (node.left) nodesCheck(node.left);
        if (node.right) nodesCheck(node.right);
        hashTable[node.value] = true;
    }
    nodesCheck(tree.root);
    for (let key in hashTable) {
        if (hashTable[integer - key]) return true;
    }
    return false;

}

// let tree1 = new Tree();
// tree1.add(7);
// tree1.add(2);
// tree1.add(9);
// tree1.add(1);
// tree1.add(5);

// let integer = 3;

// console.log(treeChecker(tree1, integer)); 

// let tree2 = new Tree();
// tree2.add(7);
// tree2.add(2);
// tree2.add(9);
// tree2.add(1);
// tree2.add(5);

// let integer2 = 52;

// console.log(treeChecker(tree2, integer2)); 


module.exports = {
    Node: Node,
    Tree: Tree,
    treeChecker: treeChecker
}