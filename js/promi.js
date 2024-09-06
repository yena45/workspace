import assert from 'assert';
import { error } from 'console';

const depthTimer = depth => new Promise (
    (resolve, reject) => {
        setTimeout(() => {
            console.log('depth1',new Date());
            resolve(depth +1);
            },depth *1000);
    }
    
)

function orgs(){
    setTimeout( function() {
        console.log('depth1', new Date());
        setTimeout( function() {
          console.log('depth2', new Date());
          setTimeout( function() {
            console.log('depth3', new Date());
            throw new Error('Already 3-depth!!');
          }, 3000 );
        }, 2000);
      }, 1000);
}


  
  console.log('START!', new Date());

// const p = new Promise(
//     (resolve, reject)=> {
//         setTimeout(()=> {
//             console.log('xx');
//             reject('Error')
//             resolve('OK');
//     },1000);
//     }
// )

// console.log('p',p);

// p.then(succResult => {
//     console.log('succ',succResult);
// }).catch(error => {
//     console.log('error:',error);
// })


const promiseFn = (id = 1) =>
    new Promise((resolve, reject) => {
      console.log('id>>', id);
      if (id < 7) resolve(id + 1);
      reject(new Error('어디로?' + id));
    });
  
    promiseFn(1) 
        .then(res => {
        console.log('res1>>', res);
        return promiseFn(res); //여기서 return 값이 2임. 다시 함수로 올라가서 resolve(3)이 이제 아래 THEN으로 들어가는 거임. 


        })
        .then(res => {
            if (!res) {
                reject(new Error('error'));
            }else{
                console.log('res2>>', res);
            }
        })
        .catch(err => console.log('Error!!>>', err));

        // const promiseAll = (args) =>
        //     new Promise((resolve, reject) => {
        //         if (!args) {
        //             reject(new Error('error'));
        //         }else{
        //             Promise.all(args)
        //             .then(resolve)
        //             .catch(reject);
                    
        //         }
        //     });
const promiseAll = promises => new Promise(
    (resolve, reject) => {
        const results =[];
        let cntToRun = promises.length;
        for (let i=0; i< promises.length; i++){
            promises[i].then(succ=> {
                results[i] =succ;
                cntToRun--;
                if(cntToRun ===0) resolve(results);
            }).catch(reject);

            resolve(results);
        }
    });

const vals = [1, 2, 3];
const randTime = val =>
    new Promise(resolve => setTimeout(resolve, Math.random() * 1000, val));
        
    promiseAll([randTime(1), randTime(2), randTime(3)])
    .then(arr => {
        console.table(arr);
        assert.deepStrictEqual(arr, vals);
    }).catch(console.error);
        
    promiseAll([randTime(11), Promise.reject('RRR'), randTime(33)])
        .then(array => {
            console.log('여긴 과연 호출될까?!');
        }).catch(error => {
            console.log('reject!!!!!!>>', error);
        });



