// const arr = [1, 9];
// [arr[0], arr[1]] = [arr[1], arr[0]];
// console.log("🚀 ~ arr:", arr);

// const reku = { id: 1, name: "REKU" };

// function f1(user) {
//   console.log("🚀 ~ f1 ~ user:", user.id, user.name);
// }
// function f2({ id, name }) {
//   console.log("🚀 ~ f2 ~ user:", id, name);
// }

// const f3 = ({ id, name }) => {
//   console.log(id, name);
// };

const user = { id: 1, name: "Hong", passwd: "xxx", addr: "Seoul" };

const { passwd, ...userInfo } = user;; 

console.log("🚀 ~ userInfo:", userInfo);

const arr = [[{ id: 1 }], [{ id: 2 }, { id: 3 }]];
// const id1 = arr[0][0].id;
// const id2 = arr[1][0].id;
// const id3 = arr[1][1].id;
const [[{ id: id1 }], [{ id: id2 }, { id: id3 }]] = arr;
console.log(id1, id2, id3);

const user1 = { name: "Hong", passwd: "xyz", addr: "Seoul" };
function getValueExceptInitial(k) {
    const { [k]: val } = user; // (가) 디스트럭처링을 사용해 k에 해당하는 값을 val에 할당
  const [, ...rest] = val;    // (나) val의 첫 글자를 제외한 나머지 부분을 rest에 할당
  return rest.join('');       // (다) rest 배열을 문자열로 변환하여 반환
}

console.log(getValueExceptInitial("name")); // 'ong'
console.log(getValueExceptInitial("passwd")); // 'yz'
console.log(getValueExceptInitial("addr")); // 'eoul'
