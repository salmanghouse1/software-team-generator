const Manager = require('../lib/manager');



test("Checking Properties of manager and instantiating new object and testing it", () => {
    const manager = new Manager('Dave', '3', 'dave@gmail.com', '555');
    expect(manager).toHaveProperty('name');

    expect(manager).toHaveProperty('id');

    expect(manager).toHaveProperty('email');

    expect(manager).toHaveProperty('officeNumber');

    expect(manager.getName()).toEqual(expect.any(String))

    expect(manager.getEmail()).toEqual(expect.any(String))

    expect(manager.getId()).toEqual(expect.any(String))

    expect(manager.getRole()).toEqual(expect.any(String))

    expect(manager.getOfficePhone()).toEqual(expect.any(String))


    expect(manager.getRole()).toBe('Manager')

    expect(manager.getEmail()).toBe('dave@gmail.com')

    expect(manager.getId()).toBe('3')

    expect(manager.getName()).toBe('Dave')

    expect(manager.getOfficePhone()).toBe('555')


})