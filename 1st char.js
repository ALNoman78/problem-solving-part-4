const userName = "aoule";

function firstChar(name) {
    let char = ["a", "e", "i", "o", "u", "x", "c"]
    let firstWord = name[0].toLowerCase();
    let result = "Bad Name";
    for (let i = 0; i < char.length; i++) {
        if (char[i] === firstWord) {
            return "Good Name";
        }
    }
    return result;
}
const value = firstChar(userName)
console.log(value);