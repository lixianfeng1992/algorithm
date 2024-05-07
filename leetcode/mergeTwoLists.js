var mergeTwoLists = function(list1, list2) {
  let guard = new ListNode(0), head1 = list1, head2 = list2;
  let head = guard;
  while (head1 !== null && head2 !== null) {
    if (head1.val <= head2.val) {
      head.next = head1;
      head1 = head1.next;
    } else {
      head.next = head2;
      head2 = head2.next;
    }
    head = head.next;
  }
  if (head1 !== null) {
    head.next = head1;
  }
  if (head2 !== null) {
    head.next = head2;
  }
  return guard.next;
}
