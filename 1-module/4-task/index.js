/*
  Function checks if the string contains predefined spam data
*/
function checkSpam(str) {
  const spamLib = ["1xbet", "xxx"];
  let testStr = str.toLowerCase();

  for (let i = 0; i < spamLib.length; i++) {
    if (testStr.includes(spamLib[i])) {
      console.log("!!!SPAM: " + spamLib[i]);
      return true;
    }
  }
  return false;
}
