/* 
Linked Lists - Sorted Insert

Write a SortedInsert() function which inserts a node into the correct location of a pre-sorted linked list which is sorted in ascending order. SortedInsert takes the head of a linked list and data used to create a node as arguments. SortedInsert() should also return the head of the list.

sortedInsert(1 -> 2 -> 3 -> null, 4) === 1 -> 2 -> 3 -> 4 -> null)
sortedInsert(1 -> 7 -> 8 -> null, 5) === 1 -> 5 -> 7 -> 8 -> null)
sortedInsert(3 -> 5 -> 9 -> null, 7) === 3 -> 5 -> 7 -> 9 -> null)
The push() and buildOneTwoThree() functions do not need to be redefined.
*/

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

function sortedInsert(head, data) {
  if (!head) return new Node(data);
  if (head.data > data) return new Node(data, head);

  let current = head;

  while (current) {
    if (current.next && current.next.data > data) {
      current.next = new Node(data, current.next);
      break;
    } else if (!current.next) {
      current.next = new Node(data);
      break;
    }
    current = current.next;
  }

  return head;
}

//recursions
function sortedInsert(head, data) {
  if (!head || data < head.data) return new Node(data, head);
  else {
    head.next = sortedInsert(head.next, data);
    return head;
  }
}

function sortedInsert(head, data) {
  if (head == null) return new Node(data);
  else if (head.data > data) return new Node(data, head);
  else return new Node(head.data, sortedInsert(head.next, data));
}
