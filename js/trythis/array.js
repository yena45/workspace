const assert = require('assert');


function push(array, ...args) {
    return [...array,...args]
}

function pop(array, args =1) {
    if (args === 1) {
        return array.splice(-1)[0];
    }
    return array.splice(-args);
}
function unshift(array, ...args) {
    return [...args,...array]
}
const arr = [1, 2, 3, 4];
//assert.deepStrictEqual(push(arr, 5, 6), [1, 2, 3, 4, 5, 6]); 
// assert.deepStrictEqual(pop(arr), 4); 
// assert.deepStrictEqual(pop(arr, 2), [3, 4]);    // 2개 팝(꺼내 줘)!
// assert.deepStrictEqual(unshift(arr, 0), [0, 1, 2, 3, 4]);
assert.deepStrictEqual(unshift(arr, 7, 8), [7, 8, 1, 2, 3, 4]);
// assert.deepStrictEqual(shift(arr), [2, 3, 4]); 
// assert.deepStrictEqual(shift(arr, 2), [3, 4]);
// assert.deepStrictEqual((arr),[1, 2, 3, 4]); 