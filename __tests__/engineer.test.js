const Engineer = require('../lib/engineer');



test("Checking Properties of engineer and instantiating new object and testing it", () => {
    const engineer = new Engineer('Dave', '3', 'dave@gmail.com', '555', 'dave2');
    expect(engineer).toHaveProperty('name');

    expect(engineer).toHaveProperty('github');

    expect(engineer).toHaveProperty('id');

    expect(engineer).toHaveProperty('email');

    expect(engineer).toHaveProperty('officeNumber');


    expect(engineer.getName()).toEqual(expect.any(String))

    expect(engineer.getEmail()).toEqual(expect.any(String))

    expect(engineer.getID()).toEqual(expect.any(String))

    expect(engineer.getRole()).toEqual(expect.any(String))

    expect(engineer.getOfficePhone()).toEqual(expect.any(String))


    expect(engineer.getGithub()).toEqual(expect.any(String))

    expect(engineer.getRole()).toBe('Engineer')


    expect(engineer.getGithub()).toBe('dave2')


    expect(engineer.getEmail()).toBe('dave@gmail.com')

    expect(engineer.getID()).toBe('3')

    expect(engineer.getName()).toBe('Dave')

    expect(engineer.getOfficePhone()).toBe('555')


})