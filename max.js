// max number fund

const arr = [12, 34, 65, 34, 65, 34, 67, 78, 34, 67, 876];
function maxNum(number) {
    let x = arr[0];
    for (const e of number) {
        // console.log(e);
        if (x < e) {
            x = e;
        }
    }
    return x;
}
const value = maxNum(arr)
console.log(value);


//  find lowest number

function lowestNumber(number) {
    let min = number[0]
    for (const e of number) {
        if (e < min) {
            min = e;
        }
    }
    return min;
}
const newValue = lowestNumber(arr)
console.log(newValue);