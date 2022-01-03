class Manager {
    constructor(name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getOfficePhone() {
        return this.officeNumber;
    }
    getRole() {
        return 'Manager'
    }

    getAllInfo() {
        return [
            this.name,
            this.id,
            this.email,
            this.officeNumber
        ]
    }
}

module.exports = Manager