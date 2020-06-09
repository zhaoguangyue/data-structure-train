class NodeTree {
    constructor(node){
        this.node = node;
        this.parent = null;
        this.left = null;
        this.right = null;
    }
    setNodeData(data){
        this.node = data;
    }
}
class Tree {
    constructor(){
        this.tree = new NodeTree()
        this.root = null;
    }
    insert(p_node, c_node){
        if(!p_node && !this.root){
            this.root = c_node;
            this.tree
        }

        p_node.push(c_node)
    }
    
}

var tree = new Tree();
console.log(tree)
// tree.insert(tree.root)



// 前缀树
// 创建前缀树