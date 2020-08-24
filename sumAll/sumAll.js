const sumAll = function(x, y) {
    let sum;
    if (x > 0 && y > 0 && (typeof x === "number") && (typeof y === "number")) {
        if (x < y) {
            sum = x;
            for (let i = x+1; i <= y; i++) {
                sum += i;
            }
        } else if (y < x) {
            sum = y;
            for (let i = y+1; i <= x; i++) {
                sum += i;
            }
        }
    } else {
        return "ERROR";
    }
    return sum;
    }

module.exports = sumAll
