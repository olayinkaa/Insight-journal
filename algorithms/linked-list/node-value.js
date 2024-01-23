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

function getNodeValue(head, index){
    let current = head;
    let i = 0;
    while(current){
        if(i === index) return current.val
        i++;
        current = current.next
    }
    return -1
}

function rgetNodeValue(head, index){
  if(head === null) return null
  if(index===0) return head.val
  return rgetNodeValue(head.next, index - 1)
}

// const result = getNodeValue(a, 1);
const result = rgetNodeValue(a, 1);
console.log(result);