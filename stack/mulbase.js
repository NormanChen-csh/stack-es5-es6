"use strict";
// author 陈少晖
// 2016.8.18
// 栈的实现类

function Stack() {
    this.dataStore = [];
    this.top = 0;
}

// 压入栈方法
Stack.prototype.push = function(element){
    this.dataStore[this.top++] = element;
}

// 出栈方法
// 栈顶元素删除
// top-1
// 将栈顶元素返回给调用者
Stack.prototype.pop = function() {
    if(this.top == 0) {
        return undefined;
    } else {
        var lastItem = this.dataStore[--this.top];//top = length 先top-1 再使用
        this.dataStore.length--;
        return lastItem;
    }
    // var lastItem = this.dataStore.pop();
    // this.top--;
    // return lastItem;

}

// 查看栈顶元素方法
Stack.prototype.peek = function() {
    return this.dataStore[this.top-1];
}

// 返回栈内元素数量
Stack.prototype.length = function() {
    return this.top;
}

// 清空栈
Stack.prototype.clear = function () {
    this.top = 0;
    return this.dataStore.length = 0;
}

Stack.prototype.toString = function () {
    if(this.top == 0) {
        var str = "次栈为空";
        return str;
    }
    return this.dataStore.join('|');
}

// 进制数转换，n数字,b几进制数，函数最后返回计算的结果
function mullBase(n,b) {
    var stack = new Stack();
    do {
        stack.push(n%b);
        n = Math.floor(n/b);//返回一个除数之后取出小数点的整数向下求余
    }while(n > 0);

    var converted = '';
    do {
        converted += stack.pop();
    }while (stack.top > 0);

    return converted;
}

function isHuiwen(str) {
    var stack = new Stack();
    for (var i = 0; i < str.length; i++) {
        stack.push(str[i]);//字符串自带.length属性
    }

    var word  = "";
    do {
        word += stack.pop();
    } while (stack.top > 0);

    if(word == str){
        return true;
    } else {
        return false;
    }

}

function factorial(n) {
    if(n === 0) {
        return 1;
    } else {
        return n*factorial(n-1);
    }
}

function leiCheng(n) {
    var stack = new Stack();
    do {
        stack.push(n--);
    } while (n > 0);
    var num = 1;
    do {
        num *= stack.pop();
    } while (stack.top > 0);
    return num;
}

console.log(leiCheng(6));
// console.log(isHuiwen('dadhoihkio'));
