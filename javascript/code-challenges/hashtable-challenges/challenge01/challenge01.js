// 1. define two variables to hold the indexes of the array
// 2. define a while loop to iterate through the array
// 3. define another while loop to iterate through the array
// 4. define a condition to check if the summation of the two elements is equal to the given integer
// 5. return true if the condition is true
// 6. return false if the condition is false


//Example:

// let tree1 = [7,2,9,1,5,null,14];
// let integer = 3
// treeChecker (tree1, integer)
// should return true

function treeChecker (tree, integer) {
    let indexOne = 0;
    let indexTwo = 1;
    while (indexOne < tree.length) {
        while (indexTwo < tree.length) {
            if (tree[indexOne] + tree[indexTwo] === integer) {
                return true;
            }
            indexTwo++;
        }
        indexOne++;
        indexTwo = indexOne + 1;
    } return false;

}

// treeChecker (tree1, integer)

module.exports = treeChecker;

