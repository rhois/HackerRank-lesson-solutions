function simpleArraySum(ar) {
    let sum = 0;
    var arr = ar.toString().split(",");
    for(var i = 0;i < ar.length; i++){
        sum += parseFloat(arr[i]);
    }
    return sum;
}