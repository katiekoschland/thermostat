function Thermostat(){
  this.currentTemperature = 20;
};

Thermostat.prototype.up = function() {
  this.currentTemperature ++;
};

Thermostat.prototype.down = function() {
  this.currentTemperature --;
};
