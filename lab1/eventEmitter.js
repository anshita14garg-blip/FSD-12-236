import {EventEmitter} from 'node:events'; 


const login = (name) => {
    console.log(` ${name}  has loggd in ` );
};

const start = () => {
    console.log(" System has started.");
};

const working = (name ) => {
    console.log(` ${name} add items to cart  .`);
};

const checkout = (name) => {
    console.log(` ${name} has checked out.`);
};



const task = new EventEmitter();
task.once("Exit", () => {
  console.log(` System shutting down.`);
});

task.once("Greeting", start);
task.on("Greeting", login);
task.on("Greeting", working);
task.on("Greeting", checkout);


task.emit("Greeting", "Anshita Garg");
task.emit("Greeting", "Gauri Sharma");
task.off("Greeting", working);
task.emit("Greeting", "Rohit Sharma");
task.emit("Exit");



