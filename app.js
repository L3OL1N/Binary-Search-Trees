const Tree = require("./BST");

const unSortData = [2,4,5,6,7];
const tree = new Tree;

function sort(arr){
    const uniData = [...new Set(arr)];
    function mergeSort(arr){
        if(arr.length < 2) return arr;
        let left = mergeSort(arr.slice(0,arr.length/2));
        let right = mergeSort(arr.slice(arr.length/2));
        return merge(left,right);
    }
    function merge(left,right){
        const newArr = [];
        while(left.length > 0 && right.length > 0){
            const min = left[0] < right[0]?left:right;
            const el = min.shift();
            newArr.push(el);
        }
        return newArr.concat(left,right);
    }
    return mergeSort(uniData);
}
const sortData = sort(unSortData);
tree.buildTree(unSortData);
tree.add(8);

const levelArr = tree.levelOrderArray();
// console.log(tree.isBalanced());
// console.log(tree.levelOrderArray());
// tree.rebalance();

// const level = tree.levelOrderTree();
// console.log(tree.isBalanced());
// console.log(tree.levelOrderArray());
// console.log(level[0]);
// console.log(level[1]);
// console.log(level[2]);
// console.log(level[3]);



