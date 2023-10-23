// Internal Node class for the LinkedList
class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  // LinkedList class to manage the data for the Queue
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    append(val) {
      const newNode = new Node(val);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.size++;
    }
  
    removeFirst() {
      if (!this.head) return null;
      const removedNode = this.head;
      this.head = this.head.next;
      this.size--;
      if (!this.head) {
        this.tail = null;
      }
      return removedNode.val;
    }
  
    peekFirst() {
      return this.head ? this.head.val : null;
    }
  }
  
  // Queue class that uses the LinkedList for its operations
  class Queue {
    constructor() {
      this._list = new LinkedList();
    }
  
    enqueue(val) {
      this._list.append(val);
    }
  
    dequeue() {
      if (this._list.size === 0) {
        throw new Error("Queue is empty!");
      }
      return this._list.removeFirst();
    }
  
    peek() {
      return this._list.peekFirst();
    }
  
    isEmpty() {
      return this._list.size === 0;
    }
  
    get size() {
      return this._list.size;
    }
  }
  
  module.exports = Queue;
  