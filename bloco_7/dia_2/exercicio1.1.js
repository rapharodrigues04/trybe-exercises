var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

// Only change code below this line

var playerNumber = parseInt(Object.keys(testObj)[1]);
console.log(playerNumber);

var player = testObj[playerNumber];
console.log(player);