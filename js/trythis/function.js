
function once(func) {
    let isRun = false;  
    return function(...args) {
        if (!isRun) {
            isRun = true;
            return func.bind(this)(...args); 
        }
    };
}

// console.log(fn(1, 6)); // 금일 운행금지 차량은 끝번호 1, 6입니다!
// console.log(fn(2, 7)); // undefined
// console.log(fn(3, 8)); // undefined

function fivePart(x, y) {
    return `fivePart ${x}, ${y}, id: ${this.id}`;
}
const fn = once(fivePart.bind({ id: 11 }));
console.log(fn(1,2));
const fn2 = once(fivePart);
console.log(fn2.bind({ id: 22 })(3, 4));


const before = () => console.log('before....');
const after = () => console.log('after...');

const someFn = (name, greeting) => console.log(`${greeting}, ${name}`);
const someFn2 = (id, nickname, email, level) =>
console.log(`${id}/${nickname}/${email}/${level}`);

const template = (f) => {
    return (...arg) => {
        before();
        result = f(...arg);
        after();
        return result;
    }
}

const temp = template(someFn);    // before → someFn → after 실행
const temp2 = template(someFn2);  // before → someFn2 → after 실행

temp('sico', 'hello');
temp2(1, 'sico', 'sico@gmail.com', 5);
console.log('square of 7 =', template(n => n ** 2)(7));
