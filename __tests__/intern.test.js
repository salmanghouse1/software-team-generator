const Intern = require('../lib/intern');



test("Checking Properties of Intern and instantiating new object and testing it", () => {
    const intern = new Intern('Dave', '3', 'dave@gmail.com', 'Eastern Heights');
    expect(intern).toHaveProperty('name');

    expect(intern).toHaveProperty('school');

    expect(intern).toHaveProperty('id');

    expect(intern).toHaveProperty('email');


    expect(intern.getName()).toEqual(expect.any(String))

    expect(intern.getEmail()).toEqual(expect.any(String))

    expect(intern.getID()).toEqual(expect.any(String))

    expect(intern.getRole()).toEqual(expect.any(String))

    expect(intern.getRole()).toBe('Intern')



    expect(intern.getEmail()).toBe('dave@gmail.com')

    expect(intern.getID()).toBe('3')

    expect(intern.getName()).toBe('Dave')

    expect(intern.getSchool()).toBe('Eastern Heights')

})