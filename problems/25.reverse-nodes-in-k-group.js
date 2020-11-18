/*
 * @lc app=leetcode id=25 lang=javascript
 *
 * [25] Reverse Nodes in k-Group
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// var reverseKGroup = function(head, k) {
//     let pre = null, cur = head;
//     let p = head;
//     // 下面的循环用来检查后面的元素是否能组成一组
//     for(let i = 0; i < k; i++) {
//         if(p == null) return head;
//         p = p.next;
//     }


//     for(let i = 0; i < k; i++){
//         let next = cur.next;
//         cur.next = pre;
//         pre = cur;
//         cur = next;
//     }
    
//     console.log(cur)
//     console.log('p' , p)
//     console.log('head' , head)
//     console.log('pre' , pre)
//     // pre为本组最后一个节点，cur为下一组的起点
//     head.next = reverseKGroup(cur, k);

//     console.log('head2' , head)
//     console.log('pre2' , pre)
//     return pre;
// };

var reverseKGroup = function(head, k) {
    let count = 0;
    // 看是否能构成一组，同时统计链表元素个数
    for(let p = head; p != null; p = p.next) {
        if(p == null && i < k) return head;
        count++;
    }
    let loopCount = Math.floor(count / k);
    let p = dummyHead = new ListNode();
    dummyHead.next = head;
    // 分成了 loopCount 组，对每一个组进行反转
    for(let i = 0; i < loopCount; i++) {
        let pre = null, cur = p.next;
        for(let j = 0; j < k; j++) {
            let next = cur.next;
            cur.next = pre;
            pre = cur;
            cur = next;
        }
        // 当前 pre 为该组的尾结点，cur 为下一组首节点
        let start = p.next;// start 是该组首节点
        // 开始穿针引线！思路和2个一组的情况一模一样
        p.next = pre;
        start.next = cur;
        p = start;
    }
    return dummyHead.next;
};
// @lc code=end

