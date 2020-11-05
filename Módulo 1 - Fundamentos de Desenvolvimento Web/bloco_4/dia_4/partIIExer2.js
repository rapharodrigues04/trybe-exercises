
function indexOfMax(arr) {
    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }
    return maxIndex;
}

console.log(indexOfMax([2, 3, 6, 7, 10, 1]));