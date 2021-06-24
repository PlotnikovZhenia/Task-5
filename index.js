/*1)const users = [
     { gender: 'male', age: 22, },
    { gender: 'female', age: 20, },
    { gender: 'male', age: 32, } ];
Found the average age.*/
const users = [
    { gender: 'male', age: 22,},
    { gender: 'female', age: 20,},
    { gender: 'male', age: 32,} 
]
let sum_of_all_ages=null;
for(let item of users) {
    sum_of_all_ages+=item.age;
}
let result=sum_of_all_ages/users.length;
console.log(Math.ceil(result));

/*2)Fix this code*/
const object = {
  a: 'somestring',
  b: 42,
  c: false,
  k: 11,
};
const numbers = [];
Object.values(object).forEach((item) => {
    if(typeof(item)==="number") {
        numbers.push(item);
    }
})
console.log(numbers);
// expected output: Array [42, 11]