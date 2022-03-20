// entry point of my command line 
let helpFunc = require("./commands/help");
let orgFunc = require("./commands/organise");
let treeFunc = require("./commands/tree")
// console.log(helpFunc.ghoda());
let inputArr = process.argv.slice(2);
// console.log(inputArr);
let command = inputArr[0];
let path = inputArr[1];
switch (command) { //organizee
    case "tree":
        //call tree function
        treeFunc.tree(path)
        // console.log("tree function called and executed succesfully on path " + path);
        break;
    case "organise":
        //call organize function
        orgFunc.organise(path);
        break;
    case "help":
        //call help function
        helpFunc.help();
        break;
    default:
        console.log("command not recognized :/")
        break;
}