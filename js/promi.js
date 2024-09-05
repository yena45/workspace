const p = new Promise(
    (resolve, reject)=> {
        setTimeout(()=> {
            console.log('xx');
            reject('Error')
            resolve('OK');
    },1000);
    }
)

console.log('p',p);

p.then(succResult => {
    console.log('succ',succResult);
}).catch(error => {
    console.log('error:',error);
})