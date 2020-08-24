const removeFromArray = function(...args) {
    const arrayToEdit = args[0];
    const newArray = [];

    arrayToEdit.forEach((item) => {
        if (!args.includes(item)) {
          newArray.push(item);
        }
      });
    return newArray;
}

module.exports = removeFromArray
