let positionLat = 5;
let positionLong = 10;
let addressLat = 15;
let addressLong = 25;

let deltaLat = addressLat - positionLat;
let deltaLong = addressLong - positionLong;

console.log(Math.sqrt((Math.pow(deltaLat, 2)) + (Math.pow(deltaLong, 2))));