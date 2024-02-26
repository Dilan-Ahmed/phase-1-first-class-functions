function receivesAFunction(callbackF) {
  callbackF();
}

function callbackFunction() {
  console.log(`Hello World! I'am a callback Function being called!`);
}

console.log(receivesAFunction(callbackFunction));

function returnsANamedFunction() {
  function namedFunction() {
    console.log(
      `Hi! I am the namde function being called! without taking any arguments.`
    );
  }
  return namedFunction;
}
console.log(returnsANamedFunction());

function returnsAnAnonymousFunction() {
  return function () {
    console.log(`I am Nobody!:D`);
  };
}

let nobody = returnsAnAnonymousFunction();

console.log(nobody);
nobody();
