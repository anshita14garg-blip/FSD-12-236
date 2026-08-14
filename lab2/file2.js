import { readFile , writeFile, appendFile } from "fs/promises";

const readData = async (filename) => {
     try{
     const content = await readFile(filename, "utf-8");
     return content;
     } catch (error) {
         console.log("An error occurred while reading the file:", error);
     }
     finally{
          console.log("File reading operation completed.");
     }
};
const writeData = async (filename , content) => {

     try{
     await writeFile(filename, content);
     } catch (error) {
         console.error("An error occurred while writing the file:", error);
     }
};
const appendData = async (filename , content) => {
   try{
    await appendFile(filename, content);
   } catch (error) {
       console.error("An error occurred while appending to the file:", error);
   }
};
const deletFile = async (filename) => {
    try{
        await unlink(filename);
    } catch (error) {
        console.error("File not found ", error);
    }
};
//if a function uses await keyword then the function must be an async function otherwise it will throw an error. 
const data = await readData ("file2.js");
console.log(data);
