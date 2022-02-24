/**
 * Fuction returns name balance of person not older than specified age
 * @param {*} users 
 * @param {*} age 
 * @returns String
 */
function showSalary(users, age) {
  return users
    .filter((user) => user.age <= age)
    .map((user) => `${user.name}, ${user.balance}`)
    .join("\n");
}
