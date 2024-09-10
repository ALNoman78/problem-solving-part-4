function vowelName(userName) {
    let vowel = "a,e,i,o,u";
    let newVowel = vowel.split(",");
    for (let i = 0; i < userName.length; i++) {
        if (newVowel.includes(userName[i].toLowerCase())) {
            console.log("The vowel is = ", userName[i]);
        }
    }
}
const name = "Abdullah Al Noman";
const value = vowelName(name);
console.log(value);