String.prototype.replaceArr = function (arr, rplw) {
    str = new String(this);
    arr.forEach(e => {
     let regx = new RegExp(e, 'ig')
     str = str.replace(regx, rplw)
    })
    return str;
}
String.prototype.replaceA = function (arr, rplw) {
    str = new String(this);
    arr.forEach(e => {
     let regx = new RegExp(e, 'ig')
     str = str.replace(regx, rplw)
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
    let nstr = [];
    for (let i = arr.length + 1; i >= 0; i--) {
        nstr.push(arr[i]);
    }
    return nstr.join("");
}
