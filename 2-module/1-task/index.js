/**
 * Function summarizes numeric values of an object.
 * @param {*} salaries 
 * @returns sum  
 */
function sumSalary(salaries) {
  let sum = 0;
  for (let key in salaries) {
    console.log(key, salaries[key]);
    if (
      typeof salaries[key] === "number" &&
      ![NaN, Infinity, -Infinity].includes(salaries[key])
    ) {
      sum += salaries[key];
    }
  }
  const {month, currency, isPayed} = salaries;
  console.log(`In ${month} sallary of employes is ${sum}${currency}.\nPayed: ${isPayed}`);
  return sum;
}
