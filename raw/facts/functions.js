
// function sayHi(message)
// {
//     console.log("Hi "+message);
//     return 10;
// }
// sayHi("Rogers")
// let rval=sayHi("Steve");
// console.log(rval);


//assignment=>value of one variable could be assigned to another
//assignment=?address of a function could be assigned to a variabl
let a=[1,2,3,4]
let b=a;
console.log(b);

let fnkaref=function greeter()
 {
    console.log("coz functions are variables");
    return 20;
}
console.loh(fnkaref);
console.log(fnkaref());
// variables can be passed as a parameter
//functions can also be passed as a paramter
function greeter(param)
{
    console.log("inside greeter");
    console.log(param);
    param()
}
greater(function innerfn()
{
    console.log("I am passed as a parameter");
    let a=10;
    console.log(++a);

})
//greeter(10);
//greeter("fhjfhkj");
//greeter(true);
//greater([1,2,3]);