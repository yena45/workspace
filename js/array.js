a100 = Array.from({length:100}, (_, i)=> i + 1);
console.log("🚀 ~ Array:", a100);


a1 = Array(5).map((a,i) => i + 1);
console.log("🚀 ~ a1:", a1);


a2 = [...Array(5)].map((a,i) => i + 1);
console.log("🚀 ~ a2:", a2);


const hong = {id:1, name:'hongi'};
const kim = {id:2, name:'kim'};
const lee = {id:3, name:'lee'};
const park = {id:4, name:'parki'};

const users = [hong, kim,lee,park];

const idxKim = users.indexOf(kim);
console.log("🚀 ~ idxKim:", idxKim);

const find3 = (a) => a.id ===3;


const idxId2 = users.findIndex(
    (a,i) => a.id === 3
);
console.log("🚀 ~ idxId2:", idxId2);


const idxId1 = users.findLastIndex(
    (a) => a.id ===1
);
console.log("🚀 ~ idxId1:", idxId1);


function findId(i) {
    return a => a.id === i;
}


const idxId = users.findLastIndex(findId(1));
console.log("🚀 ~ idxId1:", idxId);

console.log('----------------')
users.forEach((a) => console.log(a.id, a.name));

// const isOdd = (n) => n%2 !== 0;
// for (const val of arr){
//     console.log(isOdd(val));
// }

// arr.forEach(a => console.log(isOdd(a)));

const kim2 = users.find(user =>user.name === 'kim');

const hong2 = users.findLast(user => (user.name === 'hong'));
console.log("🚀 ~ hong2:", hong2);


const hasIUsers = users.filter(user => user.name.includes('i'));
console.log("🚀 ~ hasIUsers:", hasIUsers);

const names = users.map(user => user.name);
console.log("🚀 ~ names:", names);


const arr = [1,2,3,4,5]
const makeArray = (cnt, startNum = 1) =>
    Array.from({ length: cnt }, (_, i) => i + startNum);
  
  function isPrimeNormal(n) {
    if (n === 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i += 1) {
      if (n % i === 0) return false;
    }
    return true;
  }
  
const isPrime = n => {
    if (n === 1) return false;
    // return Array.from({ length: Math.sqrt(n) - 1 }, (_, i) => i + 2).every(
    return makeArray(Math.sqrt(n) - 1, 2).every(a => n % a !== 0);
  };

// const isPrime = n => (n % 2 !==0 && n % 3 !==0);

const hasPrime = (arr) => arr.some( a => isPrime(a));

console.log("🚀 ~ hasPrime:", hasPrime(arr));


// function primeNumbers(arr){
//     return arr.filter(num => isPrime(num));
// }
const primeNumbers = arr =>arr.filter(num => isPrime(num));

console.log("🚀 primeNumbers:", primeNumbers(arr));

const a78 = [7, 8];
const a88 = [1, 2, [...a78]];
console.log("🚀 ~ a88:", a88)


const users1 = [lee, kim, hong,park];
users1.sort((a, b) => a.name > b.name ? 1 : -1);
console.log("🚀 ~ users1:", users1)
