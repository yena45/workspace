const arr2 = [1, 2, 3, 4, 5];

ex1 = arr2.slice(1, 3);
console.log("🚀 ~ ex1:", ex1);

ex2 = arr2.slice(2);
console.log("🚀 ~ ex2:", ex2);

ex3 = arr2.splice(1,3);
console.log("🚀 ~ arr2:", arr2)
console.log("🚀 ~ ex3:", ex3);

ex4 = arr2.splice(1,0,...ex3);
console.log("🚀 ~ ex4:arr2", arr2)

ex5 = arr2.splice(2);
console.log("🚀 ~ ex5:", ex5);
console.log("🚀 ~ arr2:", arr2);

ex6 = arr2.splice(2,0,...ex5);
console.log("🚀 ~ ex6:arr2:", arr2);

ex7 = arr2.splice(2,1,'X','Y','Z');
console.log("🚀 ~ arr2:", arr2)

const arr1 = [1, 2, 3, 4, 5];
ex8 = arr1.slice(0,2).concat('X','Y','Z').concat(arr1.slice(3,5))
console.log("🚀 ~ ex8:", ex8)
