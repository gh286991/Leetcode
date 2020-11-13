import test from './binaryTree';

function Node() {
  this.data = null;
  this.left = null;
  this.right = null;
}

function BinaryTree() {
  this.root = null;
}

BinaryTree.prototype.add = function (node) {
  if (this.root == null) {
    this.root = node;
  } else {
    insertNode(this.root, node);
  }

  function insertNode(node, newNode) {
    if (node.left === null) {
      node.left = newNode;
    } else if (node.right === null) {
      node.right = newNode;
    } else {
      const leftChild = node.left;
      if (leftChild.left === null || leftChild.right === null) {
        insertNode(node.left, newNode);
      } else {
        insertNode(node.right, newNode);
      }
    }
  }
};

const tree = new BinaryTree();

tree.add(new Node('A'));
tree.add(new Node('B'));
tree.add(new Node('C'));
tree.add(new Node('D'));
tree.add(new Node('E'));
tree.add(new Node('F'));


BinaryTree.prototype.inOrderTraverse = function (callback) {
  inOrderTraverseNode(this.root, callback);

  function inOrderTraverseNode(node, callback) {
    if (node !== null) {
      inOrderTraverseNode(node.left, callback);
      callback(node.data);
      inOrderTraverseNode(node.right, callback);
    }
  }
};

tree.inOrderTraverse((item) => {
  console.log(item);
});

test();
