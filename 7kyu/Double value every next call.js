/* 
This kata is about static method that should return different values.

On the first call it must be 1, on the second and others - it must be a double from previous value.

Look tests for more examples, good luck :)
*/

class Class {
  static value = 0.5;
  static getNumber() {
    this.value *= 2;
    return this.value;
  }
}
