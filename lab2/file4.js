import { mkdir , rm} from 'fs/promises';
// create recursive directory 
//await mkdir("uploads/resume", {recursive:true}); // incase of recursive true keep the spelling in mind.
 // create a single directory
 //await mkdir("uploads/images");

 // remove directory
await rm("uploads", {recursive:true}); 