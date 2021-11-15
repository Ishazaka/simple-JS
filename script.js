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



