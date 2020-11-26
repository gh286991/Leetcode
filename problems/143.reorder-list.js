/*
 * @lc app=leetcode id=143 lang=javascript
 *
 * [143] Reorder List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = head => {
    if (!head || !head.next || !head.next.next) return head;

    const pointer = dummyHead = new ListNode()
    pointer.next = head

    let rightList = findMedium(pointer.next)
    let reverseRightList = reverseLsit(rightList)
    let leftList = pointer.next

    while(reverseRightList.next && leftList){
      let leftBehind = leftList.next
      let rightBehind = reverseRightList.next


      leftList.next = reverseRightList;
      reverseRightList.next = leftBehind;

      leftList = leftBehind
      reverseRightList= rightBehind
    }

    return dummyHead.next
};


const findMedium = (LinkList) =>{
  let slow = LinkList.next
  let fast = LinkList.next.next

  while(fast && fast.next){
    slow = slow.next
    fast = fast.next.next
  }

  return slow
}

const reverseLsit = (LinkList) =>{

    if (!LinkList)
        return null;

    let pre = null, node = LinkList, cur=null;

    while (node) {
        pre = cur
        cur = node
        node = node.next
        cur.next = pre
    }
    return cur;
}
// @lc code=end

