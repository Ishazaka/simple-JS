var hello= "hello world i am hazel";
console.log(hello);

// String type
let name = "john" ;
console.log("my name is " + name);
console.log("data type of "+ name + " is " + (typeof name));

// Numbers type

let marks = 56;
console.log("marks of john is " + marks)
console.log( "data type of marks is " + typeof marks);


// boolean
let win= true;
console.log("data type is " + typeof win);

// Object literals
let stMarks = {
 harry : 76,
 john: 48,
 foek: 57
}
console.log("data type of stMarks is " + typeof stMarks);

// functions type
function findname(){

}
console.log("data type of findname is " + typeof findname);

// date type
let date= new Date();
console.log("data type of date is " + typeof date);

//  type conversion and & coercion

let myvar,
myvarr = 34;
console.log( myvarr +" data type of 34 is " + typeof myvarr);
//  to convert in string use String

myvarr = String(34);
console.log( myvarr +" data type of 34 is " + typeof myvarr);

// convert boolean
 myvarr = true;
 console.log( myvarr +" (data type of true is " + typeof myvarr + ")");

 myvarr =String(true);
 console.log( myvarr +" (data type of true is " + typeof myvarr + ")");

// like above conversion , convert date and arrays 

myvarr = new Date();
console.log( myvarr +" (data type of date is " + typeof myvarr + ")");

myvarr = String(new Date());
console.log( myvarr +" (data type of date is " + typeof myvarr + ")");

myvarr = [1,2,3,4,5];
console.log( myvarr.length +" (data type of this is " + typeof myvarr + ")")

myvarr = String([1,2,3,4,5]);
console.log( myvarr.length +" (data type of this is " + typeof myvarr + ")");

let i = 78;
console.log(i);

 i = 88;
console.log(i.toString());


// converting into numbers

let x = "3434";
console.log(x , typeof x);
 
 x = Number("3434");
console.log(x , typeof x);

x = Number("34db34");
console.log(x , typeof x);

x = Number(true);
console.log(x , typeof x);

x = Number(false);
console.log(x , typeof x);

x = Number([1,2,3,4,5]);
console.log(x , typeof x);

// ParseINt and ParseFloat


let y = ("34.048");
console.log(y , typeof y);

 y = parseInt("34.048");
console.log(y , typeof y);

 y = parseFloat("34.048");
console.log(y , typeof y);

 y = parseFloat("34.048");
console.log(y.toFixed , typeof y);


// toFixed functions with differ method

 y = Number("134.048") ;
console.log( y.toFixed(14), typeof y);

y = 678;
console.log( y.toFixed(14), typeof y);


// Type coercion
// it converts both into one e.g. js converts number into string then apply  addition

let a = "678";
let b = 78;
console.log(a + b);

// String Properties , Methods and template literals

const personname = "harry";
const greeting = "good Morning";
// to write both strings together we use concatenation sign(+)
console.log(greeting + " " +personname)

let html;
html = "<h1> this is heading </h1>" +
     "<p> this is paragraph </p>";

console.log(html);
console.log(html.length);


html = html.concat("hey", "hello");// 2nd method of concatenation
console.log(html);

// string functions
console.log(html.length);

console.log(html.toLowerCase());
console.log(html.toUpperCase());

// the above functions only returns the value not change the original defined variable
console.log(html);

console.log(html[1]);
console.log(html[0]);

console.log(html.indexOf("heading"));
console.log(html.indexOf("fit"));

console.log(html.indexOf("<"));
console.log(html.lastIndexOf("<"));

console.log(html.charAt(5));

console.log(html.endsWith("hey"));

console.log(html.endsWith("heyhello"));

console.log(html.includes("paragraph"));

console.log(html.substring(1,6)); //give the characters from start

console.log(html.substring(-4)); //it will give the whole context

console.log(html.slice(1,6)); //give the character from the start

console.log(html.slice(-4)); //give the character from the last

console.log(html.split(" ")); //it splits the context into array 
//it splits from every space


console.log(html.split("<")); //it splits the context into array from every  (<) sign

console.log(html.replace("this", "it")); //it replaces only first occurence

//Template literals

let fruit1 = "orange";
let fruit2 = "apple";

let myhtml = ` Hello ${name}
  <h1> this is heading </h1>
 <p> you like ${fruit1} and ${fruit2}</p> `;

document.body.innerHtml = myhtml;

// Arrays and Objects

 let stmarks = [34, 23, 24, 93, 73, 25];
 let fruits = ["orange", "Apple", "Pineapple"];
 let mixed = ['hello', 89, [3,5]];

 let arr = new Array(23,123,21,'orange');
 console.log(stmarks);

console.log(fruits);
console.log(arr);

console.log(stmarks[0]);

console.log(stmarks.length);
console.log(Array.isArray(mixed));

console.log(Array.isArray("tiptop"));

arr[0] = 'harry';
console.log(arr);

let x = arr[0];
console.log('element :',x );
console.log('first name :',x );

let value = stmarks.indexOf(73);
console.log(value);

// Push and Pop

stmarks.push(3564);
console.log(stmarks );
stmarks.push(48);
console.log(stmarks );

stmarks.pop();
console.log(stmarks );

// unshift and shift

stmarks.unshift(9114);
console.log(stmarks );

stmarks.unshift(7137);
console.log(stmarks );

stmarks.shift();
console.log(stmarks );

// Splice

stmarks.splice(2,2);
console.log(stmarks );

stmarks.splice(0,2);
console.log(stmarks );

// reverse
stmarks.reverse();
console.log(stmarks );


// concat

let stmarks2 = [1,2,3,4];

stmarks = stmarks.concat(stmarks2);
console.log(stmarks );


// objects

let myobj = {
'stname' : 'harry',
'class' : '12th',
isActive : true ,
hismarks : [34, 49,57]
};
console.log(myobj );

console.log(myobj.hismarks );
console.log(myobj.class );
// console.log(myobj.'stname' );
console.log(myobj['stname']);
console.log( 'class :' ,myobj['class']);



// If Else conditions and switches

let age = 65

if(age>=19){
  console.log('your are eligible for application');
}else{
  console.log('you cannot apply');
}

// if else if statement

let st_age = 64;

if (st_age==19){
  console.log('Age is not 19')
}
else if(st_age<19) 
{
  console.log('congratulations');
}
else{
  console.log('you can take part');
} 

// ternary operator

let oldage = 75;

console.log(oldage==65? 'you are our customer': 'you are too old');


// Switch Case

let yourage = 38;

switch(yourage){
case(18):
console.log('you are 18', 'yes you are eligible for this post');
break;
case(28):
console.log('you are 28', 'yes you are eligible for this post');
break;
case(38):
console.log('you are 38', 'yes you are eligible for this post');
break;
case(48):
console.log('you are 48', 'yes you are eligible for this post');
break;
case(58):
console.log('you are 58', 'yes you are eligible for this post');
break;
default:
console.log('you are too old');
break;

}


// while loops

let j = 0;
while(j<10){
console.log(j + ' Are you ready for success');
j++
}


//  Do while loops

let n = 0;
do{
  console.log(n ,' hello');
  n++
}while(n<=10);


// for loops

for(let m=0; m<=9; m++){
  console.log(m +' hey');
}

// forEach loops (uses in arrays)

const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(array1));


array1.forEach(function(element){
  console.log(element)
});


const array2 = ['4', '6', '8', '5'];

array2.forEach(function(element,array ,index){
  console.log(element,array,index)
});


// forIn loops (uses in objects)

const object1 = {
  a:1,
  b:2,
  c:3
};
