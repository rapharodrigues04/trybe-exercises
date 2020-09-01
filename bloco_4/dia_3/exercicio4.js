let n = 5;
let symbol = '*';
let lineInput = '';
let middle = (n + 1) / 2;
let left = middle;
let right = middle;

for (let i = 0; i <= middle; i++) {
    for (let j = 1; j <= n; j++) {
        if (j > right && j < left) {
            lineInput += symbol;
        } else {
            lineInput += " ";
        }
    }
    console.log(lineInput);
    lineInput = '';
    right -= 1;
    left += 1;
}