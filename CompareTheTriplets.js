function solve(a0, a1, a2, b0, b1, b2) {
    var resA = 0;
    var resB = 0;
    var arrA = [a0,a1,a2];
    var arrB = [b0,b1,b2];
    for(var i = 0; i <3; i++){
        if (arrA[i] > arrB[i] && arrA[i] - arrB[i] != 0){
            resA++;
        }else if(arrB[i] > arrA[i] && arrB[i] - arrA[i] != 0){
            resB++;
        }
    }
    var resArray = [resA, resB];
    return resArray;
}