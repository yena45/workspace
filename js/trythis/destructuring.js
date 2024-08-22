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

// const user = { id: 1, name: "Hong", passwd: "xxx", addr: "Seoul" };
// const { id, name, addr } = user;
// const 3 = { id, name, addr };

// console.log("🚀 ~ userInfo:", userInfo);

const arr = [[{ id: 1 }], [{ id: 2 }, { id: 3 }]];
const id1 = arr[0][0].id;
const id2 = arr[1][0].id;
const id3 = arr[1][1].id;
console.log(id1, id2, id3);

const user = { name: "Hong", passwd: "xyz", addr: "Seoul" };
function getValueExceptInitial(k) {
  c;
}

console.log(getValueExceptInitial("name")); // 'ong'
console.log(getValueExceptInitial("passwd")); // 'yz'
console.log(getValueExceptInitial("addr")); // 'eoul'
