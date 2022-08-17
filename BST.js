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
    }
    height(data){
        const node = this.find(data);
        if(node == null) return null;
        const arr = [];
        function Count(node,height = 0){
            if(!node) arr.push(height);
            if(node){
                Count(node.left,height++);
                Count(node.right,height++);
            }
        }
        Count(node);
        return Math.max(...arr);
    }
    depth(data,node = this.root){
            let depth = 1;
            if(node == null) return null;
            if(node.data == data) return 0;
            if(data < node.data){
                depth +=  this.depth(data,node.left);
            }
            else if(data > node.data){
                depth += this.depth(data,node.right);
            }
            return depth;
        }
    //print
    levelOrderArray(){
        const levels = [];
        if(this.root == null) return levels;
        const queue = [this.root];
        while(queue.length){
            for(let i = 0; i <= queue.length;i++){
                const node = queue.shift();
                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
                levels.push(node.data);
            }
        }
        return levels;
    }
    levelOrderTree(){
        const map = {};
        if(this.root == null) return levels;
        const queue = [{level:0,node:this.root}];
        while(queue.length){
            const curr = queue.pop();
            const node = curr.node;
            if(!map[curr.level]){
                map[curr.level] = [node.data];
            }
            else{
                map[curr.level].push(node.data);
            }
            if(node.right) queue.push({level:curr.level+1,node:node.right});
            if(node.left) queue.push({level:curr.level+1,node:node.left});
        }
        // let result = [];
        // for(let el in map){
        //     result.push(map[el]);
        // }
        return map;
    }
    inOrder(){
        const levels = [];
        if(this.root == null) return levels;
        let node = this.root;
        function Search(node){
            if(node){
                Search(node.left);
                levels.push(node.data);
                Search(node.right);
            }
        }
        Search(node);
        
        return levels;
    }
    preOrder(){
        const levels = [];
        if(this.root == null) return levels;
        let node = this.root;
        function Search(node){
            if(node){
                levels.push(node.data);
                Search(node.left);
                Search(node.right);
            }
        }
        Search(node);
        
        return levels;
    }
    postOrder(){
        const levels = [];
        if(this.root == null) return levels;
        let node = this.root;
        function Search(node){
            if(node){
                Search(node.left);
                Search(node.right);
                levels.push(node.data);
            }
        }
        Search(node);
        
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