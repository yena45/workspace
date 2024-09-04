const assert = require('assert');

// const regexp = /senior|coding/gi;
// if (regexp.test('Junior Developer')) console.log('OK1');
// if (regexp.test('Senior Developer')) console.log('OK2');
// if (regexp.test('JS Coding')) console.log('OK3');
// if (regexp.test('JavaScript Coding')) console.log('OK4');


// // '1234-2323-2323-2323'.replace(/(\d{4})-(\d{4})-(.*)$/, '$1-$3-####-####');
// console.log("🚀 ", '1234-2323-2323-2323'.replace(/(\d{4})-(\d{4})-(.*)$/, '$1-$2-####-####'))


// 오른 쪽과 같은 형태로 출력하는 fmt 함수를 작성하시오.
const total = {price: 45000, vat: 4500};

console.log(fmt`주문합계: ${total.price}원`);
console.log(fmt`세액합계: ${total.vat}원`);

function fmt(strings, ...values){
    val = String(values.toLocaleString()).padStart(10,' ');
    return `${strings[0]} ${val}원`;
}

//문자열이 한글 자음으로 끝나는지 체크하는 함수를 작성하시오.

function isEndJaum(str){
    const lastChar = str[str.length - 1];
    return /[ㄱ-ㅎ]$/.test(lastChar);
}
console.log(isEndJaum('강원덩'));
console.log(isEndJaum('강원도'));

assert.equal(isEndJaum('아지오'), false);
assert.equal(isEndJaum('북한강'), true);
assert.equal(isEndJaum('뷁'), true);

//조사 '이/가, 을/를, 은/는'를 알아서 붙이는 함수를 작성하시오.


// 문자열 str에서 대문자만 골라 소문자로 다음과 같이 변환하세요.
function upperToLower(str){
    return str.replace(/[A-Z]/g, (p1) => `*${p1.toLowerCase()}*-`);
}

assert.strictEqual( upperToLower('Senior Coding Learning JS'), '*s*-enior *c*-oding *l*-earning *j*-*s*-');


// 문자열 str에서 대문자는 소문자로, 소문자는 대문자로로 변환하세요.
function swapCase(str){
    return str.replace(/([A-Z]*)([a-z]*)/g, (_,p1,p2) => `${p1.toLowerCase()}${p2.toUpperCase()}`)
}

assert.equal(swapCase('Senior Coding Learning JS'), 'sENIOR cODING lEARNING js');
assert.equal(swapCase('Hanaro 4 Class'), 'hANARO 4 cLASS');
assert.equal(swapCase('HeLLo WoRLd'), 'hEllO wOrlD');


//전화번호를 정확한 형식으로 출력하는 함수를 작성하시오.

function telfmt(str){
    const len = str.length;
    if (len < 7) return str;
    //여기 $ 왜쓰지
    if( len <= 8) return str.replace(/(\d{3,4})(\d{4})$/g,"$1-$2")

}


//searchByKoreanInitialSound(s, 'ㄱㅅㄱ'); // ⇒ /ㄱ가-깋ㅅ사-싷/