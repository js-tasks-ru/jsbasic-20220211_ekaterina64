/**
 * Function returns min&max cifer value from space separated string
 * @param {*} str 
 * @returns object {min:x, max:y}
 */
function getMinMax(str) {
  let arr = str.split(" ");
  let sortedArr = [];
  arr.forEach((elem) => {
    if (!Number.isNaN(+elem)) {
      sortedArr.push(+elem);
    }
  });
  sortedArr.sort((a, b) => a - b);
  return {
    min: sortedArr[0],
    max: sortedArr[sortedArr.length - 1],
  };
}
