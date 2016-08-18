"use strict";
class Stack {
    constructor() {
        this.dataStore = [];
        this.top = 0;
    }

    push(element) {
        this.dataStore[this.top++] = element;
    }

    pop() {
        if(this.top == 0) {
            return undefined;
        } else {
            var lastItem = this.dataStore[--this.top];//top = length 先top-1 再使用
            this.dataStore.length--;
            return lastItem;
        }
    }

    peek() {
        return this.data.dataStore[this.top-1];
    }

    length() {
        return this.top;
    }

    clear() {
        this.top = 0;
        return this.dataStore.length = 0;
    }

    toString() {
        if(this.top == 0) {
            var str = '此栈为空';
            return str;
        }
        return this.dataStore.join('|');
    }
}
