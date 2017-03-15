describe("Thermostat", function(){
  var thermostat = new Thermostat();

  it('starts at 20 degrees', function(){
    expect(thermostat.currentTemperature).toEqual(20);
  });

  describe("Temperature change", function() {
    beforeEach(function() {
      thermostat.currentTemperature = 20;
    });

    describe("Up", function() {
      it("increments the current temperature by 1", function() {
        thermostat.up();
        expect(thermostat.currentTemperature).toEqual(21);
      });
    });

    describe("Down", function() {
      it("decreases the current temperature by 1", function() {
        thermostat.down();
        expect(thermostat.currentTemperature).toEqual(19);
      });
    });
  });
});
