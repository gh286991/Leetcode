const createTree = (value)=>{
  /**
 * 二元樹節點
 */
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}/**
 * 二元樹根
 */
function BinarySearchTree() {
this.root = null;
}

BinarySearchTree.prototype.getRoot = function() {
  return this.root;
};


/**
 * 加入節點
 */
BinarySearchTree.prototype.push = function(value) {
  // 二元樹根
  let root = this.root;// 如果沒有二元樹根就增加一個節點，並且直接結束
  if (!root) {
    this.root = new Node(value);
    return;
  }// 目前的二元樹根
  let currentNode = root;
  // 增加一個新節點
  const newNode = new Node(value);// 遍歷整個二元樹
  while (currentNode) {
    // 值小於當前節點值就擺左邊
    if (value < currentNode.value) {
      // 當前節點如果左邊是空的，就擺進左邊，不是則記錄起來以「當前節點」繼續往下遍歷
      if (!currentNode.left) {
        currentNode.left = newNode;
        break;
      } else {
        currentNode = currentNode.left;
      }
    } else {
      // 當前節點如果左邊是空的，就擺進左邊，不是則記錄起來以「當前節點」繼續往下遍歷
      if (!currentNode.right) {
        currentNode.right = newNode;
        break;
      } else {
        currentNode = currentNode.right;
      }
    }
  }
};
}


  const input = [10,5,15,3,7,null,18]

  let tree = new BinarySearchTree();
  input.forEach(v=>tree.push(v))

  console.log(tree)


  /**
 * 先序遍歷（根在開始）
 * 從根開始，然後往左跑，遇到節點有值就顯示，沒值就往右
 */
function preOrderTraverse(node) {
    if (!node) return;
    // 當前節點
    let currentNode = node;
    // 直接顯示節點值
    console.log(currentNode.value);
    // 先跑左邊
    preOrderTraverse(currentNode.left);
    // 跑完跑右邊
    preOrderTraverse(currentNode.right);
  }

  console.log(preOrderTraverse(tree.getRoot()))

const test = ()=>{
  console.log('test')
}

export function test()