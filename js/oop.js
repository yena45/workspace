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
  console.log('ok=', Object.keys(obj));
  console.log('ak=', Object.keys(dog));
  for (let k in dog) console.log('k=', k);
  console.log('oh=', obj.hasOwnProperty('id'));
  console.log('dh=', dog.hasOwnProperty('id'));
  