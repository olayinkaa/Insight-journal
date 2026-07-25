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

function getSum(head) {
  let current = head;
  let sum = 0;
  while (current !== null) {
    sum += current.val;
    current = current.next;
  }
  return sum;
}
// recursive method
function rgetSum(head) {
    if(head === null) return 0;
    return head.val + rgetSum(head.next)
}

// const result = getSum(a);
const result = rgetSum(a);
console.log(result);
