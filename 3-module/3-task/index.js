/**
 * Function formats string with "-" chars
 * @param {*} str 
 * @returns string without "-" chars 
 */
function camelize(str) {
  let arr = str.split("-");
  let result = arr[0];
  arr.slice(1).forEach((elem) => {
    result += !!elem ? elem[0].toUpperCase() + elem.slice(1) : "";
  });
  return result;
}
