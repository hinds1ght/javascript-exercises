const sumAll = function(x, y) {
    if (typeof(y) !== "number" || x < 0){
        return 'ERROR';
    }
    let a = y;
    let b = x;
        if(x > y){
            b = y;
            a = x;
        }
let total = parseInt(1);
    for (i = 1; i < a; i++){
        b += 1;
        total += b;
    } 
    if (total == 1){
        return 'ERROR';
    }else{
        return total;
    }
};

// Do not edit below this line
module.exports = sumAll;
