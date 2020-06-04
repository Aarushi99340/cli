let fs=require("fs");
let path=require("path");
function checkwhetherfile(src)
{
    return fs.lstatSync(src).isFile()
}
function getContent(src)
{
    return fs.readdirSync(src);
}
function viewAsFlatFiles(src,toprint)
{
    if(checkwhetherfile(src)==true)
    {
        console.log(toprint+" *");
    }
    else
    {
        console.log(toprint);
        let childNames=getContent(src);
        //console.log(childNames);
        for(let i=0;i<childNames.length;i++)
        {
            let childPath=path.join(src,childNames[i]);
            let tpath=path.join(toprint,childNames[i]);
            viewAsFlatFiles(childPath,tpath);
        }
    }
}

function viewAsTree(src,indent)
{
    if(checkwhetherfile(src)==true)
    {
        console.log(indent+path.basename(src)+" *");
    }
    else
    {
        console.log(indent+path.basename(src));
        let childNames=getContent(src);
        //console.log(childNames);
        for(let i=0;i<childNames.length;i++)
        {
            let childPath=path.join(src,childNames[i]);
            
            viewAsTree(childPath, indent+"__");
        }
    }
}
let src=process.argv[2];
//console.log(src);
//viewAsFlatFiles(src,path.basename(src));
viewAsTree(src,"");
