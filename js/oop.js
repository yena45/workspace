import assert from 'assert';

const obj = {id: 1, name: 'Hong'};
// cf. obj = {..., __proto__: { x: 11 }};

console.log(obj.toString);
Object.getPrototypeOf(obj) === Object.prototype
  === obj.constructor.prototype === obj.__proto__


class Animal {
    // instance(this) + prototpye 생성! (무엇보다 먼저 실행!)
    constructor(name) { // {name: …}
      this.name = name || super.constructor.name;
    }
  } 
  const dog = new Animal('Dog');

  console.log('obj.keys=', Object.keys(obj));
  console.log('dog.keys=', Object.keys(dog));

  for (let k in dog) console.log('k=', k);

  console.log('oh=', obj.hasOwnProperty('id'));
  console.log('dh=', dog.hasOwnProperty('id'));
  
/*
typeof Animal            // ?
obj instanceof Object    // ?
Object instanceof Function  // ?
Animal instanceof Object // ?
dog instanceof Animal    // ?
typeof (dog, obj, [], null)  // ?
dog instanceof Array     // ?
[] instanceof Array      // ?
{} instanceof Object     // ?
[] instanceof Object     // ?

dog.constructor === Animal  // ?
Object.values(dog);
Object.entries(dog);
*/

class Emp {
  firstName;
  lastName;
  constructor() {
    return new Proxy(this, {
      set(_target, prop, value) {
        if (prop === 'fullName') {
          const tmp = value?.split(' ') || [];
          this['lastName'] = (tmp[1] || tmp[0])?.toUpperCase();
          this['firstName'] = tmp[1] ? tmp[0] : this.firstName;
        } else {
          this[prop] = value;
        }
      },

      get(_target, prop) {
        if (prop === 'fullName') {
          return `${this.firstName}${this.firstName ? ' ' : ''}${
            this.lastName
          }`;
        }

        return this[prop];
      },
    });
  }
}
const hong = new Emp();
hong.fullName = 'Kildong Hong'; // split하여 firstName, lastName 셋
console.log(hong.fullName); // 'Kildong HONG' 출력하면 통과!
assert.strictEqual(hong.fullName, 'Kildong HONG');
hong.fullName = 'Lee';
console.log(hong.firstName, hong.lastName); // 'Kildong LEE' 출력하면 통과!
assert.strictEqual(hong.fullName, 'Kildong LEE');
assert.deepStrictEqual(
  [hong.firstName, hong.lastName],
  'Kildong LEE'.split(' ')
);

hong.fullName = undefined;
console.log('🚀  hong:', hong);

