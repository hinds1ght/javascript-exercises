const sumAll = function(x, y) {
let total = parseInt(1);
    for (i = 1; i < y; i++){
        x += 1;
        total += x;
    } 
    return total;
};

// Do not edit below this line
module.exports = sumAll;
