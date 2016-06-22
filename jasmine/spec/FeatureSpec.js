'use strict';

describe('Feature Test:', function() {
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  it('planes can be instructed to land at an airport', function(){
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  })

  it('planes can be instructed to take off from an airport', function(){
    plane.land(airport);
    plane.takeOff();
    expect(airport.planes()).not.toContain(plane);
  })

  it('prevents take off when weather is stormy', function() {
    plane.land(airport);
    expect(function() {plane.takeOff();}).toThrowError('Cannot take off during storm');
    expect(airport.planes()).toContain(plane);
  });

})
