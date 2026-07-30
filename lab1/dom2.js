import {EventEmitter} from"events"; // importing EventEmitter class from events module

 const button = new EventEmitter();

 button.on("click", () => {      // function called
   console.log("Task1");
 });

 button.on("click", () => {    
    console.log("Task2");   // clicking same button will call all the functions attached to it.
 });    

 button.emit("click"); 