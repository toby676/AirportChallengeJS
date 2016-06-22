'use strict';

describe('Airport', function(){
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane');
  });

  describe('Stormy conditions', function() {

    beforeEach(function() {
      spyOn(Math, 'random').and.returnValue(0)
    });

    it('has no planes by default', function(){
      expect(airport.planes()).toEqual([]);
    });

    it('can clear planes for landing', function(){
      airport.clearForLanding(plane);
      expect(airport.planes()).toEqual([plane]);
    });

    it('can clear planes for take off', function(){
      airport.clearForLanding(plane);
      airport.clearForTakeOff(plane);
      expect(airport.planes()).toEqual([]);
    });

  });

  describe('Stormy conditions', function() {

    beforeEach(function() {
      spyOn(Math, 'random').and.returnValue(1)
    });

    it('does not permit take off in stormy weather', function(){
      airport.clearForLanding(plane);
      expect(function(){airport.clearForTakeOff();}).toThrowError('Cannot take off during storm');
    });

    it('does not permit land in stormy weather', function(){
      airport.clearForLanding(plane);
      expect(function(){airport.clearForLanding(plane);}).toThrowError('Cannot land during storm');
    });

  });
});
