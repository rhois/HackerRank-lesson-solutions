function aVeryBigSum(n, ar) {
    var arr = ar.toString().split(",");
    let sum = 0;
    for(var i = 0; i < n; i++){
        sum += parseFloat(arr[i]);
    }
    return sum;

}