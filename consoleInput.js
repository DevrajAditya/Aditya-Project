const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
})

rl.question("what is ur name?\n", (answer)=>{
    console.log(`Hello ${answer}`)
    rl.close();
})