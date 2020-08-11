const repeatString = function(word, repeatTimes) {
    if (repeatTimes < 0) {
        return "ERROR";
    }
    let newString = "";
    for (let i = 0; i < repeatTimes; i++) {
        newString += word;
    }
    return newString;
}

module.exports = repeatString
