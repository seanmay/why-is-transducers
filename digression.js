/*
  .map is great, because we can
  chain tiny operations together to describe
  a complex transformation on a collection,
  using only tiny blocks
*/

const increment = x => x + 1;
const triple = x => x * 3;
const halve = x => x / 2;

[1, 2, 3]
  .map(increment)
  .map(triple)
  .map(halve); // [3, 4.5, 6]

/*
  if given 1,000,000 numbers, the above example
  would run 3,000,000 operations.

  Luckily, we can `compose` all of the `map` operations together,
  into 1 map.
*/

// this isn't important; it's here for completion
const compose = (...functions) =>
  functions.reduce((thenRunThis, runThis) => (input) =>
    thenRunThis(runThis(input)), (x) => x);

[1, 2, 3].map(x => halve(triple(increment(x))));
// OR
[1, 2, 3].map(compose(halve, triple, increment));


/* ASIDE:
  While we don't often think about it in the same way,
  we can compose `.filter` using AND, and we can compose
  sub-sorting over OR; technically `compose` is composing over
  `apply`ing functions to a value, in order
*/

/* Transducing is `compose`, but for reducers.
   It's a way of chaining reducers together,
   to operate one after another, inside of one reduce method.
   But we CAN'T compose `.reduce` the same way.
   Reduce takes 2 arguments (that we care about)
   and returns 1 value;
   we can't give reduce 2 values based on 1 value.
   So let's try from another angle.
*/


/* Challenge:
   instead of using `.map`, rewrite the following using `.reduce`
*/

[1, 2, 3].map(increment); // [2, 3, 4]

[1, 2, 3].reduce(/* ... */); // [2, 3, 4]


/* Hint:
   see transducer.js
*/
