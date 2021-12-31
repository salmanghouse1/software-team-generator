// create class employee
class Employee {

    // construct its properties using constuct function

    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;

        //use properties name, id , email,

    }
    getName() {
        return this.name
    }

    getRole() {
        return 'Employee'
    }
    getID() {
        return this.id
    }

    getEmail() {
            return this.email
        }
        // create class method getRole() using a function inside of the class.

    // create class method getRole() using a function inside of the class.
}

module.exports = Employee