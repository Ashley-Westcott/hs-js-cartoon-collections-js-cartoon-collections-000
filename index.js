/* 

1. It should then return a string with the numbered dwarves. The string should look like this: "1. Doc 2. Dopey 3. Bashful 4. Grumpy "
2. It should then convert each element to uppercase and add an exclamation point at the end. The return value of this method should be an array, in this example: ["EARTH!", "WIND!", "FIRE!", "WATER!", "HEART!"]
3. The longPlaneteerCalls method should accept an array of calls. The function should tell us if any of the calls are longer than four characters. 
4. The "findTheCheese" function should accept an array of strings. It should then look through these strings and return the first string that is a type of cheese. The types of cheese that appear are cheddar, gouda, and camembert.

*/

var dwarves = ['Doc', 'Dopey', 'Bashful', 'Grumpy']

function dwarfRollCall(dwarves) {
  var string = []
  for(var i=parseInt(dwarves.length/2); i<dwarves.length; i++){
    string.push((i+1) + ". " + dwarves[i] +" ")
  }
  return string.join("")
}

var planeteerCalls = ["earth", "wind", "fire", "water", "heart"]

function summonCaptainPlanet(planeteerCalls){
  var array = []
  for(var i=0; i<planeteerCalls.length; i++){
    array.push(planeteerCalls[i].toUpperCase() + "!")
  }
  return array
}

function longPlaneteerCalls(words) {
  for (var i=0; i<words.length; i++)
  if (words[i].length>4){
    return true
    } else {
    return false
  }
}

function findTheCheese (foods) {
for(var i =0; i < foods.length; i++) {
if(foods[i] === "cheddar" || foods[i] === "bleu" ){
return foods[i];
  } 
}
return "no cheese!";
}

function wordsWithB (words){
  var newArray = []
  for (var i = 0; i<words.length; i++){
   if(words[i].startsWith("b")) {
  newArray.push(words[i])}
  }
  return newArray
}