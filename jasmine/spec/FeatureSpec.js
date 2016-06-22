'use strict';

describe('Feature Test:', function() {
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  describe('nice weather', function() {

    beforeEach(function(){
      spyOn(Math, 'random').and.returnValue(0)
    });

    it('planes can be instructed to land at an airport', function(){
      plane.land(airport);
      expect(airport.planes()).toContain(plane);
    });

    it('planes can be instructed to take off from an airport', function(){
      plane.land(airport);
      plane.takeOff();
      expect(airport.planes()).not.toContain(plane);
    });

  });

  describe('stormy weather', function() {

    beforeEach(function(){
      spyOn(Math, 'random').and.returnValue(1)
    });

    it('prevents take off when weather is stormy', function() {
      plane.land(airport);
      expect(function() {plane.takeOff();}).toThrowError('Cannot take off during storm');
      expect(airport.planes()).toContain(plane);
    });

    it('prevents landing when weather is stormy', function() {
      expect(function() {plane.land(airport);}).toThrowError('Cannot land during storm');
      expect(airport.planes()).not.toContain(plane);
    });

  });

})
