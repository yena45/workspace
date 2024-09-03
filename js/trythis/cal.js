let today = new Date();

console.log(`${today.getMonth()+1}월`, `${today.getFullYear()}`);

const days = ['일','월','화','수','목','금','토'];

let calendar = [];

const startDay = new Date(today.getFullYear(), today.getMonth(), 1);

const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

for (let i = 0; i < startDay.getDay(); i++) {
    calendar.push("   "); 
}



for (let i = 1 ; i <= lastDay; i++){
    calendar.push(String(i).padStart(2, ' ') + ' ');
}

for (let i = 0; i < calendar.length; i += 7) {
    console.log(calendar.slice(i, i + 7).join(' '));
}
