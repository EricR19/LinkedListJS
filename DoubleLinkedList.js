class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class doubleLinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    //Push Insert a value at the end of the node
    Push(value) {
            const newNode = new Node(value);
            if (this.length === 0) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                this.tail.next = newNode;
                newNode.prev = this.tail;
                this.tail = newNode;
            }
            this.length++;
            return this;
        }
        //Pop Remove the last value of the List
    Pop() {
            if (!this.head) undefined;
            let temp = this.tail;
            if (this.length === 1) {
                this.head = null;
                this.tail = null;
            } else {
                this.tail = this.tail.prev;
                this.tail.next = null;
                this.prev = null;
            }
            this.length--;
            return temp;
        }
        //Add a value at the beginning of the list
    Unshift(value) {
            const newNode = new Node(value);
            if (!this.head) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                this.head.pre = newNode;
                newNode.next = this.head;
                this.head = newNode;
            }
            this.length++
                return this;
        }
        //Remove the first element of the list
    shift() {
            if (this.length === 0) return undefined;
            let temp = this.head;
            if (this.length === 1) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
                this.head.prev = null;
                temp.next = null;
            }
            this.length--;
            return temp;
        }
        //Get the value of index
    Get(index) {
        if (index < 0 || index >= this.length) {
            return undefined
        }
        let temp = this.head;
        if (index < this.length / 2) {
            for (let i = 0; i < index; i++) {
                temp = temp.next;

            }
        } else {
            temp = this.tail;
            for (let i = this.length - 1; i > index; i--) {
                temp = temp.prev;

            }
        }
        return temp;
    }
}
let myDoubleLinkedList = new doubleLinkedList(1);

myDoubleLinkedList.Push(5);
myDoubleLinkedList.Push(3);
myDoubleLinkedList.Push(2);

console.log(myDoubleLinkedList.Get(0))