// Once you've created your package.json, we can start writing our code for our search engine!

// ================================================================

// Create a constructor function named "Google" (ideally, we would want to create a Class, but let's stick to ES5 Javascript for now). 

var Google = function(){

// In our constructor, let's create a basic search function named "search" (this.search) that takes in two arguments, an array and a variable.


        // In the function, create a results object with two keys: positions (an empty array), and count (a number starting at 0).


        // Search (hint: iterate) through the array and find all the instances of the variable. 


            // When you find the variable in the array, update the results object; push the current index to our "positions" array, and increment the "count" by one.


        // The function should return our results object.

}


// Export your Google constructor


// BONUSES: 

// 1. Create a second function called "searchOnline" (this.searchOnline) which takes in a string as a search query and opens a browser search for that query. Remember, we are running in nodejs.

// 2. In your results object, add a key for "time" that RETURNS the time it took, in ms, for your search execution to run. This may be hard to find.


// Tests (uncomment these individually to test):

// var google = new Google;

// console.log(google.search([1, 2, 3, 4, 5, 6, 2, 9, 10, 11, 2], 2));

// console.log(google.search(["captain america", "thor", "black widow", "captain america", "captain america", "iron man", "quicksilver", "spiderman", "starlord", "captain america", "ant man", "dr. strange", "thanos", "captain marvel", "gamora", "hulk", "nebula", "hawkeye", "vision", "scarlet witch"], "captain america"));

// google.searchOnline("James Harden Beard");