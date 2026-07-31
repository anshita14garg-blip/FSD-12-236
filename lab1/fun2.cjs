
const f1 = () => {
  console.log("f1");
};
const f2 = () => {
  console.log("f2");
};
const f3 = () => {
  console.log("f3");
};

function main() {
  console.log("main😒");
  setTimeout(f1, 0);
  //setTimeout(f1, 1000);    // 0s baad run hoga f1 , phele main , f2 , f3 , end thn woh hoga.
  setImmediate(f2);
  process.nextTick(f3); // more priority than f2 and f3
  console.log("end🛩️");
}  
main();
