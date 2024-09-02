const readline = require('readline');
const { stdin: input} = require('process');

const rl = readline.createInterface({ input});

const itAdd = add();
console.log(itAdd.next().value);


function* add() {    
    const num1 = yield "첫 번째 수?";
    const num2 = yield "두 번째 수?";
    return num1 + num2;
  }


rl.on('line', answer => {
    const {value,done} = itAdd.next(+answer);
    if (done) {
        console.log("Total",value);
        rl.close();
    }else console.log(value);
    }).on('close', () => {
    process.exit();
});

