describe("Thermostat", function(){
  var thermostat = new Thermostat();

  it('starts at 20 degrees', function(){
    expect(thermostat.currentTemperature).toEqual(20);
  });

  it('has a minimum temperature of 10', function(){
    expect(thermostat.minimumTemperature).toEqual(10);
  });

  it('is on power saving mode as default setting', function(){
    expect(thermostat.powerSavingMode).toBe(true);
  });

  it('power saving is on by default', function(){
    expect(thermostat.maximumTemperature).toEqual(25);
  });

  describe("Using the thermostat", function() {
    beforeEach(function() {
      thermostat.currentTemperature = 20;
      thermostat.powerSavingOn();
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

    describe("Reset", function() {
      it("resets the temperature to 20", function() {
        thermostat.up();
        thermostat.reset();
        expect(thermostat.currentTemperature).toBe(20);
      });
    });

    describe("Mode", function() {

      it('has a max temperature of 32 when power saving off', function(){
        thermostat.powerSavingOff();
        expect(thermostat.maximumTemperature).toEqual(32);
      });

      it('has a max temperature of 25 when power saving is turned on', function(){
        thermostat.powerSavingOff();
        thermostat.powerSavingOn();
        expect(thermostat.maximumTemperature).toEqual(25);
      });
    });

  });
});
