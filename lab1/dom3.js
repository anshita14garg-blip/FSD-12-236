// to track who clicked the button
 import { EventEmitter } from "events";

 const button = new EventEmitter();
 button.on("click", (uname) => {
    console.log(`Button clicked by ${uname}`);
    });

    button.emit("click", "Anshita.");
    button.emit("click", "Gauri.");
    button.emit("click", "Anit.");
    button.emit("click", "Sammy.");
    button.emit("click");