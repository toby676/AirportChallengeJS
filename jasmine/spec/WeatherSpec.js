'use strict';

describe('Weather', function() {
  var weather;

  beforeEach(function() {
    weather = new Weather();
  });

  // describe('#isStormy', function() {

    it('returns true randomly', function() {
      spyOn(Math, "random").and.returnValue(1)
      expect(weather.isStormy()).toEqual(true);
    });

    it('returns false randomly', function() {
      spyOn(Math, "random").and.returnValue(0)
      expect(weather.isStormy()).toEqual(false);
    });

  // });

});
