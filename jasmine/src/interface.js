$(document).ready(function(){
  var thermostat = new Thermostat();

  $('h1').text("THERMOSTAT");
  $("#currentTemp").text(thermostat.currentTemperature);
  $("#powerSavingMode").text(thermostat.powerSavingMode);
  $("#energyUsage").text(thermostat.checkEnergyUsage());

  $("#up").on("click", function() {
    thermostat.up();
    $("#currentTemp").text(thermostat.currentTemperature);
    $("#energyUsage").text(thermostat.checkEnergyUsage());
  })

  $("#down").on("click", function() {
    thermostat.down();
    $("#currentTemp").text(thermostat.currentTemperature);
    $("#energyUsage").text(thermostat.checkEnergyUsage());
  })

  $("#reset").on("click", function() {
    thermostat.reset();
    $("#currentTemp").text(thermostat.currentTemperature);
  })

  $("#psON").on("click", function() {
    thermostat.powerSavingOn();
    $("#powerSavingMode").text(thermostat.powerSavingMode);
  })

  $("#psOFF").on("click", function() {
    thermostat.powerSavingOff();
    $("#powerSavingMode").text(thermostat.powerSavingMode);
  })
});
