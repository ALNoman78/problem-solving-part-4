// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];


const heights2 = [167, 190, 120, 165, 137];
function minNUmber(number) {
    let min = heights2[0];
    for (const e of number) {
        // console.log(e);
        if(e < min){
            min = e;
        }
    }
    return min;
}
const mini = minNUmber(heights2)
console.log(mini);