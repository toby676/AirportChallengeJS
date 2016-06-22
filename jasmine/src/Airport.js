function Airport(weather){
  this._weather = typeof weather !== 'undefined' ? weather : new Weather();
  this._hangar = []
}

Airport.prototype = {
  planes: function() {
    return this._hangar

  },

  clearForLanding: function(plane) {
    this._hangar.push(plane);
  },

  clearForTakeOff: function() {
    if (this._weather.isStormy()) {
      throw new Error('Cannot take off during storm')};
    this._hangar.pop();
  }

}
