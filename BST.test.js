const Tree = require("./BST");

describe("#add node",()=>{
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
})