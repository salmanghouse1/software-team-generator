const Employee = require('../lib/employee');




test("Checking Properties", () => {
        const employee = new Employee('Dave', '3', 'dave@gmail.com');
        expect(employee).toHaveProperty('name');

        expect(employee).toHaveProperty('id');

        expect(employee).toHaveProperty('email');

        expect(employee.getName()).toEqual(expect.any(String))

        expect(employee.getEmail()).toEqual(expect.any(String))

        expect(employee.getID()).toEqual(expect.any(String))

        expect(employee.getRole()).toEqual(expect.any(String))


        expect(employee.getRole()).toBe('Employee')

        expect(employee.getEmail()).toBe('dave@gmail.com')

        expect(employee.getID()).toBe('3')

        expect(employee.getName()).toBe('Dave')


    }


)