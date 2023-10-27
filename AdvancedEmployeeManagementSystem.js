/*
Filename: AdvancedEmployeeManagementSystem.js
Description: This code demonstrates an advanced employee management system with various operations like adding employees, updating employee details, finding employees, and calculating employee statistics.

Note: In order to execute this code, make sure you have "moment.js" library included in your project.

To execute this code, run the following command:
node AdvancedEmployeeManagementSystem.js
*/

// Employee class definition
class Employee {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.startDate = moment().format('YYYY-MM-DD');
    this.hoursWorked = [];
    this.totalHours = 0;
  }

  addHoursWorked(hours) {
    this.hoursWorked.push(hours);
    this.totalHours += hours;
  }
}

// Employees array to store employee objects
const employees = [];

// Add new employee
function addEmployee(name) {
  const employeeId = employees.length + 1;
  employees.push(new Employee(name, employeeId));
  console.log(`New employee "${name}" with ID ${employeeId} added.`);
}

// Update employee details
function updateEmployee(employeeId, newName) {
  const employee = findEmployee(employeeId);
  if (employee) {
    console.log(`Employee with ID ${employeeId} found.`);
    employee.name = newName;
    console.log(`Updated employee name to "${newName}".`);
  } else {
    console.log(`Employee with ID ${employeeId} not found.`);
  }
}

// Find employee by ID
function findEmployee(employeeId) {
  return employees.find(employee => employee.id === employeeId);
}

// Calculate employee statistics
function calculateStatistics() {
  const activeEmployees = employees.filter(employee => employee.hoursWorked.length > 0);
  const totalWorkedHours = activeEmployees.reduce((acc, employee) => acc + employee.totalHours, 0);
  console.log(`Total number of employees: ${employees.length}`);
  console.log(`Total number of active employees: ${activeEmployees.length}`);
  console.log(`Total hours worked by active employees: ${totalWorkedHours}`);
}

// Add sample employees
addEmployee('John Doe');
addEmployee('Jane Smith');

// Update employee name
updateEmployee(1, 'John Smith');

// Add worked hours for an employee
const employeeToUpdate = findEmployee(2);
if (employeeToUpdate) {
  employeeToUpdate.addHoursWorked(8);
  employeeToUpdate.addHoursWorked(6);
}

// Calculate statistics
calculateStatistics();