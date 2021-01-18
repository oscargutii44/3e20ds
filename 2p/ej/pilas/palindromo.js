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

function palindromo(word) {
    let stack = new Stack();
    for (var i = 0; i < word.length; ++i) {
        stack.push(word[i]);
    }
    let w = "";
    while (stack.getSize() > 0) {
        w += stack.pop();
    }
    if (word == w) {
        return palabra+" es un palindromo";
    }
    else {
        return palabra+" no es un palindromo";
    }
}

let palabra = 'Rotor'
console.log(palindromo(palabra));

palabra = 'Oscar';
console.log(palindromo(palabra));

