var dwarves = ['Doc', 'Dopey', 'Bashful', 'Grumpy']

function dwarfRollCall(dwarves) {
  var string = []
  for(var i=0; i<dwarves.length; i++){
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
    return true}
    else {
      return false}
}

function findTheCheese (foods) {
for(var i =0; i < foods.length; i++) {
if(foods[i] === "cheddar" ){
return foods[i];
  } 
}
if (foods !== "cheddar") {
return "no cheese!";
  } 
}