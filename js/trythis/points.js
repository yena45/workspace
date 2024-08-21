for (let i = 0.1; i < 1; i = i + 0.1) {
  console.log(+i.toFixed(1));
}

for (let i = 1; i <= 10; i++) {
  sol = Math.sqrt(i);
  if (sol % 1 != 0) {
    console.log("🚀 ~ sol:", sol.toFixed(3));
  } else console.log("🚀 ~ sol:", sol);
}

// let date;
// switch (day) {
//   case 0:
//     date = "일요일";
//     break;
//   case 1:
//     date = "월요일";
//     break;
//   case 2:
//     date = "화요일";
//     break;
//   case 3:
//     date = "수요일";
//     break;
//   case 4:
//     date = "목요일";
//     break;
//   case 5:
//     date = "금요일";
//     break;
//   case 6:
//     date = "토요일";
//     break;
// }

function addPoints(a, b) {
  sum = a + b;
  if (a.toString().length > b.toString().length) {
    return sum.toFixed(a.toString().length - 2);
  } else {
    return sum.toFixed(b.toString().length - 2);
  }
}

console.log("🚀 ~ addPoints:", addPoints(0.21354, 0.1));
console.log("🚀 ~ addPoints:", addPoints(0.14, 0.28));

function addPoints(a, b) {
  sum = a + b;
  if (a.toString().length > b.toString().length) {
    return sum.toFixed(a.toString().length - 2);
  } else {
    return sum.toFixed(b.toString().length - 2);
  }
}

console.log("🚀 ~ addPoints:", addPoints(0.21354, 0.1));
console.log("🚀 ~ addPoints:", addPoints(0.14, 0.28));
