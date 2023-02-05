const reverseString = function(str) {
let arr = str.split("");
let x = arr.length - 1;  
let test = ''; 
        for (i = x; i >= 0; i--){
            test += arr[i];
        }
        return test;
};

// Do not edit below this line
module.exports = reverseString;
