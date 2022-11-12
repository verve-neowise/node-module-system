console.log('Started: vars.js');

let x = 12
let y = 81

function printX() {
    console.log("vars x: ", x)
}

function changeX(v) {
    x = v
}

// exports.x = x
// exports.y = y

module.exports = {
    x, 
    y, 
    printX,
    changeX
}