/* AD-LIB #1:
  "__ITEM__" (SINGULAR NOUN)

  - can be filtered in one or more ways
  - has properties that can be read
  - there are literally millions of instances
    of this thing (like Finnish metal bands)
*/

/* AD-LIB #2:
  "__RESULT__" (SINGULAR / PLURAL NOUN)

  - results from operating on the
    collection of __ITEM__s
  - can be a collection
    (list of names of bands that sing about programming)
  - can be an aggregate
    (markdown table of bands, sorted by date of last single)
*/

const every__ITEM__ =
  synchronouslyGetEvery__ITEM__(); // <- please don't do this, IRL


const __RESULT__ = every__ITEM__
/* TODO:
   build result by chaining maps, filters, reduces

  .filter()
  .map()
  .reduce();
*/


/* Question:
   Assuming there were 10 million __ITEM__s, what is the worst-case
   performance (ie: all items pass all filters) of this solution?
*/


/* Challenge:
   Rewrite the solution to have only 10,000,000 operations,
   if there are 10,000,000 items.
   Use transduction.
*/

const every__ITEM__ =
  synchronouslyGetEvery__ITEM__(); // <- again, please no? For me?


const __RESULT__ = every__ITEM__.reduce(
  // Transduce here
);

/* Hint:
   See digression.js
*/
