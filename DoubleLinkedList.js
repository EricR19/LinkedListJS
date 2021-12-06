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
        this.tail = this.head;
        this.length = 1;
    }

    //Push Insert a value at the end of the node
    Push(value) {
            const newNode = new Node(value);
            if (!this.head) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                this.tail.nex = newNode;
                newNode.prev = this.tail;
                this.tail = newNode;
            }
            this.length++;
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
}
let myDoubleLinkedList = new doubleLinkedList(1);
myDoubleLinkedList.Push(3);
myDoubleLinkedList.Unshift(5);
console.log(myDoubleLinkedList)