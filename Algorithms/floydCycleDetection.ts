class ListNode<T> {
  public val: T;
  public next: ListNode<T>;

  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

const head: ListNode<number> = new ListNode(5);
const node1: ListNode<number> = new ListNode(6);
const node2: ListNode<number> = new ListNode(7);
const node3: ListNode<number> = new ListNode(8);
const node4: ListNode<number> = new ListNode(9);

head.next = node1;
node1.next = node2;
node2.next = node3;
node3.next = node2; // cycle from node3 to node2

function detectCycle(head: ListNode<number>): boolean {
  if (!head) return false; // if list is empty return no cycle found

  let f = head; // fast pointer
  let s = head; // slow pointer

  while (s && f && f.next) {
    s = s.next;
    f = f.next.next;
    if (s === f) return true;
  }

  return false;
}

console.log(detectCycle(head)); // true
