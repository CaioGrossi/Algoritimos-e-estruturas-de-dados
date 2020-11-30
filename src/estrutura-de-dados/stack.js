class Stack {
    constructor() {
        this.count = 0;
        this.items = {};
    }

    push(item) {
        this.items[this.count] = item;
        this.count++;
    }

    size() {
        return this.count;
    }

    isEmpty() {
        return this.count == 0;
    }

    pop() {
        if(this.isEmpty()) {
            return undefined;
        }

        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }

    peek() {
        if(this.isEmpty()) {
            return undefined;
        }

        return this.items[this.count - 1]
    }

    clear() {
        this.items = {};
        this.count = 0;
    }

    toString() {
        if(this.isEmpty()) {
            return '';
        }
        
        let objString = ``;
        for (let i = 0; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`;
        }

        return objString;
    }
}