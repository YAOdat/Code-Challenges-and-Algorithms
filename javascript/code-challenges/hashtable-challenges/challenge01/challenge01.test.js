'use strict';

const {Tree, treeChecker } = require('./challenge01.js');

describe('treeChecker', () => {
    it('returns true if there are two values in the tree that add up to the integer', () => {
        let tree1 = new Tree();
        tree1.add(7);
        tree1.add(2);
        tree1.add(9);
        tree1.add(1);
        tree1.add(5);
        expect(treeChecker(tree1, 3)).toBe(true);
    });

    it('returns false if there are no values in the tree that add up to the integer', () => {
        let tree1 = new Tree();
        tree1.add(7);
        tree1.add(2);
        tree1.add(9);
        tree1.add(1);
        tree1.add(5);
        expect(treeChecker(tree1, 100)).toBe(false);
    });
});
