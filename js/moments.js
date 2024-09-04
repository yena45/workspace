// 1) 1970년 1월 1일과 1970년 1월 2일의 차이를 초로 나타내시오.
// 2) 이 달의 날짜 5개를 무작위(rand)로 만들어 역순으로 정렬하시오.
// 3) 내년(2025년)의 오늘(9월 3일)의 요일을 출력하시오.
//  4) 오늘(9월 3일)로 부터 100일 후의 날짜는?
const assert = require('assert');
const moment = require('moment');

milsec1 = new Date("1970-01-02").getTime();
milsec2 = new Date("1970-01-01").getTime();

console.log("🚀 ~ milsec:", (milsec1-milsec2)/1000);

// function randomDays(){
//     const days= [];
//     for(let i = 0; i<5; i++){
//         const randomDay = new Date(2024,9,Math.random());
//     }
// }
// const rand = (s, e) => s + Math.floor((e - s + 1) * Math.random());
// const thisMonth = new Date();
// const randDate = Array(5)
//   .fill(0)
//   .map(() => new Date(thisMonth.setDate(rand(1, 30))))
//   .sort((a, b) => (a > b ? -1 : 1));
// console.log(randDate);

function ex2() {
    const d = new Date();
    d.setMonth(d.getMonth()+1);
    d.setDate(0);

    const lastDate = d.getDate();
    const randDate = [];
    do {
        const rdate = rand(1,lastDate)
        randDate.push(rand(1,lastDate));
        if (!randDate.includes(rdate))
            randDates.push(rdate);
        //randDate = [... new Set(randDate)];
    }while (randDate.length <5);

    //const randomDates = Array(5).fill(0).map(()=> rand(1,lastDate));

    console.log(randDate);
    
  return randDate.sort((a, b) => (a > b ? 1 : -1));
}

// const m = moment('2025-09-03');
// days = ['월','화','수','목','금','토','일'];
// for (let i =0; i<7;i++){
//     if (m.day() === i)
//         console.log(days[i-1])
// }

const d = new Date();
d.setFullYear(d.getFullYear()+1);
const nextYearWeek = d.getDay();
console.log("🚀 ~ nextYearWeek:", nextYearWeek);

ex4 = moment().add(100, 'days');
console.log("🚀 ~ ex4:", ex4);

// const d1 = new Date('1970-01-01');
// console.log(`🚀 ~ d1:`, d1);
// const d2 = new Date('1970-01-02');
// console.log(`🚀 ~ d2:`, d2);
// const diff = d2.getTime() - d1.getTime();
// console.log(diff / 1000);

// const rand = (s, e) => s + Math.floor((e - s + 1) * Math.random());
// const thisMonth = new Date();
// const randDate = Array(5)
//   .fill(0)
//   .map(() => new Date(thisMonth.setDate(rand(1, 30))))
//   .sort((a, b) => (a > b ? -1 : 1));
// console.log(randDate);

// const DAYS = '일월화수목금토';
// const d = new Date();
// const nextYear = new Date();
// nextYear.setDate(d.getDate() + 365);
// console.log(`내년 오늘은 ${DAYS[nextYear.getDay()]}요일 입니다.`);

// const next100 = new Date();
// next100.setDate(d.getDate() + 100);
// console.log(
//   `오늘부터 100일 후는 ${next100.getFullYear()}년 ${next100.getMonth()}월 ${next100.getDate()}일 입니다.`
// );