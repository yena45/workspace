function counterx() {
    let count = 0;
    return function X() {
        count += 1;
        return count;
    };
}
const counter1 = counterx();
const counter2 = counterx();

console.log(counter1());  // 1
console.log(counter1());  // 2
console.log(counter2());  // 1

function currentCount() {
    let currCount = 0;               // private variable
    return {
      connect() { currCount += 1; },
      disconnect() { currCount -= 1; },
      getCount() { return currCount; },   // getter method
      get count() { return currCount; },  // readonly getter (accessor)
    };
  }
  
  const actions = ['입장', '입장', '입장', '퇴장', '입장', '퇴장']; // Status Queue
  
  const counter = currentCount();
  for (const action of actions) {
    action === '입장' ? counter.connect() : counter.disconnect();
    console.log(`${action} -> 현재 입장객:  ${counter.count} 명`);
  }
  console.log('Current User Count=', counter.count);  // counter.getCount()

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

//재귀함수
function addto100(a){
    if (a === 100) return a;
    return a + addto100(a +1);
}

console.log(addto100(1));

function addto100TCO(a, sum=0){
    if (a === 100) return sum + 100;
    return addto100TCO(a +1, sum += a);
}
console.log("🚀 ~ addto100TCO ~ addto100TCO:", addto100TCO(1))

//연습문제

function makeReverseArray(a){
    if (a === 1) return [a];
    return [a].concat(makeReverseArray(a-1));
}

console.log("makeReverseArray",makeReverseArray(10));

function makeArray(a){
    if (a === 1) return [a];
    return [...makeArray(a-1), a];
}

console.log("makeArray",makeArray(10));

function makeReverseArray1(a){
    if (a === 1) return [a];
    return [a, ...makeReverseArray1(a-1)];
}

console.log("makeReverseArray1",makeReverseArray1(10));


function makeReverseArrayTCO(a,arr=[]){
    if (a === 0) return arr;
    return makeReverseArrayTCO(a-1, arr.concat(a));
}

console.log("makeReverseArrayTCO",makeReverseArrayTCO(10));

function makeArrayTCO(a, arr=[]){
    if (a === 1) return [1, ...arr];
    return makeArrayTCO(a-1, [a,...arr]);
}

console.log("makeArrayTCO",makeArrayTCO(5));

function makeArrayTCO2(a, arr=[]){
    const t = [a,...arr];
    if (a === 1) return t;
    return makeArrayTCO2(a-1, t);
}

console.log("makeArrayTCO2",makeArrayTCO2(5));


//피보나치 수열 연습문제

function loopFibonacci(n){
    next = [0,1];
    if (n <= 1){ return n};
    for (let i = 2; i<=n; i++){
        next[i] = next[i-2] + next[i-1];
    }
    return next[n];
}
console.log("🚀 ~ loopFibonacci:", loopFibonacci(5));
console.log("🚀 ~ loopFibonacci:", loopFibonacci(7));

//다른 답
function loopFibonacci1(n){
    if (n <= 1) return n;
    let prev = 0;
    let curr =1;
    for (let i = 2; i<=n;i++){
        let prev =t;
        prev = curr;
        curr = t + curr;
    }
    return curr;
}

function loopFibonacci2(n){
    next = [0,1];
    if (n <= 1){ return n};
    for (let i = 2; i<=n; i++){
        [next[0],next[1]] = [next[1],next[0]+next[1]];
    }
    return next[1];
}

console.log("🚀 ~ loopFibonacci2 ", loopFibonacci2(5))

function recursiveFibonacci(n){
    if (n <= 1) return n;
    return recursiveFibonacci(n-2) + recursiveFibonacci(n-1);
}

console.log("🚀 ~ recursiveFibonacci(5):", recursiveFibonacci(5));
console.log("🚀 ~ recursiveFibonacci(7):", recursiveFibonacci(7));
console.log("🚀 ~ recursiveFibonacci(15):", recursiveFibonacci(15));

function memoized(fn) { // 범용 memoized function
    const memoizedTable = {};
    return function B(k) {
      return memoizedTable[k] ?? (memoizedTable[k] = fn(k));
    };
  }

  
const memoizedFibonacci = memoized(function A(n) {
    if (n <= 1) return n;
    return memoizedFibonacci(n - 2) + memoizedFibonacci(n - 1);
  });

console.log("🚀 ~ memoizedFibonacci ~ memoizedFibonacci:", memoizedFibonacci(15));

