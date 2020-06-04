
module.exports.myfn= function myfn()
{
    console.log(" I am function exported from libmodule");
}

module.exports.another= function anotherfn()
{
    console.log(" I am another function exported from libmodule");
}

function private()
{
    console.log("I am a private function. Don't export me !");
}
// bshdfdjhdj  this will throw an error as undefined. so to prevent that wwe first write the below line, it will be run in user.js only when the libmodule will compile. if there will be any error this compile line won't be printed
console.log("i am lib module and i was compiled first then my data was exported");