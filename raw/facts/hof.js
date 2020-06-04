//functional programming-> smaller function compose into larger function
function getFirstName(fullName)
{
    return fullName.split(" ")[0];
}
function getLastName(fullName)
{
    return fullName.split(" ")[1];
}
//function as input
function greeter(fullName,cb)
{
    let message=cb(fullName);
    console.log("Hi "+message);
}
greeter("Jasbir Singh",getFirstName);
greeter("Jasbir Singh",getLastName);