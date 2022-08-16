class Tree{
    constructor(){
       this.root = null;
    }
    buildTree(arr){
        console.log(arr);
    }
}

class Node{
    constructor(data,left=null,right=null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

module.exports = Tree;