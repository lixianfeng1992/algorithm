var removeNthFromEnd = function(head, n) {
  const pre = new ListNode(0, head);
  let start = pre, end = pre;
  while (n !== 0) {
    start = start.next;
    n--;
  }
  while (start.next !== null) {
    start = start.next;
    end = end.next;
  }

  end.next = end.next.next;
  return pre.next;
};

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

const item1 = new ListNode(1);
const item2 = new ListNode(2);
const item3 = new ListNode(3);
const item4 = new ListNode(4);
const item5 = new ListNode(5);
// item1.next = item2;
// item2.next = item3;
// item3.next = item4;
// item4.next = item5;

const a = removeNthFromEnd(item1, 1)
console.log(a)
