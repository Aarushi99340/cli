let input=process.argv.slice(2);
//console.log(input);
let viewFile=require("./commands/view");
let helpFile=require("./commands/help");
let untreefyFile=require("./commands/untreefy");
let treefyFile=require("./commands/treefy");
let cmd=input[0];
// node tpp.js view src -t
//node tpp.js view src -f
switch(cmd)
{
    case "view":
        viewFile.view(process.argv[3],process.argv[4]);
        break;
    case "treefy":
        treefyFile.treefy(process.argv[3],process.argv[4]);
        
        break;
    case "untreefy":
            untreefyFile.untreefyFn(process.argv[3],process.argv[4]);
        break;
    case "help":
        helpFile.help();
        break;
    default:
        console.log("work command ");
        break;

}