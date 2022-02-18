/*
  Function to reduce string length 
  to specified maxLength if needed
*/
function truncate(str, maxlength) {
  let result = str;
  if (str.length > maxlength) {
    result = str.slice(0, maxlength - 1) + `…`;
  }
  return result;
}
