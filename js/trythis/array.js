import assert from 'assert';


function push(array, ...args) {
    return [...array,...args]
}

function pop(array, args =1) {
    if (args === 1) {
        return array.slice(-1)[0];
    }
    return array.slice(-args);
}
function pop2(array, idx = 1) {
    const result = arr.slice(-idx);
    if (result.length === 1) return result[0];
    return result;
}

function unshift(array, ...args) {
    return [...args,...array]
}

function shift(array,args =1){
    return array.slice(args);
}
let arr = [1, 2, 3, 4];

// assert.deepStrictEqual(push(arr, 5, 6), [1, 2, 3, 4, 5, 6]); 
// assert.deepStrictEqual(pop(arr), 4); 
// assert.deepStrictEqual(pop(arr, 2), [3, 4]);    // 2개 팝(꺼내 줘)!
// assert.deepStrictEqual(unshift(arr, 0), [0, 1, 2, 3, 4]);
// assert.deepStrictEqual(unshift(arr, 7, 8), [7, 8, 1, 2, 3, 4]);
// assert.deepStrictEqual(shift(arr), [2, 3, 4]); 
// assert.deepStrictEqual(shift(arr, 2), [3, 4]);
// assert.deepStrictEqual((arr),[1, 2, 3, 4]); 

// function deleteArray(arr, start, end = Infinity){
//     return arr.filter((a,i) => i < start || i >= end);
// }

// assert.deepStrictEqual(deleteArray(arr, 2), [1, 2]);
// assert.deepStrictEqual(deleteArray(arr, 1, 3), [1, 4]);
// assert.deepStrictEqual(arr, [1, 2, 3, 4]);

const Hong = { id: 1, name: 'Hong' };
const Kim = { id: 2, name: 'Kim' };
const Lee = { id: 3, name: 'Lee' };
let users = [Hong, Kim, Lee];


const deleteArray = (arr, start, end = Infinity) => {
    if (typeof start === 'number')
      return arr.filter((a, i) => i < start || i >= end);
  
    return arr.filter(a => a[start] !== end);
  };

// assert.deepStrictEqual(deleteArray(users, 2), [Hong, Kim]);
// assert.deepStrictEqual(deleteArray(users, 1, 2), [Hong, Lee]);
// assert.deepStrictEqual(deleteArray(users, 'id', 2), [Hong, Lee]);
// assert.deepStrictEqual(deleteArray(users, 'name', 'Lee'), [Hong, Kim])

const hong = { id: 1, name: 'Hong' };
const choi = { id: 5, name: 'Choi' };
const kim = { id: 2, name: 'kim' };
const lee = { id: 3, name: 'Lee' };
const park = { id: 4, name: 'Park' };
users = [kim, lee, park];         // 오염되면 안됨!!

users.addUser = function (newer){
    return [...this,newer];
};

users.removeUser = function(toRemoveUser){
    return this.filter(user => user.id !== toRemoveUser.id);
};

users.changeUser = function(fromUser, toUser){
    return users.map(user=> (user.id === fromUser.id ? toUser :user));
};

['addUser', 'removeUser', 'changeUser'].forEach(fn =>
    Object.defineProperty(users, fn, {
      enumerable: false,
    })
);


users.addUser(hong);            // [kim, lee, park, hong]
users.removeUser(lee);          // [kim, park]
users.changeUser(kim, choi);   // [choi, lee, park]

// ex1) 배열의 각 원소를 String으로 변환하시오.

arr = [1, 2, 3, true];
const ret1 = arr.map(String);
assert.deepStrictEqual(ret1, ['1', '2', '3', 'true']);
const classNames1 = (...args) =>
  args.reduce((acc, a) => `${acc}${acc && a ? ' ' : ''}${a ? a : ''}`, '');
const classNames2 = (...args) => args.filter(Boolean).join(' ');
const classNames = (...args) =>
  args
    .map(a => a.trim())
    .filter(Boolean)
    .join(' ')
    .replace(/\s{2,}/g, ' ');
// .replaceAll('  ', ' ');

const ret2 = classNames('', ' a  b    c ', ' d', ' ', 'e'); // cf. clsx
// console.log('🚀  ret2:', ret2);
assert.strictEqual(ret2, 'a b c d e');


// ----------------------------
const square = a => a ** 2;
const sqrt = a => Math.sqrt(a);
const cube = a => a ** 3;

arr = [1, 2, 3, 4, 5];
const r5 = arr.map(square).map(sqrt).map(cube);
// console.log('🚀  r5:', r5);

const baseJobs = [square, sqrt, cube];
const r6 = arr.map(a => baseJobs.reduce((acc, job) => job(acc), a));
// console.log('🚀  r6:', r6);

const aJobs = [square, sqrt, cube];
const bJobs = [cube, square];

const robot = (arr, jobs) => arr.map(a => jobs.reduce((acc, job) => job(acc), a));

// assert.deepStrictEqual(robot(arr, aJobs), [1, 8, 27, 64, 125]);
// assert.deepStrictEqual(robot(arr, bJobs), [1, 64, 729, 4096, 15625]);


// ----------------------------

//O(n^2)
const keyPairN2 = (arr,n) => {
    for (let i =0; i < arr.length; i+=1){
        for (let j =0; j < arr.length; j+=1){
            if (arr[i] + arr[j] === n)
                return [i,j];
        }

    }
}

const keyPair = (arr,n) =>{
    const cache ={};
    for (let i = 0; i < arr.length; i++){
        const val =arr[i];
        if (cache[val]) return [cache[val],i] ;
        cache[n-val] = i;
    }
};

keyPair([1, 3, 4, 5], 7);             // [1, 2]
keyPair([1, 4, 45, 6, 10, 8], 16);    // [3, 4]
keyPair([1, 2, 4, 3, 6], 10);         // [2, 4]
keyPair([1, 2, 3, 4, 5, 7], 9);       // [3, 4]  or [1, 5]

assert.deepStrictEqual(keyPair([1, 3, 4, 5], 7), [1, 2]);
assert.deepStrictEqual(keyPair([1, 4, 45, 6, 10, 8], 16), [3, 4]);
assert.deepStrictEqual(keyPair([1, 2, 4, 3, 6], 10), [2, 4]);
assert.deepStrictEqual(keyPair([1, 2, 3, 4, 5, 7], 9), [3, 4]);

