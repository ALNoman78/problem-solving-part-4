const obj = {
    name : "kolimuddin",
    birthYear : 1990,
    siteName : "google",
}

function passwordGen(pass){
    if(pass.name === undefined || pass.birthYear === undefined || pass.siteName === undefined || pass.birthYear.toString().length !== 4){
        return "Error"
    };
    let site = pass.siteName.charAt(0).toUpperCase()+ pass.siteName.slice(1);
    let newPasswordGenerate = site + '#' + pass.name + '@' + pass.birthYear
    return newPasswordGenerate;
}
const value = passwordGen(obj)
console.log(value);