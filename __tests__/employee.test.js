employee = require('../employee.js');




test("Checking Properties", () => {

        expect(employee).toHaveProperty('name');

        expect(employee).toHaveProperty('id');

        expect(employee).toHaveProperty('email');

        expect(employee.getName()).toBe(expect(any(string)))

        expect(employee.getEmail()).toBe(expect(any(string)))

        expect(employee.getID()).toBe(expect(any(string)))

        expect(employee.getRole()).toBe(expect(any(string)))

    }


)