import { writeFile, appendFile, readFile } from "fs/promises";
await writeFile("hello.txt", "My Life My Rules");
await appendFile("hello.txt", "\nFS is much easy than others");
await appendFile("hello.txt", "\nAnshita Garg 💕 ");
const content = await readFile("hello.txt", "utf-8");
console.log(content);