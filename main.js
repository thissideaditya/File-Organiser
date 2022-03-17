// entry point of command line

let helpFunc = require("../fileOrganiser/commands/help")

let inputArr = process.argv.slice(2)
let command = inputArr[0]
let path = inputArr[1]
switch(command){
    case "tree":
        //call tree function
        break
    case "organise":
    //call organise function
        break
    case "help":
        //call help function
        helpFunc.help()
        break
    default:
        console.log("command not recognised :/")
        break
}