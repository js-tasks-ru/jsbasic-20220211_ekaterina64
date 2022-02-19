/**
 * Function checks if an object is empty
 * @param {*} obj 
 * @returns boolean result
 */
function isEmpty(obj) {
  let keys = Object.keys(obj);
  if (keys.length > 0) {
    return false;
  }
  return true;
}
