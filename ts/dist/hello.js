"use strict";
const myName = "yena";
const myAge = 23;
console.log(`Hello, ${myName}`);
console.log(`${myAge} years old!`);
let x;
x = 1;
console.log("🚀 ~ x:", x);
x = 'abx';
console.log("🚀 ~ x:", x);
const len = x.length;
let y;
console.log('🚀  y:', y);
let john = {
    firstName: 'John',
    lastName: 'ahn',
};
let hong;
const something = ({ id, name, age, address }) => {
    hong = {
        id,
        name,
        age,
        address,
    };
    console.log('🚀  hong:', hong);
};
const sltr = 'LITERAL';
let nltr = 100;
let literal;
literal = sltr;
let str;
str = `xxxx`;
str = sltr;
let grade;
grade = 'C';
let customer;
let m;
let g;
customer = {
    id: '111',
    name: '홍길동',
    addr: '용산구',
    discountRate: 0.1,
};
customer = {
    id: 222,
    name: '홍길동',
    age: 26,
};
customer = {
    id: 333,
    name: '홍길동',
    age: 26,
    addr: '용산구',
};
console.log('🚀  customer:', customer);
let xx = {
    id: 123,
    name: '홍길동',
    age: 26,
    addr: '용산구',
    // discountRate: 1,
};
if ('age' in xx)
    g = xx;
if ('addr' in xx)
    m = xx;
if (typeof xx.id === 'number' && 'age' in xx)
    g = xx;
if (typeof xx.id === 'string' && 'addr' in xx)
    m = xx;
xx.id = 100;
// if (typeof xx.id === 'number') g = xx;
// if (xx.hasOwnProperty('discountRate') m = xx;
let xxx = {
    id: 123,
    name: '홍길동',
    age: 26,
    addr: '용산구',
    discountRate: 1,
};
// if ('age' in xxx)
g = xxx;
// if ('addr' in xxx && 'discountRate' in xxx) m = xxx;
if (typeof xxx.id === 'number' && 'age' in xxx)
    g = xxx;
// if (typeof xxx.id === 'string' && 'addr' in xxx) m = xxx;
// ----------------------------------
let ss = 'str';
let nn = 900;
let yy = 1;
// yy = 'abc';
if (typeof yy === 'number') {
    // if (yy === 'abc') {
    nn = yy;
}
else {
    ss = yy;
}
// if (typeof yy === 'string') {
//   // if (yy === 'abc') {
//   ss = yy;
// } else {
//   nn = yy;
// }
// ----------------------
let gildong = Math.random() > 0.5 && 'HongGilDong';
if (gildong) {
    gildong.toUpperCase(); // string
}
else {
    gildong; // false | string
}
let a;
a = Math.random() > 5 ? 'aa' : undefined;
a?.slice(1);
