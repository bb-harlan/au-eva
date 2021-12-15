"use strict";
exports.__esModule = true;
var X = /** @class */ (function () {
    function X() {
        this.name = "Alan";
    }
    X.prototype.displayName = function () {
        console.log("Hello, " + this.name + ".");
    };
    return X;
}());
exports.X = X;
var x = new X();
x.displayName();
