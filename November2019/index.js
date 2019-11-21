//Challenge #1
const doorToDoor = (volunteers, neighbourhoods) => {
    return neighbourhoods.length/volunteers.length;
}

//Challenge #2
const interviewAnswer = (topic) => {
  var response = "";
  switch(topic){
    case "arts funding": response = "We'll have to get creative!"; break;
    case "economy": response = "Time is money."; break;
    case "transportation": response = "It's going to be a long road, so we better get moving."; break;
    default: response = "QUACK";
  }
  return response;
}

//Challenge #3
const castVote = (name, votes) => {
  var candidate = 0;
  switch(name){
    case "Tim": candidate = 0; break;
    case "Sally": candidate = 1; break;
    case "Beth": candidate = 2; break;
  }
  
  votes[candidate]++;
  return votes;
}

//Challenge #4
const registerToVote = (name, unregisteredVoters) => {
  var registeredVoters = [];
  for(var i = 0; i < unregisteredVoters.length; i++){
    if(unregisteredVoters[i] != name){
      registeredVoters.push(unregisteredVoters[i]);
    }
  }
  return registeredVoters;
}

//Challenge #5
const chooseStations = (stations) => {
  var acceptableCapacity = 20;
  var acceptableStations = [];
  
  
  var name = 0;
  var capacity = 1;
  var type = 2;
  for(var i in stations){
    if(stations[i][capacity] >= acceptableCapacity){
      if(stations[i][type] == "school" || stations[i][type] == "community centre"){
        acceptableStations.push(stations[i][name]);
      }
    }
  }
  return acceptableStations;
}

//Challenge #6
const voterTurnout = (voter_signatures, voter_ids) => {
  var turnout = "All clear, we can count the votes!";
  if(voter_signatures.length == voter_ids.length){
    for(var voter in voter_ids){
      if(voter_ids[voter] != voter_signatures[voter]){
        turnout = "FRAUD!";
      }
    }
  }
  else{
    turnout = false;
  }
  return turnout;
}

//Challenge #7
const termTopics = (interviews) => {
  var topics = [0, 0, 0];
  for(var i = 0; i < interviews.length; i++){
    switch(interviews[i]){
      case "smart city": topics[0]++; break;
      case "arts funding": topics[1]++; break;
      case "transportation": topics[2]++; break;
    }
    
  }
  return topics;
}

//Challenge #8
const smartGarbage = (trash, bins) => {
    bins[trash]++;
    return bins;
}

//Challenge #9
const carPassing = (cars, speed) => {
  cars.push({"time": Date.now(), "speed": speed});
  return cars;
}

//Challenge #10
const whereCanIPark = (spots, vehicle) => {
  for(var y = 0; y < spots.length; y++){
    for(var x = 0; x < spots[y].length; x++){
      if(canPark(spots[y][x], vehicle)){
        return [x, y];
      }
    }
  }
  return false;
}

const canPark = (spot, vehicle) => {
  var canPark = false;
  switch(vehicle){
    case "regular": 
      if(spot == "R"){
        canPark = true;
      }
    break;
    
    case "small": 
      if(spot == "R" || spot == "S"){
        canPark = true;
      } 
    break;
    
    case "motorcycle": 
      if(spot == "R" || spot == "S" || spot == "M"){
        canPark = true;
      } 
    break;
  }
  return canPark;
}

//Challenge #11
const busTimes = buses => {
  var arrivals = {};
  
  for(var bus in buses){
    arrivals[bus] = buses[bus]["distance"]/buses[bus]["speed"];
  }
  
  return arrivals;
}

//Challenge #12
const checkAir = function (samples, threshold) {
  var total = samples.length;
  var dirty = 0;
  
  for(var sample in samples){
    if(samples[sample] == "dirty"){
      dirty++;
    }
  }
  return ((dirty/total) > threshold)? "Polluted" : "Clean";
}

//Challenge #13
const toggle = function (lights, status){
  for(var light in lights){
    lights[light]["on"] = status;
  }
  return lights;
}

const lightsOn = function(lights) {
  return toggle(lights, true);
}

const lightsOff = function(lights) {
  return toggle(lights, false);
}

const toggleLights = function(lights, lightsAreOn) {
  if(lightsAreOn){
    lights = lightsOff(lights);
  } 
  else{
    lights = lightsOn(lights);
  }
  return lights;
}

//Challenge #14
const dynamicPricing = (numberOfPeople, distanceTraveled) => {
  var price = 1 + (0.25 * distanceTraveled);
  price += (numberOfPeople >= 30)? 0.25 : 0;
  return "$" + price.toFixed(2);
}

//Challenge #15
const finalPosition = (moves) => {
  var position = [0,0];
  var x = 0;
  var y = 1;
  for(var i in moves){
    switch(moves[i]){
      case "north": position[y]++; break;
      case "east": position[x]++; break;
      case "south": position[y]--; break;
      case "west": position[x]--; break;
    }
  }
  return position;
}

//Challenge #16
const festivalColours = color1 => {
  var splitComplimentary = [];
  
  var h1 = Math.abs((color1 + 150));
  var h2 = Math.abs((color1 + 210));
  splitComplimentary[0] = Math.min(h1, h2);
  splitComplimentary[1] = Math.max(h1, h2);
  return splitComplimentary;
}

//Challenge #17
const judgeVegetable = (vegetables, metric) => {
  var highest = vegetables[0];
  for(var i in vegetables){
    if(vegetables[i][metric] > highest[metric]){
      highest = vegetables[i];
    }
  }
  return highest.submitter;
}

//Challenge #18
const countTickets = (tickets) => {
  var numOfTickets = {"red":0, "green":0, "blue":0};
  for(var i in tickets){
    numOfTickets[tickets[i]]++;
  }
  
  return numOfTickets;
}

const bestOdds = (tickets, raffleEntries) => {
  var numOfTickets = countTickets(tickets);
  var bestOdd = "red";
  
  if(numOfTickets[bestOdd] < numOfTickets["blue"]){
    bestOdd = "blue";
  }
  if(numOfTickets[bestOdd] < numOfTickets["green"]){
    bestOdd = "green";
  }
 
  return  `You have the best odds of winning the `  + bestOdd +  ` raffle.`
}

//Challenge #19
const pumpkinSpice = money => {
  var purchases = [0,0,0,0];
  var costs = [5, 3, 1];
  var spice = [30, 15, 3];
  var moneyLeft = money;
  
  for(var i in costs){
    purchases[i] = Math.floor(moneyLeft / costs[i]);
    moneyLeft = moneyLeft - (purchases[i] * costs[i]);
    purchases[3] += spice[i] * purchases[i];
  }
  
  return purchases;
}

//Challenge #20
const PI = 3.14159 

const sphereVolume = function (radius) {
  return (4 * PI * Math.pow(radius, 3))/3;
}

const coneVolume = function (radius, height) {
  return (PI * Math.pow(radius, 2) * height)/3;
}

const prismVolume = function (height, width, depth) {
  return height * width * depth;
}

const totalVolume = function (solids) {
  var volume = 0;
  for(var i in solids){
    switch(solids[i].type){
      case "sphere": volume += sphereVolume(solids[i].radius); break;
      case "cone": volume += coneVolume(solids[i].radius, solids[i].height); break;
      case "prism": volume += prismVolume(solids[i].height, solids[i].width, solids[i].depth); break;
    }
  }
  return volume;
}
