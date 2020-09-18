const addTwoNumbers = (a, b) => {
    alert(`Added two numbers a (${a}) and b (${b})`);
    return a + b;
}

function combineThem(first, second){
    console.log(`${first} and ${second} equal ${first + second}`);
}


exports.addTwoNumbers = addTwoNumbers;
exports.combineThem = combineThem;
