class Node {
  constructor(value) {
    this.head = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;

    this.length = 1;
  }

  push(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;
  }

  pop() {
    let prev = this.head;
    let temp = this.head;

    if (!this.head) {
      return null;
    }

    while (temp.next) {
      prev = temp;
      temp = prev.next;
    }

    this.tail = prev;
    this.tail.next = null;
    this.length--;

    return temp;
  }

  unshift(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;

    this.length++;
  }
  shift() {
    this.head = this.head.next;
    this.length--;
  }
  insert(index, value) {
    let newNode = new Node(value);
    let current = this.head;
    let previous = this.head;
    let count = 0;

    while (count < index) {
      previous = current;
      current = previous.next;
      count++;
    }

    previous.next = newNode;
    newNode.next = current;
  }

  reverse() {
    let current = this.head;
    let prev = null;
    let next = null;

    this.tail = this.head;
    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  getlast() {
    console.log(this.tail);
  }
  get(index) {
    let current = this.head;
    let prev = this.head;
    let count = 0;
    while (count < index) {
      prev = current;
      current = prev.next;
      count++;
    }
    console.log(current);
  }
  size() {
    console.log(this.length);
  }
  clear() {
    this.head = null;
    this.length = 0;
    console.log(this.head);
  }
}

const myLinkedList = new LinkedList(5);

myLinkedList.push(10);
myLinkedList.push(15);
myLinkedList.push(20);
myLinkedList.clear();
// console.log(myLinkedList);
