var animals;
animals = ["dog", "cat", "rabbit", "deer", "wolf"];

// initial array
console.log("Before: ", animals);

// array length
console.log("You had", animals.length, "animals.");

// listed array
animals.reverse();

// remove 1st value
animals.shift()

// add comma-separated list of values in the front
animals.unshift("cow", "boar")

//remove last value
animals.pop();

// add comma-separated list of values to the end
animals.push("goat", "weasel")

// find position and remove n vlaues
animals.splice(1, 2);

// final array
console.log("Now:", animals)
console.log("You have", animals.length, "animals.");

// create a copy of an array
var newAnimals = animals.slice(1,4);
console.log("New animals", newAnimals);
console.log("You have", animals.length,"animals.");

// return the 1st element that matches the search parameter
var result = animals.indexOf("cat", 0); // search word, index # from where to start the search
console.log("The search result is:", animals[result]);

// return the items in an array as a comma separated string
var arrayString = animals.join(", a "); // separator
console.log("You have a", arrayString);