let fs=require("fs");
let path=require("path");
let utility=require("./utility");


function checkwhetherfile(src)
{
    return fs.lstatSync(src).isFile()
}
function getContent(src)
{
    return fs.readdirSync(src);
}
function getExtension(src)
{
    let ext=src.split(".").pop();
    return ext;

}
function sendFile(dest,category,src)
{
    let categoryPath=path.join(dest,category);
    if(fs.existsSync(categoryPath)==false)
    {
        fs.mkdirSync(categoryPath);
    }
    let fname=path.basename(src);
    let cpath=path.join(categoryPath,fname);
    fs.copyFileSync(src,cpath);
}
function getCategory(ext)
{
    let types=utility.types;
    for(let category in types)
    {
        for(let i=0;i<types[category].length;i++)
        {
            if(ext==types[category][i])
            {
                return category;
            }
        }

    }
    return "others";
}
function organiser(src,dest)
{
    if(checkwhetherfile(src)==true)
    {
        //console.log(toprint+" *");
       let ext=getExtension(src);
       let category=getCategory(ext);
       if(category==null)
       {
           category="others";
       }
       sendFile(dest,category,src);
       
    }
    else
    {
        //console.log(toprint);
       

        let childNames=getContent(src);
        //console.log(childNames);
        for(let i=0;i<childNames.length;i++)
        {
            if(childNames[i]=="organised_files")
            {
                continue;
            }
            let childPath=path.join(src,childNames[i]);
            //let tpath=path.join(toprint,childNames[i]);
            
            organiser(childPath,dest);
            
        }
    }
}
let src=process.argv[2];
let dest=path.join(src,"organised_files");
if(fs.existsSync(dest)==false)
{
    fs.mkdirSync(dest);
}
organiser(src,dest);
