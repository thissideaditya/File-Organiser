const fs = require("fs"); //fs module
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
  let organisedFiles = srcPath + "/" + "organized_files"
  console.log("organized files folder path is ", organisedFiles);
  if (fs.existsSync(organisedFiles) == false) {
    //organizedfiles naam ka folder exist nhi krta to ek folder bana do warna rhne do
    fs.mkdirSync(organisedFiles);
  } else console.log("folder already exists")
  
  //3. scan the entire srcPath

  // Reads the contents of the directory -> basically reads the names of the files present in the directory
  let allFiles = fs.readdirSync(srcPath)
  console.log(allFiles)

  //4. traverese over all the files and classify them on the basis of their extension.

  for(let i = 0; i < allFiles.length; i++){
    //   let ext = allFiles[i].split(".")[1]
      let ext = path.extname(allFiles[i]) // gives extenison name
      console.log(ext)
  }


}

let srcPath = "/Users/adityachaurasia/Desktop/Code/Web D/Learning/Node/fileOrganiser/downloads"
organise(srcPath)