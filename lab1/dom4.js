import {EventEmitter} from "events"; 

const form = new EventEmitter();
form.on("submit", (username,password) => {        // form is created and submit event is attached to it.
    console.log("Form submitted!!😉");    // to add emoji's ( windows + .)
    console.log(`username: ${username}`);
    console.log(`password: ${password}`);
}); 
form.emit("submit" , "anshita" , "122255345");
