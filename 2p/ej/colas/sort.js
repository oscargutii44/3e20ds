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

function dispArray(arr) {
    for (var i = 0; i < arr.length; ++i) {
        console.log(arr[i] + " ");
    }
}

function distribute(nums, queues, n, digit) {
    for (var i = 0; i < n; ++i) {
        if (digit == 1) {
            queues[nums[i]%10].enqueue(nums[i]);
        }
        else {
            queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
        }
    }
}

function collect(queues, nums) {
    var i = 0;
    for (var digit = 0; digit < 10; ++digit) {
        while (!queues[digit].empty()) {
            nums[i++] = queues[digit].dequeue();
        }
    }
}

//Programa principal 
var queues = [];
for (var i = 0; i < 12; ++i) {
    queues[i] = new Queue();
}
var nums = [];
for (var i = 0; i < 12; ++i) {
    nums[i] = Math.floor(Math.floor(Math.random() * 101));
}
console.log("Antes de Sort: ");
dispArray(nums);
distribute(nums, queues, 10, 1);
collect(queues, nums);
distribute(nums, queues, 10, 10);
collect(queues, nums);
console.log("\n\nDespués de sort: ");
dispArray(nums);