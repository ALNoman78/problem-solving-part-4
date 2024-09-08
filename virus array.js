// let arr = {name : "noman"};
let arr = [NaN, 12, 45, 65, 34, 6, undefined, null];

function deleteInvalids(array){
    let x = [];
    for (const e of array) {
        // console.log(typeof e);
        if (typeof e === "number" && isNaN(e) !== true) {
            // console.log(e);
            x.push(e)
        }
    }
    return x;
}
const newValue = deleteInvalids(arr)
console.log(newValue);