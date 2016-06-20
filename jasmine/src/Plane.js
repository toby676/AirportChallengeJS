'use strict';

function Plane() {
  this.isFlying = true
}

Plane.prototype.land = function(airport){
  airport.clearForLanding(this)
}
