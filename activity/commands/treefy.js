let fs=require("fs");
let path=require("path");
module.exports.treefy=function()
{
    let src=arguments[0];
    let dest=arguments[1];
    let buffer=fs.readFileSync(path.join(src,"metadata.json"));
    let cElem=JSON.parse(buffer);
    //console.log("treefy is being implemented ");
    treefyFun(src,dest,cElem);
}
function treefyFun(src,dest,cElem)
{
    if(cElem.isFile==true)
    {
        let srcpath=path.join(src,cElem.newname);
        let destpath=path.join(dest,cElem.oldname);
        fs.copyFileSync(srcpath,destpath);
        console.log(`${cElem.oldname} copied to destination`);

    }
    else
    {
        let dirName=cElem.name;
        let dirPath=path.join(dest,dirName);
        fs.mkdirSync(dirPath);
        console.log(`Direcroty ${cElem.name} created inside ${dest}`);
        for(let i=0;i<cElem.children.length;i++)
        {
            treefyFun(src,dirPath,cElem.children[i]);
        }



    }
}