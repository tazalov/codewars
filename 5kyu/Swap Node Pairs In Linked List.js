/* 
You are given the head node of a singly-linked list. Write a method that swaps each pair of nodes in the list, then returns the head node of the list. You have to swap the nodes themselves, not their values.

Example:

(A --> B --> C --> D) => (B --> A --> D --> C)

The swapping should be done left to right, so if the list has an odd length, the last node stays in place:

(A --> B --> C) => (B --> A --> C)

The list will be composed of Nodes of the following specification:

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
*/

function swapPairs(head) {
  if (!head || !head.next) return head;

  const newHead = new Node('blabla');
  newHead.next = head;

  let current = newHead;

  while (current.next && current.next.next) {
    let first = current.next;
    let second = current.next.next;

    first.next = second.next;
    second.next = first;
    current.next = second;

    current = current.next.next;
  }
  return newHead.next;
}
