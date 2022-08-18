const Tree = require("./BST");

describe("#add node",()=>{
    test("add same return null",()=>{
        const tree = new Tree;
        tree.add(5);

        expect(tree.add(5)).toBeNull()
    })
    test("add root",()=>{
        const tree = new Tree;
        tree.add(5);

        expect(tree.root.data).toBe(5)
    })
    test("add left",()=>{
        const tree = new Tree;
        tree.add(5);
        tree.add(3);

        expect(tree.root.left.data).toBe(3)
    })
    test("add right",()=>{
        const tree = new Tree;
        tree.add(5);
        tree.add(7);

        expect(tree.root.right.data).toBe(7)
    })
    test("add left right",()=>{
        const tree = new Tree;
        tree.add(5);
        tree.add(3);
        tree.add(4);

        expect(tree.root.left.right.data).toBe(4)
    })
    test("add right left",()=>{
        const tree = new Tree;
        tree.add(5);
        tree.add(7);
        tree.add(6);

        expect(tree.root.right.left.data).toBe(6)
    })
})
describe("#build BST",()=>{
    test("arr length 0",()=>{
        const tree = new Tree;
        tree.buildTree([]);

        expect(tree.root).toBeNull();
    })
    test("arr length 1",()=>{
        const tree = new Tree;
        tree.buildTree([1]);

        expect(tree.root.data).toBe(1);
    })
    test("arr length long",()=>{
        const tree = new Tree;
        const unSortData = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
        tree.buildTree(unSortData);

        expect(tree.root.data).toBe(8);
    })
})
describe("#search node",()=>{
    test("find min",()=>{
        const tree = new Tree;
        const unSortData = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
        tree.buildTree(unSortData);

        expect(tree.min().data).toBe(1)
    })
    test("find min",()=>{
        const tree = new Tree;
        const unSortData = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
        tree.buildTree(unSortData);

        expect(tree.max().data).toBe(6345)
    })
    test("find data",()=>{
        const tree = new Tree;
        const unSortData = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
        tree.buildTree(unSortData);

        expect(tree.find(23).data).toBe(23)
        expect(tree.find(3).data).toBe(3)
        expect(tree.find(324).data).toBe(324)
        expect(tree.find(0)).toBeNull()
    })
    test("node height",()=>{
        const tree = new Tree;
        const unSortData = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
        tree.buildTree(unSortData);

        expect(tree.height(1)).toBe(2)
        expect(tree.height(324)).toBe(2)
    })
    test("node depth",()=>{
        const tree = new Tree;
        const unSortData = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
        tree.buildTree(unSortData);

        expect(tree.depth(8)).toBe(0)
        expect(tree.depth(6345)).toBe(3)
    })
    test("not Balanced",()=>{
        const tree = new Tree;
        const unSortData = [2,4,6];
        tree.buildTree(unSortData);
        tree.add(7);
        tree.add(8);

        expect(tree.isBalanced()).toBe(false);
    })
})
describe("#print tree",()=>{
    test("level order",()=>{
        const tree = new Tree;
        const unSortData = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
        tree.buildTree(unSortData);
        const level = tree.levelOrderArray();

        expect(level[0]).toBe(tree.root.data)
    })
    test("in order",()=>{
        const tree = new Tree;
        const unSortData = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
        tree.buildTree(unSortData);
        const level = tree.inOrder();

        expect(level[0]).toBe(1)
        expect(level[level.length-1]).toBe(6345)
    })
    test("pre order",()=>{
        const tree = new Tree;
        const unSortData = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
        tree.buildTree(unSortData);
        const level = tree.preOrder();

        expect(level[0]).toBe(tree.root.data)
        expect(level[level.length-1]).toBe(6345)
    })
    test("post order",()=>{
        const tree = new Tree;
        const unSortData = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
        tree.buildTree(unSortData);
        const level = tree.postOrder();
        
        expect(level[0]).toBe(3)
        expect(level[level.length-1]).toBe(tree.root.data)
    })
})