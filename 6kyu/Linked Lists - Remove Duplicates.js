/* 
Linked Lists - Remove Duplicates

Write a RemoveDuplicates() function which takes a list sorted in increasing order and deletes any duplicate nodes from the list. Ideally, the list should only be traversed once. The head of the resulting list should be returned.

var list = 1 -> 2 -> 3 -> 3 -> 4 -> 4 -> 5 -> null
removeDuplicates(list) === 1 -> 2 -> 3 -> 4 -> 5 -> null
If the passed in list is null/None/nil, simply return null.

Note: Your solution is expected to work on long lists. Recursive solutions may fail due to stack size limitations.

The push() and buildOneTwoThree() functions need not be redefined.
*/

function Node(data) {
  this.data = data
  this.next = null
}

function removeDuplicates(head) {
  if (!head || !head.next) return head
  
  let datas = new Set()
  datas.add(head.data)
  
  let prevN = head
  let nextN = head.next
  
  while (prevN && nextN) {
    if (!datas.has(nextN.data)) {
      datas.add(nextN.data)
      prevN = prevN.next
      nextN = nextN.next
    } else {
      prevN.next = nextN.next
      nextN = prevN.next
    }
  }

  return head
}

//or
function removeDuplicates(head) {
  if (!head || !head.next) return head
  
  let prevN = head
  let nextN = head.next
  
  while (nextN) {
    if (prevN.data !== nextN.data) {
      prevN = prevN.next
      nextN = nextN.next
    } else {
      prevN.next = nextN.next
      nextN = prevN.next
    }
  }

  return head
}