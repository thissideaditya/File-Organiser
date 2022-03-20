const fs = require("fs")
const path = require("path")

function treefn(dirPath){
    if(dirPath == undefined){
        console.log("Please Enter Valid Path")
        return
    }
    let doesExist = fs.existsSync(dirPath)
    if(doesExist == true){
        treeHelper(dirPath, " ")
    }
}

function treeHelper(targetPath, indent){
    let isFile = fs.lstatSync(targetPath).isFile()

    if(isFile == true){
        let fileName = path.basename(targetPath)
        console.log(indent + "|---" + fileName)
        return
    }

    let dirName = path.basename(targetPath)
    console.log(indent + "|___" + dirName)

    let children = fs.readdirSync(targetPath)

    for(let i = 0; i < children.length; i++){
        let childPath = path.join(targetPath, children[i])
        treeHelper(childPath, indent + "\t")
    }

}

module.exports = {
    tree: treefn
}