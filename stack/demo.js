function isHuiwen(str) {
    var stack = new Stack();
    for(i = 0;i < str.length;i++) {
        stack.push(str[i]);
    }

    var words = '';
    do{
        words += stack.pop();
    }while(stack.top > 0);

    if(words == str) {
        return true;
    } else {
        return false;
    }
}
