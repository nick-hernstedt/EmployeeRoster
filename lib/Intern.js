// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const employee = require(`./Employee`);

class Manager extends employee {
  constructor(name, id, email, officeNumber, role) {
    super(name, id, email, role);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return `Manager`;
  }
}

module.exports = Manager;
