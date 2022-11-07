// test using jest
// testing if the function checkTree works correctly
// test if the function returns true if the tree is balanced
// test if the function returns false if the tree is not balanced

const treeChecker = require('./challenge01.js');

describe('treeChecker', () => {
    it('should return true if the tree has two elements that their summation is the given integer', () => {
        let tree1 = [7,2,9,1,5,null,14];
        let integer = 3;
        expect(treeChecker(tree1, integer)).toEqual(true);
    });
    it('should return true if the tree has two elements that their summation is the given integer', () => {
        let tree2 = [7,2,9,2,5,null,14];
        let integer = 3;
        expect(treeChecker(tree2, integer)).toEqual(false);
    });
}   
);