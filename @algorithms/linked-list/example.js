class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const node = new Node(value);
    this.head = node;
    this.tail = node;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  pop() {
    let temp = this.head;
    let prev = this.head;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
      return;
    }
    while (temp.next) {
      temp = prev.next;
      prev = temp;
    }
  }

  size() {
    let count = 0;
    let temp = this.head;
    while (temp) {
      count++;
      temp = temp.next;
    }
    return count;
  }

  getLast() {
    return this.tail;
  }

  getFirst() {
    return this.head;
  }

  set(index, value) {
    let count = 1;
    let temp = this.head;
    while (temp) {
      if (count === index) {
        temp.data = value;
      }
      count++;
      temp = temp.next;
    }
    return this;
  }

  get(index) {
    let count = 1;
    let temp = this.head;
    while (temp) {
      if (count === index) {
        return temp;
      }
      count++;
      temp = temp.next;
    }
    return null;
  }

  list() {
    const arr = [];
    let current = this.head;
    while (current.next) {
      arr.push(current.data);
      current = current.next;
    }
  }
}

const result = new LinkedList(10);
result.append(20);
result.append(30);
result.append(50);
console.log(result);
console.log(result.size());
console.log(result.getLast());
console.log(result.get(2));
console.log(result.set(1, 200));

// Linked list metho
// push(value)
// unshift(value)
// pop()
// shift()
// getFirst()
// getLast()
// get(index)
// set(index, value)

/**
Double Linked List
- push
- shift
- pop
- unshift

**/
