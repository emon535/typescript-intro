function log(message) {
  console.log(message);
}

var message = "Hello TypeScript";
log(message);

function doSometion() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log("Finally", i);
}

function doSometionwithLet() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log("Finally", i);
}

doSometion();
doSometionwithLet