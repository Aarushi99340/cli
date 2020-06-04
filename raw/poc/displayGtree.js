let root={
    data:"d10",
    children:[{
        data:"d20",
        children:[{
            data:"d50",
            children:[]
        
    },{
        data:"d60",
        children:[]
    }]
},{
        data:"d30",
        children:[]
    },{
        data:"d40",
        children:[{
            data: "d80",
        children:[]
        }]

    }]
}

function displayGtree(node)
{
    let mnmyfamily=node.data +"=>";
    for(let i=0;i<node.children.length;i++)
    {
        let child=node.children[i];
        mnmyfamily+=child.data +","
    }
    console.log(mnmyfamily);
     for(let i=0;i<node.children.length;i++)
     {
        let child=node.children[i];
       displayGtree(child);

     }
}
displayGtree(root);