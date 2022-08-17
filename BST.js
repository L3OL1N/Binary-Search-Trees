class Tree{
    constructor(){
       this.root = null;
    }
    //build
    buildTree(arr){
        const sortData = sort(arr);
        const sortArrayToTree = function(arr,start = 0,end = arr.length-1){
            if(start > end) return null;
            const mid = parseInt((start+end)/2);
            let node = new Node(arr[mid]);
            node.left = sortArrayToTree(arr,start,mid-1);
            node.right = sortArrayToTree(arr,mid+1,end);
            return node;
        }
        this.root = sortArrayToTree(sortData);
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
    //search
    min(){
        if(this.root == null) return null;
        let current = this.root;
        while(current.left){
            current = current.left;
        }
        return current;
    }
    max(){
        if(this.root == null) return null;
        let current = this.root;
        while(current.right){
            current = current.right;
        }
        return current;
    }
    find(data,node = this.root){
        if(node == null) return null;
        if(node.data == data) return node;
        if(data < node.data){
            return this.find(data,node.left);
        }
        else if(data > node.data){
            return this.find(data,node.right);
        }
        return null;
    }
    levelOrderArray(){
        const levels = [];
        if(this.root == null) return levels;
        const queue = [this.root];
        while(queue.length){
            const level = [];
            for(let i = 0; i <= queue.length;i++){
                const node = queue.shift();
                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
                levels.push(node.data);
            }
        }
        return levels;
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