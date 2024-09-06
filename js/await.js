const afterTime = sec => new Promise(
    (resolve, reject) => setTimeout(resolve, sec*1000, sec)
);

//promis는 모든 값이 true로 인식됨.
// const odds = [1, 2, 3].filter(async val => {
//     const r = await afterTime(val);
//     console.log(r);
//     return r % 2 === 1;
// });
// console.log('odds=', odds);

const ps = [1,2,3].map(afterTime);
const rrr = (await Promise.all(ps)).filter(
    n => n % 2
);

console.log('rrr=', rrr);
// await new Promise(resove => setTimeout(resolve, 2000));


const vals = [1, 2, 3];
const randTime = val =>
	new Promise(resolve => setTimeout(resolve, Math.random() * 1000, val));

promiseAllAsync([randTime(1), randTime(2), randTime(3)]).then(arr => {
  console.table(arr);
  assert.deepStrictEqual(arr, vals);
}).catch(console.error);

promiseAllAsync([randTime(11), Promise.reject('RRR'), randTime(33)])
  .then(array => {
    console.log('여긴 과연 호출될까?!');
  }).catch(error => {
    console.log('reject!!!!!!>>', error);
  });
