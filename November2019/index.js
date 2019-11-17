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

