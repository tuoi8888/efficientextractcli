function reorderList(head) {
  if (!head || !head.next) return;
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let prev = null;
  let curr = slow.next;
  slow.next = null;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  let first = head;
  let second = prev;
  while (second.next) {
    const next = first.next;
    first.next = second;
    first = next;
    const next2 = second.next;
    second.next = first;
    second = next2;
  }
}
