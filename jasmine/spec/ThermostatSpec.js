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

  it('has a max temperature of 25 when power saving on', function(){
    expect(thermostat.maximumTemperature).toEqual(25);
  });

  it('has a max temperature of 32 when power saving off', function(){
    thermostat.powerSavingOff();
    expect(thermostat.maximumTemperature).toEqual(32);
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
