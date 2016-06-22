function Plane(){

}

Plane.prototype = {
  land: function(airport) {
    airport.clearForLanding(this);
    this._location = airport;
  },

  takeOff: function() {
    this._location.clearForTakeOff();
  }

};
