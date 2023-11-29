export default function createIteratorObject(report) {
    const allEmployees = report.allEmployees;
    const departments = Object.values(allEmployees);
  
    let currentDepartmentIndex = 0;
    let currentEmployeeIndex = 0;
  
    const iterator = {
      next() {
        const currentDepartmentEmployees = departments[currentDepartmentIndex];
  
        if (currentEmployeeIndex >= currentDepartmentEmployees.length) {
          currentDepartmentIndex++;
          currentEmployeeIndex = 0;
        }
  
        if (currentDepartmentIndex >= departments.length) {
          return { done: true };
        }
  
        const employee = currentDepartmentEmployees[currentEmployeeIndex];
        currentEmployeeIndex++;
  
        return { value: employee, done: false };
      },
    };
  
    iterator[Symbol.iterator] = function () {
      return this;
    };
  
    return iterator;
  }

  