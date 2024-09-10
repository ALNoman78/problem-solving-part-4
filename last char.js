const userName = "mou"

function checkName(name) {
    let char = "a,e,i,o,u,w,x";
    let newChar = char.split(",")
    let result = "Bad Name";
    let check = name[name.length - 1]
    for(let i = 0; i < newChar.length ; i++){
        if (newChar[i] === check) {
            result = "Good Name";
        }
    }
    return result;
}
const value = checkName(userName);
console.log(value);