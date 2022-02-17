/*
  Function to start word with capital letter
*/
function ucFirst(str) {
  let result = str;
  if (str.length > 0) {
    result =
      str.length === 1
        ? str.toUpperCase()
        : str[0].toUpperCase() + str.slice(1);
  }
  return result;
}
