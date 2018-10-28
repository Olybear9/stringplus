String.prototype.replaceArr = function (arr, rplw) {
    str = new String(this);
    arr.forEach(e => {
     str = str.replace(/e/ig, rplw)
    })
    return str;
}
String.prototype.replaceA = function (arr, rplw) {
    str = new String(this);
    arr.forEach(e => {
     str = str.replace(e, rplw)
    })
    return str;
}
String.prototype.isPalidrome = function () {
    str = new String(this);
    let revstring = str.reverse();
    if(str == revstring) return true;
    else return false;
}
String.prototype.reverse = function () {
    str = new String(this);
    arr = str.split('');
    let nstr = new String();
    for (let i = arr.length; i > 0; i--) {
        nstr = nstr + arr[i];
    }
}
