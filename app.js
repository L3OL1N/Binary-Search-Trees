const Tree = require("./BST");

const unSortData = [1, 2, 3, 4, 5, 6, 7];
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
const level = tree.levelOrderTree();

//console.log(unSortData);
// console.log(sortData);
// console.log(tree.root)
console.log(level);
// console.log(level[0]);
// console.log(level[1]);
// console.log(level[2]);


// const queue = [{level:0,node:4},{level:1,node:2},{level:1,node:6}];
// for(let el in queue){
//     console.log(queue[el]);
// }

