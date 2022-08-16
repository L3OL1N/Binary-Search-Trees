class Tree{
    constructor(){
       this.root = null;
    }
    buildTree(arr){
        const sortData = sort(arr);
        const add = function(node){
            const midNode = new Node()
        }
    }
    add(data){
        const node = this.root;
        if(node == null){
            this.root = new Node(data);
            return;
        }
        else{
            const searchTree = function(node){
                if(data < node.data){
                    if(node.left == null){
                        node.left = new Node(data);
                        return;
                    }
                    return searchTree(node.left);
                }
                else if(data > node.data){
                    if(node.right == null){
                        node.right = new Node(data);
                        return;
                    }
                    return searchTree(node.right);
                }
                return null;
            }
            return searchTree(node);
        }
    }
}

class Node{
    constructor(data,left=null,right=null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

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
module.exports = Tree;