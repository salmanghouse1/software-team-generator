const Employee = require('./employee');


// create class engineer whch extends from employee
class Engineer extends Employee {

    // construct its properties using constuct function

    constructor(name, id, email, officeNumber, github) {
        super(name, id, email);
        // super imports the properties from the parent class Employee
        this.officeNumber = officeNumber;
        this.github = github;
        //use properties name, id , email,

    }
    getOfficePhone() {
        return this.officeNumber;
    }

    getGithub() {
            return this.github;
        }
        // create class method getRole() using a function inside of the class.
    getRole() {
            return 'Engineer';
        }
        // create class method getRole() using a function inside of the class.
}

module.exports = Engineer

// export Employee