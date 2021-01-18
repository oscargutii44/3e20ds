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


function factorial(x) { 
    let stack = new Stack();
    while (x > 1) {
        stack.push(x--);
    }
    let product = 1;
    while (stack.getSize() > 0) {
        product *= stack.pop();
    }
    return product;
}

console.log('El factorial de 5 = '+factorial(5));