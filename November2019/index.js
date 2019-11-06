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


