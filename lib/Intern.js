// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const employee = require(`./Employee.js`);

class Intern extends employee {
  constructor(name, id, email, school, role) {
    super(name, id, email, role);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }
  getRole() {
    return `Intern`;
  }
}

module.exports = Intern;