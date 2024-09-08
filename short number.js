// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed']
function shortNumber(words) {
    let x = words[0];
    for(let i = 1 ; i < words.length ; i++){
        if (words[i].length < x.length) {
            x = words[i]
        }
    }
    return x;
}

const short = shortNumber(heights2)
console.log(short);