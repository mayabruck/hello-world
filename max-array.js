var foo = [30, 56, 72, 36, 1, 5, 89];
var woo = [599, 2, 4, 488, 39, 10];

// find max value of array
var maxArray = function (myArray) {
    var biggest = 0;
    for (var i = 0; i < myArray.length; i++) {
        if (biggest < myArray[i]) {
            biggest = myArray[i];
        }
    }
    return biggest;
}


console.log(maxArray(foo));

console.log(maxArray(woo));

