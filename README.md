# Why is Transducers

A small repo, taking the user on a journey through the whys of Transducers.

This isn't for people who have never heard the term, but rather for people who have been in contact with functional programming principles in JavaScript, have heard of transducers, and are unsure of what that means, or why they are useful.

## Foreknowledge

As a requisite to getting something meaningful from this example codebase, you must be very familiar with the `.map` `.filter` and `.reduce` methods on arrays (or functions over Observables, or (\**gasp*\*) different Monads).  
You also need to be comfortable with the knowledge that as you chain .map and .filter calls, each one results in the creation of a new array, and a full loop over the old array. 3 chained methods = 3 loops and 3 new arrays. There are many reasons to choose `map` and `filter`, but CPU and memory performance aren't in the list.

As a reasonable start, you can begin by looking at [digression.js](./digression.js), followd by [transducer.js](./transducer.js), and lastly, [the-problem.js](./the-problem.js). There is a little bit of implementation homework involved, when going through "The Problem". Being able to implement said homework is predicated on the understanding of transducers as laid out in the other files.
