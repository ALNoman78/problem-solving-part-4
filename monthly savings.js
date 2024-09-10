// const monthlyMoney = [1200,3000,2900,5000,2000,3999] //
// const monthlyMoney = [1000, 2000, 3000] //
// function monthlySaving(number) {
//     const rentAmount = 5400;
//     let x = [];
//     let totalSavings = 0;
//     let sum = 0;
//     for (const e of number) {
//         if (e >= 3000) {
//             let serviceTax = e * 20 / 100;
//             x.push(serviceTax)
//         }
//         sum += e;
//     }
//     for (const total of x) {
//         // console.log(total);
//         totalSavings += total
//     }
//     let amountSave = sum - totalSavings; 
//     let remainingAmount = amountSave - rentAmount
//     // console.log(sum);
//     // console.log(totalSavings);
//     console.log(amountSave);
//     console.log(remainingAmount);
// }
// const value = monthlySaving(monthlyMoney)
// console.log(value);






const monthlyMoney = [1000, 2000, 3000] //
// const monthlyMoney = "sd" //
function monthlySaving(number, livingCost) {
    if (Array.isArray(number) !== true) {
        return "Error Check data type"
    }
    let sum = 0;
    for (const e of number) {
        if (e >= 3000) {
            let serviceTax = e * 20 / 100;
            sum += e - serviceTax;
        }else{
            sum += e;
        }
    }
    let remainingAmount = sum - livingCost
    return remainingAmount >= 0 ? remainingAmount : "earn more"
}
const value = monthlySaving(monthlyMoney , 5400)
console.log(value);




// 
// let savingArray = [2000,4000,5000,2300,1000,3000]
let savingArray = {name : 32, year : "$3",}

function monthlyAmount(money , livingCost) {
    if (Array.isArray(money) !== true) {
        return "Invalid Input"
    }
    let sum = 0;
    for (const e of money) {
        if (e >= 3000) {
            let taxAmount = e * 20 /100;
            sum += e - taxAmount;
        }else{
            sum += e;
        }
    }let remainingAmount = sum - livingCost
    return remainingAmount >= 0 ? remainingAmount : "earn more"; 
}
const amount = monthlyAmount(savingArray , 5400)
console.log(amount);