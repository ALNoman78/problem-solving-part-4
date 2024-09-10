const userName = "moule"

function checkName(name) {
    let char = "a,e,i,o,u,w,x";
    let newChar = char.split(",") // eita upr loop user korte hbe ar same eitar upree condition use korte hbe
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