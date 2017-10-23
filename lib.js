function employee (name, manager) {
  return {
    name: name,
    manager: manager
  }
}

/**
 * Returns an array of employees (chosen from the given array of employees)
 * whose manager is the same as the given manager. This should not alter
 * the given array! A new array should be created to contain the results.
 *
 * @param manager the manager to filter by
 * @param employees the employees to choose from
 */
function underlings (manager, employees) {
  let newArray = [];

  for (i = 0; i < employees.length; i++) {
    if (employees[i].manager === manager) {
      newArray.push(employees[i].name)
    }
  }
  return newArray;
}

module.exports = {
  employee,
  underlings
}
