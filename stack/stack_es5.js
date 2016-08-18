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
