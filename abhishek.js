//Type conversion
let numStr='123';
let num=Number(numStr); //convert string in to number
let str1=String(num); //converts number to string
console.log(typeof num);
console.log(num);
console.log(str1);

let bool=Boolean(0)
console.log(bool);
let str=String(100);
console.log(str);

//Type Coercion
console.log('5'*2);
//(string '5' is coerced to number)
console.log('5'+2);
//(number 2 is coerced to string)
let b='5';
let c=3;
console.log(b+c);
console.log(b*c);

//Arithmetic
let sum=56+78;
console.log(sum);
let product=56*86;
console.log(product);
let a=45;
let d=999;
console.log(a+d);
console.log(a-d);
console.log(a*d);
console.log(d/a);
console.log(d%a);

//Camparision
let isEqual=(5=='5');
let isStrictEqual=(5==='5');
console.log(isEqual);
console.log(isStrictEqual);
let e='66'
let f=66;
isEqual=(e==f);
console.log(isEqual);
isStrictEqual=(e===f);
console.log(isStrictEqual);


//Logical
let isAdult=true;
let hasID=false;
let canEnter=isAdult && hasID;
console.log(canEnter);


//array
let fruits=['apple','mango'];
console.log(fruits);
fruits.push('date');
console.log(fruits);
fruits.pop('apple');
console.log(fruits);
fruits.unshift('orange');
console.log(fruits);
let fruits1=fruits.shift();
console.log(fruits);
console.log(fruits1);


//map
let salary=[999,6789,867557,84685748,6666];
let doubled=salary.map(salary=>salary*2);
console.log(doubled);
let half=salary.map(salary=>salary/2);
console.log(half);


//destructuring
let [name,surname]=['Ankul','Yadav']
console.log(name);
console.log(surname);

//precedence
let equ=2+5-6*9/3;
console.log(equ);
let adjust=(2+5-6)*9/3;
console.log(adjust);

// common array methods
//slice //splice 
let array=[1,2,3,4,5,];
let scliced=array.slice(2,3);
console.log(scliced);
let spliced=array.splice(2,1,7);
console.log(spliced);
console.log(array);

//forEach
let day=[1,2,3,4,5,6,7];
day.forEach(function(num){
console.log(num*3)
});

//function
//function sum











