// check the last char of sentence

// function checkName(name) {
//     if (typeof name !== "string"){
//         return "Invalid Data"
//     }
//     let lastChar = "a,e,i,o,u,y,w,A,E,I,O,U,Y,W";
//     let convertArr = lastChar.split(",");
//     let last = name[name.length-1];
//     let x = "Bad Name";
//     for (const e of convertArr) {
//         if (e === last) {
//             x = "Good Name";
//         }
//     }
//     return x;
//     // return convertArr.includes(last) ? "Good Name ": "Bad Name"; // ans it's also true
// }
const userName = "uthsox"
const goodName = checkName(userName)
console.log(goodName);

function checkName(name){
    let lastChar = "a,e,i,o,u,y,w,A,E,I,O,U,Y,W";
    let convertArr = lastChar.split(",");
    let userName = name[name.length-1];
    let result = "Bad Name";
    for (const e of convertArr) {
        if (e === userName) {
            result = "Good Name";
        }
    }
    return result;
}