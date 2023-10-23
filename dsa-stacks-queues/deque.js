// Internal Node class for the Doubly-LinkedList
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;  // Previous pointer for the doubly-linked list
    }
}

// Doubly-LinkedList class to manage the data for the Deque
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
            newNode.prev = this.tail;  // Set the previous pointer of the new node
            this.tail = newNode;
        }
        this.size++;
    }

    prepend(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;  // Set the previous pointer of the current head
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    removeFirst() {
        if (!this.head) return null;
        const removedNode = this.head;
        this.head = this.head.next;
        if (this.head) this.head.prev = null;  // Reset the previous pointer of the new head
        this.size--;
        if (!this.head) {
            this.tail = null;
        }
        return removedNode.val;
    }

    removeLast() {
        if (!this.tail) return null;
        const removedNode = this.tail;
        this.tail = this.tail.prev;
        if (this.tail) this.tail.next = null;  // Reset the next pointer of the new tail
        this.size--;
        if (!this.tail) {
            this.head = null;
        }
        return removedNode.val;
    }

    peekFirst() {
        return this.head ? this.head.val : null;
    }

    peekLast() {
        return this.tail ? this.tail.val : null;
    }
}

// Deque class that uses the Doubly-LinkedList for its operations
class Deque {
    constructor() {
        this._list = new LinkedList();
    }

    addFront(val) {
        this._list.prepend(val);
    }

    addBack(val) {
        this._list.append(val);
    }

    removeFront() {
        return this._list.removeFirst();
    }

    removeBack() {
        return this._list.removeLast();
    }

    peekFront() {
        return this._list.peekFirst();
    }

    peekBack() {
        return this._list.peekLast();
    }

    isEmpty() {
        return this._list.size === 0;
    }

    get size() {
        return this._list.size;
    }
}

module.exports = Deque;
