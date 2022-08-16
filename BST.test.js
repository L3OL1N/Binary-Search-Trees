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