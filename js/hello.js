console.log("riku");

let a = 1;
let b = 2;
let c = (a++, b++);

let aa = 0b1010;
let bb = 0b1100;
const and = aa & bb;
console.log("🚀 ~ and:", and);

const R = 1;
const W = 1;
const E = 4;

let auth = parseInt("011", 2);
const hasWriteAuth = auth & W;
console.log("🚀 ~ hasWriteAuth:", hasWriteAuth);
const hasExeAuth = auth & E;
console.log("🚀 ~ hasExeAuth:", hasExeAuth);
const hasReadAndExeAuth = auth & (R | E);
console.log("🚀 ~ hasReadAndExeAuth:", hasReadAndExeAuth);
auth = auth ^ E; // XOR
