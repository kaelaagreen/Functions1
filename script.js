"use strict";

function getAreaOfCircle (radiusOfArea) {
    return (Math.PI*(radiusOfArea ** 2));
}

console.log(getAreaOfCircle (7));

function getCircumferenceOfCircle (radiusOfParameter) {
    return (2 * Math.PI * radiusOfParameter);
}

console.log(getCircumferenceOfCircle (7));

function getAreaOfSquare (sideParameter) {
    return (sideParameter ** 2);
}
console.log (getAreaOfSquare(7));

function getAreaOfTriangle (base,height) {
    return ((height * base) / 2);
}

console.log (getAreaOfTriangle(4,7));