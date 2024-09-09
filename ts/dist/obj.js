"use strict";
let xuser;
xuser = { id: 1, name: 'xx' }; // OK
// xuser = {id: 1}; // Error (Property 'name' missing in type)
// xuser = {id: 1, name: 'xx', age: 30}; // Error ({id, name, age} is not assignable to type {id,name} )
//  ⇐ Freshness! -> 바로 넣을 수는 없다 할당을 해라!
const tmp = { id: 1, name: 'xx', age: 30 };
xuser = tmp;
const lee = { id: 1, name: 'Lee' };
const kim = { id: 2, name: 'Kim', addr: 'Seoul' };
const arr0 = [{ id: 1, name: 'Hong' }];
const arr1 = [{ id: 1, name: 'Hong' }, kim];
const arr2 = [{ id: 2, name: 'Kim', addr: 'Seoul' }, kim];
const arr3 = [{ id: 2, name: 'Kim', addr: 'Seoul' }, lee];
const arr4 = [{ id: 2, name: 'Kim', addr: 'Seoul' }, kim];
const xemp = {
    id: 1,
    name: 'xxx',
    addr: 'Pusan',
    road: 'Sumyun',
};
