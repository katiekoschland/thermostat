$(document).ready(function(){
  var thermostat = new Thermostat();

  $('h1').text("THERMOSTAT");
  $("#currentTemp").text(thermostat.currentTemperature);

  $("#up").on("click", function() {
    thermostat.up();
    $("#currentTemp").text(thermostat.currentTemperature);
  })

});
