export class ListNode<T> {
  public val: T;
  public next: ListNode<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

function detectCycle(head: ListNode<number> | null): boolean {
  if (!head) return false; // if list is empty return no cycle found

  let f: ListNode<number> | null = head; // fast pointer
  let s: ListNode<number> | null = head; // slow pointer

  while (s && f && f.next) {
    s = s.next;
    f = f.next.next;
    if (s === f) return true;
  }

  return false;
}

export default detectCycle;
