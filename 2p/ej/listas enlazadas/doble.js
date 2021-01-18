class Node {
    constructor(data,next,prev) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class DoubleLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.tamaño = 0;
    }

    addToHead(data) {
        const newNode = new Node(data, this.head, null);
        if (this.head) {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    addToTail(data) {
        const newNode = new Node(data, null, this.tail);
        if (this.tail) {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.tail = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            return null;
        }

        const newNode = new Node(data, null, null);
        let current = this.head;
        let previous;

        if (index === 0) {
            newNode.next = current;
            current.prev = newNode;
            this.head = NewNode;
        } else {
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            }

            newNode.next = current;
            previous.next = newNode;
            current.prev = newNode;
            previous.next = newNode;
        }
        this.size++;

    }


    print() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.data + ' <-> ';
            current = current.next;
        }

        return result += ' X ';
    }

}

const listadoble = new DoubleLinkedList();
listadoble.addToHead(3);
listadoble.addToHead(2);
listadoble.addToTail(7);
listadoble.addToTail(8);
listadoble.insertAt(4,2);
console.log(listadoble.print());

