class Queue {
    constructor(){
        this.items = {};
        this.front = 0;
        this.end = 0;
    }

    enqueue(data) {
        this.items[this.end] = data;
        this.end++;
    }

    dequeue() {
        if (this.front === this.end) {
            return null;
        }

        const data = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return data;
    }

    getSize() {
        return this.end - this.front;
    }

    isEmpty() {
        if (this.getSize() === 0) {
            return true;
        } else {
            return false;
        }
    }

    peek() {
        if (this.getSize() === 0) {
            return null;
        } else {
            return this.items[this.front];
        }
    }

    print() {
        if (this.getSize() === 0) {
            return null;
        }

        let result = '';
        for (let i = this.front; i<this.end; i++) {
            result += this.items[i] + ' ';
        }

        return result;

    }
}

function Paciente(name, code) {
    this.name = name;
    this.code = code;
} 

let pac = new Paciente('Oscar', 2)
const queue = new Queue();



queue.enqueue(pac);

console.log(queue.print());






// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.dequeue();
// queue.dequeue();
// console.log(queue.getSize());
// console.log(queue.print());


