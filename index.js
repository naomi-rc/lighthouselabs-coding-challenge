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
    if(availableModules[i].name == name) {
      return i;
    }
  }
}

function loadModules(index){
  availableModules[index].enabled = true;
  ship.modules.push(availableModules[index]);
}

function resetLARRY(){
  for(var i = 0; i < 10; i++){
    LARRY.quack();
  }
}

loadModule(findModuleIndex("life-support"));
loadModule(findModuleIndex("propulsion"));
loadModule(findModuleIndex("navigation"));
loadModule(findModuleIndex("communication"));

resetLARRY();

function setMessage() {
  radio.message = JSON.stringify(navigation);
}

setMessage();

function activateBeacon(){
  radio.beacon = true;
}

activateBeacon();

function setFrequency(){
  radio.frequency = (radio.range.low + radio.range.high)/2;
  
}

function initialize(){
  navigation.x = 0;
  navigation.y = 0;
  navigation.z = 0;
}

function calibrateX(){
  for(var i = 0; i < 12; i++){
    var signal = checkSignal();
    if(signal){
      navigation.x = signal;
      break;
    }
  }
}

function calibrateY(){
  for(var i = 0; i < 60; i++){
    var signal = checkSignal();
    if(signal){
      navigation.y = signal;
      break;
    }
  }
}

function calibrateZ(){
  for(var i = 0; i < 60; i++){
    var signal = checkSignal();
    if(signal){
      navigation.z = signal;
      break;
    }
  }
}

function calibrate(){
  calibrateX();
  calibrateY();
  calibrateZ();
}

function setSpeed(speed){
  var speedInt = parseInt(speed);
  if(speedInt >= 0){
    navigation.speed = parseInt(speed);
  }
}

function activateAntenna(){
  ship.antenna.active = true;
}

activateAntenna();