class Stack {
    constructor() {
        this.items = {};
        this.top = 0;
    }

    push(data) {
        this.top++;
        this.items[this.top] = data;
    }

    pop() {
        let deletedData;

        if(this.top) {
            deletedData = this.items[this.top]
            delete this.items[this.top]
            this.top--;

            return deletedData;
        }
    }

    getSize() {
        return this.top;
    }

    isEmpty() {
        if(!this.getSize()) { //Si el resultado de getsize es diferente a cero nos devuelve true
            return true;
        } else {
            return false;
        }
    }

    peek() {
        if(this.isEmpty()) {
            return null;
        }

        return this.items[this.top];
    }

    print() {
        let result = '';
        
        for(let i = this.top; i>0; i--) {
            result += this.items[i] + ' , ';
        }
        return result;
    }
}


function mulBase(n, b) {
    let x = new Stack();
    do {
        x.push(n % b);
        n = Math.floor(n /= b);
    } while (n>0);
    let con = ""; 
    while (x.getSize()>0) {
        con += x.pop();
    }
    return con;
}


console.log(mulBase(5,2));



// const stack = new Stack();
// stack.push('Plato 1')
// stack.push('Plato 2')
// stack.push('Plato 3')
// stack.pop();
// console.log(stack);
// console.log(stack.getSize());
// console.log(stack.isEmpty());
// console.log(stack.peek());
// console.log(stack.print());