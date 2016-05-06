var State = require("./State");

var Track = function(symbols, to){
    this.to = to;
    if(symbols instanceof State.constructor) this.symbols = symbols;
    else this.symbols = symbols.split("");
    this.whitelist = true;
};

Track.prototype.isAllowed = function(symbol){
    var contains = this.symbols.indexOf(symbol) > -1;
    return contains == this.whitelist
};

module.exports = Track;