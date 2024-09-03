// 1) 1970년 1월 1일과 1970년 1월 2일의 차이를 초로 나타내시오.
// 2) 이 달의 날짜 5개를 무작위(rand)로 만들어 역순으로 정렬하시오.
// 3) 내년(2025년)의 오늘(9월 3일)의 요일을 출력하시오.
// 4) 오늘(9월 3일)로 부터 100일 후의 날짜는?

const moment = require('moment');

milsec1 = new Date(1970,0,1);
milsec2 = new Date(1970,0,0);
// milsec2 = moment().millisecond('1970-01-01');
console.log("🚀 ~ milsec:", milsec1-milsec2);

function randomDays(){
    const days= [];
    for(let i = 0; i<5; i++){
        
    }
}

const m = moment('2025-09-03');
days = ['월','화','수','목','금','토','일'];
for (let i =0; i<7;i++){
    if (m.day() === i)
        console.log(days[i-1])
}

ex4 = moment().add(100, 'days');   // cf. subtract()
console.log("🚀 ~ ex4:", ex4);

