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

function findModuleIndex(name) {
  for (var i = 0; i < availableModules.length; i++) {
    if(availableModules[i].name == name && availableModules[i].essential) {
      return i;
    }
  }
}

function loadModules(index){
  availableModules[index].enabled = true;
  ship.modules.push(availableModules[index]);
}

loadModule(findModuleIndex("life-support"));
loadModule(findModuleIndex("propulsion"));