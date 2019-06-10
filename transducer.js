/*
  There are two parts to a reducer:
  - the thing you are doing to one item
  - how you integrate that item into the new output
*/

const curriedMap = (transform) => (array) =>
  array.reduce((newArray, item) => {
    const value = transform(item); // step 1
    const output = newArray.concat(value); // step 2
    return output;
  }, []);

curriedMap(x => x + 1)([1, 2, 3]); // [2, 3, 4]

/*
  Let's move step #2 out into a HoF
  and see what happens
*/

const increment = (catenate) => (collection, number) => {
  const value = item + 1;
  const output = catenate(collection, number);
  return output;
};

const concatIntoArray = (arr, item) => arr.concat(item);

[1, 2, 3].reduce(increment(pushIntoArray), []);

/* Note that `concatIntoArray` is also built like a reduce function.
   We don't have to use a concat into an array, though...
   We could join onto a string, or add onto a number, or even || or &&.
*/

[1, 2, 3].reduce(increment((string, x) => string + x), ""); // "234"
[1, 2, 3].reduce(increment((sum, x) => sum + x), 0); // 9
[1, 2, 3].reduce(increment((test, x) => Boolean(test && x)), true); // true

/*
  increment is performing step #1, and then calling something else to do step #2.
  whatever it calls is *also* a reducer.
  So what if we gave it another higher order reducer function?
*/

const triple = (catenate) => (collection, x) =>
  catenate(collection, x * 3);

const halve = () => () => {}; // <- TODO: implement halve

[1, 2, 3].reduce(increment(triple(concatIntoArray)), []); // [6, 9, 12]
[1, 2, 3].reduce(increment(triple((a, b) => a - b)), 0); // -27

/*
 increment runs step #1 and calls step #2, which is triple...
 triple runs step #1 and calls step #2, which is some catenation to make the output
*/

/*
  We're using transduction!
  But on top of that, there are special cases, right?
  Writing that form for every function you would normally pass to map would be miserable.
  So let's make a special transducer map and filter
*/

const map = (transform) => (catenate) => (collection, item) =>
  catenate(collection, transform(item));

const filter = (predicate) => (catenate) => (collection, item) =>
  {}; // <- TODO: implement filter


const add3 = map(x => x + 2);
const keepEvens = filter(x => !(x % 0));
const sum = (a, b) => a + b;

[1, 2, 3].reduce(add3(keepEvens(concatIntoArray)), []); // [4, 6]
[1, 2, 3].reduce(keepEvens(add3(concatIntoArray)), []); // [5]

// Go forth and solve the original problem!
