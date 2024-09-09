//  check the last char using js 
// and if a, e, i , o ,u , w, y this type of char gone error

const userName = "uthso";

function checkName (fullName){
    let check = "a,e,i,o,u,w,y";
    let convertNewArray = check.split(",");
    let result = "Bad Name";
    let lastChar = fullName[fullName.length-1]
    for(let i = 0; i < convertNewArray.length; i++){
        if (convertNewArray[i] === lastChar) {
            return "Good Name";
        }
    }
    return result;
}
const value = checkName(userName);
console.log(value);
