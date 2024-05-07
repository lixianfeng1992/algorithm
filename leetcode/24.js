var swapPairs = function(head) {
  if (head === null || head.next === null) {
    return head;
  }
  const next = head.next;
  head.next = swapPairs(next.next);
  next.next = head;
  return next;
};

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

const item1 = new ListNode(1);
const item2 = new ListNode(2);
const item3 = new ListNode(3);
const item4 = new ListNode(4);
item1.next = item2;
item2.next = item3;
item3.next = item4;
