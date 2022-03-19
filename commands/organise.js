const fs = require("fs"); //fs module
const extname = require("path");
const path = require("path"); //path module
let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    images: ['png','jpg','jpeg']
}

function organise(srcPath) {
  //1. to check if srcPath is present
  if (srcPath == undefined) {
    //The process.cwd() method returns the current working directory of the Node.js process.
    //console.log(srcPath); //undefined
    srcPath = process.cwd();
    // console.log("source path is ",srcPath);
  }

  //2. to create a directory-> organized_files
  let organisedFiles = srcPath + "/" + "organised_files"
  console.log("organised files folder path is ", organisedFiles);
  if (fs.existsSync(organisedFiles) == false) {
    //organizedfiles naam ka folder exist nhi krta to ek folder bana do warna rhne do
    fs.mkdirSync(organisedFiles);
  } else console.log("folder already exists")
  
  //3. scan the entire srcPath

  // Reads the contents of the directory -> basically reads the names of the files present in the directory
  let allFiles = fs.readdirSync(srcPath)
 // console.log(allFiles)

  //4. traverese over all the files and classify them on the basis of their extension.

  for(let i = 0; i < allFiles.length; i++){
    //   let ext = allFiles[i].split(".")[1]

  let fullPathOfFile = path.join(srcPath, allFiles[i])
  // lstatSync gives info about the link provided
  let isFile = fs.lstatSync(fullPathOfFile).isFile()
  if(isFile){
      // get ext name
    let ext = path.extname(allFiles[i]).split(".")[1] // gives extenison name
     // console.log(ext)
     // get floder name from extension
    let folderName = getFolderName(ext)
     // copy from src folder to dest folder
    copyFileToDest(srcPath, fullPathOfFile, folderName)
    }
  }
}

function getFolderName(ext){

  for(let key in types){
    for(let i = 0; i < types[key].length; i++){
      if(types[key] == ext){
        return key
      }
    }
  }
}

function copyFileToDest(srcPath, fullPathOfFile, folderName){

  let destFolderPath = path.join(srcPath, "organised_files", folderName)
  if(!fs.existsSync(destFolderPath)){
    fs.mkdirSync(destFolderPath)
  }

  let fileName = path.basename(fullPathOfFile)
  let destFileName = path.join(destFolderPath, fileName)
  fs.copyFileSync(fullPathOfFile, destFileName)

}

let srcPath = "/Users/adityachaurasia/Desktop/Code/Web D/Learning/Node/fileOrganiser/downloads"
organise(srcPath)