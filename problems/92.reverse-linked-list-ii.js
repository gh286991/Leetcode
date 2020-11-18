/*
 * @lc app=leetcode id=92 lang=javascript
 *
 * [92] Reverse Linked List II
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
// const reverseBetween = function (head, m, n) {
//   const count = n - m;
//   let p = dummyHead = new ListNode();
//   let pre; let cur; let front; let
//     tail;
//   p.next = head;

//   for (let i = 0; i < m - 1; i++) {
//     p = p.next;
//   }
//   // 保存前节点
//   front = p;
//   console.log('front', front);
//   // 同时保存区间首节点
//   pre = tail = p.next;
//   cur = pre.next;

//   // 区间反转
//   for (let i = 0; i < count; i++) {
//     const { next } = cur;
//     console.log('--------------');
//     console.log('curr', cur);
//     console.log('pre', pre);
//     cur.next = pre;
//     console.log('currxxx', cur);
//     pre = cur;
//     cur = next;
//     console.log('curr', cur);
//     console.log('pre', pre);
//   }
//   // 前节点的 next 指向区间末尾
//   // front.next = null;
//   // console.log('front' , front)
//   front.next = pre;

//   // 区间首节点的 next 指向后节点(循环完后的cur就是区间后面第一个节点，即后节点)
//   // tail.next  = null
//   // console.log('pre' ,pre)
//   // console.log('tail2' ,tail)
//   tail.next = cur;
//   // dummyHead.next = null
//   return dummyHead.next;
// };

// const reverseBetween = function (head, m, n) {
//     let p = dummyNode = new ListNode()
//     p.next = head
//     const count = n-m 

//     let pre; 
//     let cur; 
//     let front; 
//     let tail;

//     for (let i = 0; i < m - 1; i++) {
//             p = p.next;
//         }
    
//     front = p
//     pre = tail = p.next;
//     cur = pre.next;

//     for (let i = 0; i < count; i++) {
//         let next = cur.next;
//         cur.next = pre;
//         pre = cur;
//         cur = next;
//     }

//     front.next = pre
//     tail.next = cur

//     return dummyNode.next

//   };

// function ListNode(val, next) {
//   this.val = (val === undefined ? 0 : val);
//   this.next = (next === undefined ? null : next);
// }

// const data = {
//   val: 1,
//   next: {
//     val: 2,
//     next: {
//       val: 3,
//       next: {
//         val: 4,
//         next: {
//           val: 5,
//           next: {
//             val: 6,
//             next: null
//           },
//         },
//       },
//     },
//   },
// };

// start = 3;
// end = 5;



// const ans = reverseBetween(data, start, end);
// console.log('ans' , ans)

const reverseBetween = function (head, m, n) {
    let p = dummyNode = new ListNode()
    p.next = head

    let front,pre,tail,cur

    for(let i = 0; i < m-1; i++) {
      p = p.next
    }

    front = p 
    tail = pre =p.next
    cur = pre.next
    
    for (let i = 0; i < n-m; i++) {
        let next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }

    front.next = pre
    tail.next = cur

    return dummyNode.next
    };
// @lc code=end
