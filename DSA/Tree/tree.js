class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    let temp = this.root;

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    while (true) {
      if (newNode.value < temp.value) {
        if (temp.left == null) {
          temp.left = newNode;
          return this;
        } else {
          temp = temp.left;
        }
      } else {
        if (newNode.value > temp.value) {
          if (temp.right === null) {
            temp.right = newNode;
            return this;
          } else {
            temp = temp.right;
          }
        }
      }
    }
  }
  includes(value) {
    let temp = this.root;

    if (!this.root) {
      return undefined;
    }

    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else if (value === temp.value) {
        return true;
      }
    }
    return false;
  }

  bfs() {
    let current = this.root;
    let queue = [];
    let result = [];

    if (!this.root) {
      return [];
    }
    queue.push(current);

    while (queue.length) {
      current = queue.shift();
      result.push(current.value);

      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    return result;
  }

  dfsPreOrder() {
    let current = this.root;
    let stack = [];
    let result = [];

    if (!this.root) {
      return [];
    }
    stack.push(current);
    while (stack.length) {
      current = stack.pop();
      result.push(current.value);

      if (current.right) {
        stack.push(current.right);
      }
      if (current.left) {
        stack.push(current.left);
      }
    }
    return result;
  }
  dfsPostOrder() {
    let current = this.root;
    let stack1 = [];
    let stack2 = [];
    let result = [];

    if (!this.root) {
      return [];
    }
    stack1.push(current);

    while (stack1.length) {
      current = stack1.pop();
      stack2.push(current);

      if (current.left) {
        stack1.push(current.left);
      }
      if (current.right) {
        stack1.push(current.right);
      }
    }

    while (stack2.length) {
      current = stack2.pop();
      result.push(current.value);
    }
    return result;
  }

  dfsInOrder() {
    let current = this.root;
    let stack = [];
    let result = [];
    while (current !== null || stack.length) {
      while (current !== null) {
        stack.push(current);
        current = current.left;
      }
      current = stack.pop();

      result.push(current.value);

      current = current.right;
    }
    return result;
  }
}
let tree = new Tree();
tree.insert(5);
tree.insert(3);
tree.insert(8);
tree.insert(1);
tree.insert(7);
tree.insert(9);
console.log("bfs" + "  " + tree.bfs());
console.log("dfsPreorder" + " " + tree.dfsPreOrder());
console.log("dfspostorder" + " " + tree.dfsPostOrder());
console.log("dfsinorder" + " " + tree.dfsInOrder());
