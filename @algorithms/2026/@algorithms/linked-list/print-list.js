//
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(10);
const b = new Node(20);
const c = new Node(30);
const d = new Node(40);

a.next = b;
b.next = c;
c.next = d;

function printLinkedList(head) {
  let current = head;
  let result = [];
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}

// recursive method
function rPrintLinkedList(head) {
  const result = [];
  filterValues(head, result);
  return result;
}

function filterValues(head, result) {
  if (head === null) return;
  result.push(head.val);
  filterValues(head.next, result);
}

const result = printLinkedList(a)
console.log(result)
