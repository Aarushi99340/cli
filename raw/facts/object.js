//key value pair
//user, resource
let obj={
    name:"steve",
    lastname:"roger",
    address:{
        state:"new york",
        city:"ny"
    },
    movies:["civil war","avengers","witer soldiers"],
    age:35,
    isAvenger: true,
    sayHi: function()
    {
        console.log("cap say's hii");
    }

}
//get
console.log(obj);
let val=obj.address;
console.log(val);
obj.sayHi();
//set 
obj.isAvenger=false;
console.log(obj.isAvenger);
obj.friends=["toby","stark","peter"];
console.log(obj);
//delete
delete obj.age;
console.log(obj);
