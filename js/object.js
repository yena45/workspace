// const user = {
//     '': 1,        
//     ' ': 1,       // 'id': 1, '0y': 2 모두 OK!
//     123: 1,       // user[123], user['123'] OK, but user.123 is SyntaxError!!
//     [12345n]: 2,    // user[12345], user[12345n], user['12345'] OK, but user['12345n'] is undefined!
//     true: 1,      // OK  user[true]  user.true
//     id: 2,          
//     [`name`]: 'Hong',  // But, `name`: 'Hong'은 SyntaxError: Unexpected template string!
//     [Symbol()]: 'Hong',   // OK But, Symbol(): 'Hong'은 SyntaxError: Unexpected token ':'
//     [`${new Date()}`]: 365,    // OK! 'Sun Jul …': 365
//     'my-friends': ['Han', 'Kim'],
//     getInfo: () => `${this.id}-${this.name}`,       // OK! But, this is not user!
//     getInfo() { return `${this.id}-${this.name}`; }, // OK! getInfo의 최종 <f.o>
//   } 

// const values = Object.values(user);
// console.log("🚀 ~ values:", values);


const arr = [100, 200, 300, 400, 500, 600, 700];

// 1. for-in문을 사용하여 배열의 인덱스(키)를 출력하시오
for (const key in arr){
    console.log(key);
}

// 2. for-in문을 사용하여 배열의 원소(값)를 출력하시오. (of)

for (const key in arr){
    console.log(arr[key]);
}

for (const value of arr){
    console.log(value);
}


const obj = { name: 'Kim', addr: 'Yongsan', level: 1, role: 9, receive: false }
//3. for-in문을 사용하여 프로퍼티 이름(키)들을 출력하시오.

for (const key in obj){
    console.log(key);
}

//4. for-in문을 사용하여 프로퍼티 값을 출력하시오.

for (const key in obj){
    console.log(obj[key]);
}

//5. for-of문을 사용하여 프로퍼티 값을 출력하시오.
//몰라
for (const value of Object.values(obj)){
    console.log(value);
}

//6. level 프로퍼티가 열거(entries)되지 않도록 설정하시오.

Object.defineProperty(obj , 'level', { enumerable: false});

//7. role 프로퍼티는 읽기전용으로 설정하시오.

Object.freeze(obj , 'role');

//[['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70]] 배열을 객체로 만드시오. 
//(makeObjectFromArray)

const data = [
    ['A', 10, 20], 
    ['B', 30, 40], 
    ['C', 50, 60, 70]
]

function makeObjectFromArray1(array) {
    const retObj1 = {};
    for (const [key, ...val] of array){
        retObj1[key] = vals;
    }

  }

console.log("🚀 ~ makeObjectFromArray", makeObjectFromArray1(data));


function makeObjectFromArray(array) {
    const retObj = {};
    for (const [key, ...vals] of array) {
      retObj[key] = vals;
    }
    return retObj;
  }

console.log("🚀 ~ makeObjectFromArray", makeObjectFromArray(data));

const dataObj = makeObjectFromArray(data);
function makeArrayFromObject(obj) {
    const results = [];
    for (const key in obj) {
      results.push([key, ...obj[key]]);
    }
    return results;
  }
  console.log('🚀  makeArrayFromObject:', makeArrayFromObject(dataObj));

  function isObject(obj) {
    return obj && typeof obj === 'object';
  }
  
  const KIM = { nid: 3, nm: 'Kim', addr: { city: 'Pusan' }, [Symbol()]: 'sym' };
  function copyObject(obj) {
    if (!isObject(obj)) return obj;
  
    const newer = {};
    for (const k of Reflect.ownKeys(obj)) {
      newer[k] = copyObject(obj[k]);
    }
    // for (const k in obj) {
    //   newer[k] = copyObject(obj[k]);
    // }
  
    // const symbols = Object.getOwnPropertySymbols(obj);
    // console.log('🚀  symbols:', symbols);
    // for (const symKey of symbols) {
    //   newer[symKey] = obj[symKey];
    // }
  
    return newer;
  }