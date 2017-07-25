module.exports = function arrToObject(array) {
  if (!array) return null;
  
  if (array.length < 2) return null;
  
  var myObject = {};
  myObject[array[0]] = array[array.length - 1];
  
  return myObject;
}
