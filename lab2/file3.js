import { stat} from 'fs/promises';
 const fstat = await stat("file1.js");
 console.log("file size" , fstat.size , "bytes") ;
 console.log(`is file : ${fstat.isFile()}`);
 console.log(`is folder : ${fstat.isDirectory()}`);
 console.log(` is syslink : ${fstat.isSymbolicLink()}`);
console.log(`is Created: ${fstat.birthtime}`);
console.log(`is Last Used : ${fstat.atime}`);