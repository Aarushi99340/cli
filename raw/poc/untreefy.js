let fs=require("fs");
let path=require("path");
let uniqid=require("uniqid");
function checkwhetherfile(src)
{
    return fs.lstatSync(src).isFile()
}
function getContent(src)
{
    return fs.readdirSync(src);
}
//let uniqid=require("uniqid");
function untreefy(src,dest,obj)
{
    if(checkwhetherfile(src)==true)
    {
        //console.log(toprint+" *");
        let oldname=path.basename(src);
        let newname=uniqid();
        obj.newname=newname;
        obj.oldname=oldname;
        obj.isFile=true;
        let destpath=path.join(dest,newname);
        fs.copyFileSync(src,destpath);
        console.log(`File ${oldname} from src copied to ${destpath}`);
    }
    else
    {
        //console.log(toprint);
        obj.isFile=false;
        obj.name=path.basename(src);
        obj.children=[];

        let childNames=getContent(src);
        //console.log(childNames);
        for(let i=0;i<childNames.length;i++)
        {
            let childPath=path.join(src,childNames[i]);
            //let tpath=path.join(toprint,childNames[i]);
            let chobj={};
            untreefy(childPath,dest,chobj);
            obj.children.push(chobj);
        }
    }
}

// function viewAsTree(src,indent)
// {
//     if(checkwhetherfile(src)==true)
//     {
//         console.log(indent+path.basename(src)+" *");
//     }
//     else
//     {
//         console.log(indent+path.basename(src));
//         let childNames=getContent(src);
//         //console.log(childNames);
//         for(let i=0;i<childNames.length;i++)
//         {
//             let childPath=path.join(src,childNames[i]);
            
//             viewAsTree(childPath, indent+"__");
//         }
//     }
// }
let src=process.argv[2];
//console.log(src);
//viewAsFlatFiles(src,path.basename(src));
//viewAsTree(src,"");
let dest=process.argv[3];
let root={};
untreefy(src,dest,root);
console.log(root);
