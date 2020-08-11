const reverseString = function(string) {
    let splitString = string.split("");
    let reversedArray = splitString.reverse();
    let newString = reversedArray.join("");
    return newString;
}

module.exports = reverseString
