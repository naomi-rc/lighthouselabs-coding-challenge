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

