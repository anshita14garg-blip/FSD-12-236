# EventLoop 
JS is Synchronous and single threaded by default

## There can be async behaviour
- with BrowserApi -
 setTimeout , setInterval , 
 setIntermediate, nextTrick.
 - with promises
 - with event handlers
 ## Promise 
   A function not executed immediately but it must be executed after a while. it has some status during the execution. At final it may resolve() => successful or reject() => not successful. 
 ## Call Back function 
  that pass an argument or the parameter to another function.
  ### Modern javascript is divided into 2 categories.
  1. CommonJS (.cjs) -> support OOPS -> require(written in this kind)
   - priority (nextTick , Promise, setImmediate/setTimeout)
  2. ModuleJS (.mjs) -> follow modular approach -> import(written in this kind)
   - priority (Promise , nextTick , setImmediate/setTimeout)
 