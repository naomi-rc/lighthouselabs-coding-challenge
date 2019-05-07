function powerOn(){
  ship.powerOn = true;
}

function countModules(){
  return availableModules.length;
}

function countEssential(){
  var count = 0;
  for(var i in availableModules){
    if(availableModules[i].essential == true){
      count++;
    }
  }
  return count;
}

for(var i in availableModules){
    if(availableModules[i].name == "life-support"){
      loadModules(i);
    }
}

function loadModules(index){
  availableModules[index].enabled = true;
  ship.modules.push(availableModules[index]);
}