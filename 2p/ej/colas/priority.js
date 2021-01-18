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




// let pac = new Paciente("Jorge",3);  //Registramos los pacientes
// const emer = new Queue(); // Creamos una cola

// emer.enqueue(pac);  // Comenzamos a meter a los pacientes a la cola
// pac = new Paciente("Pepe", 4);
// emer.enqueue(pac);
// pac = new Paciente("Francisco", 2);
// emer.enqueue(pac);
// pac = new Paciente("Sergio", 1);
// emer.enqueue(pac);
// pac = new Paciente("Lucy", 1);
// emer.enqueue(pac);

// console.log(emer.print());   
// let vistos = emer.dequeue();    // Sacamos con el metodo dequeque por prioridad de codigo y lo guardamos en vistos

// console.log("Paciente que ha sido tratado: " + vistos[0].name); //Mostramos el paciente que sacamos por prioridad
// console.log("Pacientes esperando a ser atendidos: ")        //Mostramos los pacientes que faltan de ser atendidos
// console.log(emer.print());

// vistos = emer.dequeue();
// console.log("Paciente que ha sido tratado: " + vistos[0].name);
// console.log("Pacientes esperando a ser atendidos: ")
// console.log(emer.print());

// vistos = emer.dequeue();
// console.log("Paciente que ha sido tratado: " + vistos[0].name);
// console.log("Pacientes esperando a ser atendidos: ")
// console.log(emer.print());






// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.dequeue();
// queue.dequeue();
// console.log(queue.getSize());
// console.log(queue.print());


