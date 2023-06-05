/* 
The code provided is supposed return a person's Full Name given their first and last names.

But it's not working properly.

Notes
The first and/or last names are never null, but may be empty.

Task
Fix the bug so we can all go home early.
*/

class Dinglemouse {
  constructor(f, l) {
    this.firstName = f;
    this.lastName = l;
  }

  getFullName() {
    return `${this.firstName ? this.firstName : ''}${
      this.lastName && this.firstName ? ' ' : ''
    }${this.lastName ? this.lastName : ''}`;
  }
}
