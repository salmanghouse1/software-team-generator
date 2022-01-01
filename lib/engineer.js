const Employee = require('./employee');


// create class employee
class Engineer extends Employee {

    // construct its properties using constuct function

    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;

        //use properties name, id , email,

    }
    getGithub() {
            return this.getGithub;
        }
        // create class method getRole() using a function inside of the class.
    getRole() {
            return 'Engineer';
        }
        // create class method getRole() using a function inside of the class.
}

module.exports = Employee