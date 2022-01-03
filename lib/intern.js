const Employee = require('./employee');


// create class engineer whch extends from employee
class Intern extends Employee {

    // construct its properties using constuct function

    constructor(name, id, email, school) {
        super(name, id, email);
        // super imports the properties from the parent class Employee
        this.school = school
            //use properties name, id , email,

    }

    getSchool() {
            return this.school;
        }
        // create class method getRole() using a function inside of the class.
    getRole() {
            return 'Intern';
        }
        // create class method getRole() using a function inside of the class.
}

module.exports = Intern

// export Employee