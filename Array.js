'use strict';
const mem = require('./memory');
const memory = new mem();

class Array {
  constructor() {
    this._capacity = 0;
    this.length=0;
    this.ptr = memory.allocate(this.length);
  }

  push(value) {
    if (this.length >= this._capacity) {
      this._resize((this.length+1) * Array.SIZE_RATIO);
    }

    memory.set(this.ptr + this.length, value);
    this.length++;
  }

  pop () {
    if (this.length === 0) {
      throw new Error('Index Error');
    }

    const value = memory.get(this.ptr + this.length -1);
    this.length--;
    return value;
  }

  _resize(size) {
    const prevPtr = this.ptr;
    this.ptr = (memory.allocate(size));
    if (this.ptr === null) {
      throw new Error('Out of Memory');
    }
    memory.copy(this.ptr, prevPtr, this.length);
    memory.free(prevPtr);
    this._capacity = size;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }

    return memory.get(this.ptr + index);
  }

  insert(index,value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index Error');
    } 

    if (this.length >= this._capacity) {
      this._resize((this.length +1) * Array.SIZE_RATIO);
    }


    // Assuming the index is 5 and the array length is 12. ptr is 0.
    // memory.copy(6, 5,7)
    memory.copy(this.ptr + index+1, this.ptr + index, this.length-index);
    memory.set(this.ptr + index,value);
    this.length++;
  }

  remove(index) {
    if (index < 0 || index > this.length) {
      throw new Error('Index Error');
    }

    memory.copy(this.ptr+index,this.ptr + index + 1,this.length - index -1);
    this.length--;

  }
}
Array.SIZE_RATIO = 3;



function main() {
  let myArr = new Array();
  console.log('INITIAL');
  console.log(myArr);
  myArr.push(3);
  myArr.push(1);
  myArr.push(34);
  myArr.push(2);
  myArr.push(3);
  myArr.push(3);
  myArr.push(23);
  myArr.push(23);
  myArr.push(23);
  myArr.push(23);
  myArr.push(23);
  myArr.push(23);
  myArr.push(23);
  console.log(myArr);

  console.log('POP');
  myArr.pop();
  console.log(myArr);
  console.log('INSERT');
  myArr.insert(4,2000);
  console.log(myArr);
  console.log('REMOVE');
  myArr.remove(4);
  console.log(myArr);
}


main();



