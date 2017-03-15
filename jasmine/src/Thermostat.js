function Thermostat(){
  this.minimumTemperature = MINIMUM_TEMPERATURE;
  this.currentTemperature = 20;
  this.powerSavingMode = true;
  this.maximumTemperature = this._determineMaxTemperature();
};

const MINIMUM_TEMPERATURE = 10;

Thermostat.prototype.up = function() {
  this.currentTemperature ++;
};

Thermostat.prototype.down = function() {
  this.currentTemperature --;
};

Thermostat.prototype.powerSavingOff = function() {
  this.powerSavingMode = false;
  this._determineMaxTemperature();
};

Thermostat.prototype._determineMaxTemperature = function() {
  if (this.powerSavingMode === true){
    return this.maximumTemperature = 25;
  } else {
    return this.maximumTemperature = 32;
  };

};
