/*
Implement a function `uniq` which takes as input a sequence and returns a sequence in which all duplicate elements following each other have been reduced to one instance.

Example:
* ['a','a','b','b','c','a','b','c'] --> ['a','b','c','a','b','c']

Don't mutate the parameter.

Bonus : do not use a loop

*/

// TODO add your code here
const uniq = (array) => {
  return array.map((el, i) => {
    // pour chaque tour de boocle je dois
    // test el avec tout les elements du array

    for (let j = 0; j < array.length; j++) {
      if (el === array[j]) {
        array.splice(i, i);
      }
    }
  });
};

module.exports = uniq;
