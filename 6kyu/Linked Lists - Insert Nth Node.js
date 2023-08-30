/* 
Linked Lists - Insert Nth

Implement an InsertNth() function (insert_nth() in PHP) which can insert a new node at any index within a list.

InsertNth() is a more general version of the Push() function that we implemented in the first kata listed below. Given a list, an index 'n' in the range 0..length, and a data element, add a new node to the list so that it has the given index. InsertNth() should return the head of the list.

insertNth(1 -> 2 -> 3 -> null, 0, 7) === 7 -> 1 -> 2 -> 3 -> null)
insertNth(1 -> 2 -> 3 -> null, 1, 7) === 1 -> 7 -> 2 -> 3 -> null)
insertNth(1 -> 2 -> 3 -> null, 3, 7) === 1 -> 2 -> 3 -> 7 -> null)
You must throw/raise an exception (ArgumentOutOfRangeException in C#, InvalidArgumentException in PHP) if the index is too large.

The push() and buildOneTwoThree() (build_one_two_three() in PHP) functions do not need to be redefined. The Node class is also preloaded for you in PHP.
*/

function Node(data) {
  this.data = data;
  this.next = null;
}

function Node(data, next) {
  this.data = data;
  this.next = next;
}

function insertNth(head, index, data) {
  if (index === 0) return new Node(data, head);
  let current = head;
  let idx = 0;
  while (current && idx < index) {
    if (idx === index - 1) {
      current.next = new Node(data, current.next || null);
      return head;
    }
    current = current.next;
    idx++;
  }
  throw new Error('');
}

//recursion
function Node(data, nxt) {
  this.data = data;
  this.next = nxt;
}
function insertNth(head, index, data) {
  if (index == 0) return new Node(data, head);
  if (head && index > 0) {
    head.next = insertNth(head.next, index - 1, data);
    return head;
  }
  throw 'Error';
}
