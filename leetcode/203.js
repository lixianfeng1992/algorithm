function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var reverseList = function(head) {
  recursive(head, null)
};

var recursive = function(cur, pre) {
  if (cur === null) {
    return pre;
  }
  const res = recursive(cur.next, cur)
  cur.next = pre;
  return res
}

const item1 = new ListNode(7);
const item2 = new ListNode(7);
const item3 = new ListNode(7);
const item4 = new ListNode(7);
item1.next = item2;
item2.next = item3;
item3.next = item4;

const ans = removeElements(item1, 7)
console.log(ans)
