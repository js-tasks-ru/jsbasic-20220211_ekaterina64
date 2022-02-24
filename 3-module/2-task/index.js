/**
 * Function returns new array with numbers from arr between a and b
 * @param {*} arr initial array
 * @param {*} a int
 * @param {*} b int
 * @returns array 
 */
function filterRange(arr, a, b) {
  return arr.filter((x) => x >= a && x <= b);
}
