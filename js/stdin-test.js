// Practice doing real time command line interaction

const readline = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});

const inquirer = require('inquirer');

// Readline example
let question = "What's your name? ";
let question2 = 'Whats your password?';
let questions = [question, 'what else is there?', 'third thing?'];

readline.question(question, response => {
    console.log(`Your response was ${response}`);
    // readline.close();
});

readline.question(question2, response => {
    console.log(`your pw is ${'*' * response.length()}`);
    readline.close();
})

// inquirer.prompt(questions).then(

// )
