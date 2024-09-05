import assert from 'assert';

// const hrTeam = {id: 1, dname: '인사팀'};   // 홍길동 (인사팀)
// const devTeam = {id: 2, dname: '개발팀'};
// const empDept = new Map();
// empDept.set(hrTeam.id, hrTeam);
// empDept.set(devTeam.id, devTeam);

// const hong = {id: 1, name: 'Hong', dept: 1};  // hong.dept.name ⇒ deptMap.get(hong.dept)?.name
// const kim = {id: 2, name: 'Kim', dept: 2};
// const emps = [ 
//     hong, kim, 
//     {id:3, name: 'Park', dept: 2}, 
//     {id: 4, name: 'Choi', dept: 2} 
// ];


function getEmp(empId){
    // {id:1, name: 'Hong', dept: {id:1, dname: 'Sale'}}
    const emp = emps.find(emp => emp.id === empId);
    if (emp){
        const dept = empDept.get(emp.dept);
        if(dept){
            return {...emp, dept: dept};
        }
    }
};

// assert.deepStrictEqual(getEmp(1), {id:1, name: 'Hong', dept: {id:1, dname: '인사팀'}});

// console.log(empDept.get(kim).dname); // '개발팀'


const hrTeam = {id: 1, dname: '인사팀'};  
const devTeam = {id: 2, dname: '개발팀'};
const depts = [ hrTeam, devTeam ];  

const deptMap = new Map(depts.map(dept => dept.id, dept));

const hong = {id: 1, name: 'Hong', dept: 1};  // hong.dept.name ⇒ deptMap.get(hong.dept)?.name
const kim = {id: 2, name: 'Kim', dept: 2};
const emps = [ hong, kim, {id:3, name: 'Park', dept: 2}, {id: 4, name: 'Choi', dept: 2} ];
console.log(deptMap); // Map(2) { 1 => { id: 1, dname: '인사팀' }, 2 => { id: 2, dname: '개발팀' } }  ⇐ deptMap.get(2)
console.log(empMap); // Map(2) { 1 => {id: 1, name: 'Hong', dept: 1}, 2 => {id: 2, name: 'Kim', dept: 2}, … }
console.log(empDept); // Map(4) { { id: 1, name: 'Hong' } => { id: 1, dname: '인사팀' }, { id: 2, name: 'Kim' } => { id: 2, dname: '개발팀' }, { id: 3, name: 'Park' } => { id: 2, dname: '개발팀' }, { id: 4, name: 'Choi' } => { id: 2, dname: '개발팀' } }

console.log(empDept.get(kim).dname); // '개발팀'
