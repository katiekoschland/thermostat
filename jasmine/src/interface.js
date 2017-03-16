$(document).ready(function(){
  var thermostat = new Thermostat();
    updateTemperature()

  $('h1').text("THERMOSTAT");
  $("#powerSavingMode").text(thermostat.powerSavingMode);
  $("#energyUsage").text(thermostat.checkEnergyUsage());

  $("#up").on("click", function() {
    thermostat.up();
    updateTemperature()
    $("#currentTemp").text(thermostat.currentTemperature);
    $("#energyUsage").text(thermostat.checkEnergyUsage());
  })

  $("#down").on("click", function() {
    thermostat.down();
    updateTemperature()
    $("#currentTemp").text(thermostat.currentTemperature);
    $("#energyUsage").text(thermostat.checkEnergyUsage());
  })

  $("#reset").on("click", function() {
    thermostat.reset();
    updateTemperature()
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

  function updateTemperature() {
    $("#currentTemp").text(thermostat.currentTemperature);
    $("#currentTemp").attr('class', thermostat.checkEnergyUsage());
  }

    $.get("http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=948bcac04c4c2646c9fcd6f1d5d4b4d0&units=metric",
        function(data) {
          $("#outside-temp").text(data.main.temp);
        })



});
