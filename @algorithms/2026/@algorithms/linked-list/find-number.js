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

function findNumber(head, target){
    let current = head;
    while(current){
        if(current.val === target){
            return true
        }
        current = current.next
    }
    return false
}

function rfindNumber(head, target){
    if(head === null) return false;
    if(head.val === target) return true
    return rfindNumber(head.next, target)
}
// const result = printLinkedList(a)
// const result = getSum(a)
// const result = findNumber(a, 40)
const result = rfindNumber(a, 45)
console.log(result)
