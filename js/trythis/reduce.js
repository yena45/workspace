const objs = [ {id: 1}, {name: 'Hong'}, {addr: 'Seoul', id: 5} ];

console.log(objs.reduce( (acc, o) => ({...acc,...o})));

