const inquirer = require("inquirer");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");
const headHTML = require('./utils/generate_head_html');
const engineerHTML = require("./utils/generate_enginner_html");
const managerHTML = require("./utils/generate_manager_html");
const internHTML = require("./utils/generate_intern_html");
const fs = require('fs');
const filename = "index.html";
const path = require('path')
const footerHTML = require("./utils/generate_footer_html");
const { exit } = require("process");


// Initial Question to start the program
questionsArray = [{

    type: 'confirm',
    name: 'confirmUserData',
    message: 'Do you want to enter some Employee Data?',
}, ]

// Manager Questions

questionsArrayTeamManager = [{

    type: 'input',
    name: 'managerName',
    message: "What is the Manager's Name?",
}, {

    type: 'input',
    name: 'managerId',
    message: "What is the Managers ID?",
}, {

    type: 'input',
    name: 'managerEmail',
    message: "What is the Manager's Email?",
}, {

    type: 'input',
    name: 'managerOfficeNumber',
    message: "What is the Manager's Office Number",
}, ]



async function init(questions) {
    console.log('Hello, Welcome');

    const startStatus = await inquirer.prompt(questions);




    return startStatus;



}

async function managerPrompt(questionsArrayTeamManager) {
    const managerPromptReturn = await inquirer.prompt(questionsArrayTeamManager)
    return managerPromptReturn;
}

const optionToAddOrFinish = [{
    type: 'list',
    name: 'option',
    message: 'Do you want to add An Engineer, Intern or Finish?',
    choices: ['Engineer', 'Intern', 'Finish']

}]

async function optionToAddEngineerOrInternOrFinish(optionToAddOrFinish) {
    const optionToAddOrFinishHolder = await inquirer.prompt(optionToAddOrFinish);
    return optionToAddOrFinishHolder;
}
// Write to file function
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data), () => {
        if (err) throw err;
        console.log('Saved!');
    }
}
// append to file function
function appendToFile(fileName, data) {
    return fs.appendFileSync(path.join(process.cwd(), fileName), data), () => {
        if (err) throw err;
        console.log('Saved!');
    }
}

// fs.writeFile(fileName, data, (err) => {
//     if (err) throw err
//         //  })
// })



async function engineerPrompt() {
    await inquirer.prompt([{
        type: 'input',
        message: 'Enter Enginner name',
        name: 'engineerName'
    }, {
        type: 'input',
        message: 'Enter Enginner id',
        name: 'engineerId'
    }, {
        type: 'input',
        message: 'Enter Enginner email',
        name: 'engineerEmail'
    }, {
        type: 'input',
        message: 'Enter Enginner github username',
        name: 'engineerGithubUsername'
    }])
}

function askEngineerOrIntern(insertedData) {
    if (insertedData.option === 'Engineer') {
        //engineer prompt
        inquirer.prompt([{
            type: 'input',
            message: 'Enter Enginner name',
            name: 'engineerName'
        }, {
            type: 'input',
            message: 'Enter Enginner id',
            name: 'engineerId'
        }, {
            type: 'input',
            message: 'Enter Enginner email',
            name: 'engineerEmail'
        }, {
            type: 'input',
            message: 'Enter Office Number',
            name: 'engineerOfficeNumber'
        }, {
            type: 'input',
            message: 'Enter Enginner github username',
            name: 'engineerGithubUsername'
        }]).then((dataEngineer) => {
            // create a new employee engineer 

            const newEngineer = new Engineer(dataEngineer.engineerName, dataEngineer.engineerId, dataEngineer.engineerEmail, dataEngineer.engineerOfficeNumber, dataEngineer.engineerGithubUsername);
            appendToFile(filename, engineerHTML(newEngineer));
            optionToAddEngineerOrInternOrFinish(optionToAddOrFinish).then((data2) => {
                askEngineerOrIntern(data2);
            });

        })
    } else if (insertedData.option === 'Intern') {


        //intern prompt
        inquirer.prompt([{
            type: 'input',
            message: 'Enter Intern name',
            name: 'internName'
        }, {
            type: 'input',
            message: 'Enter Inginner id',
            name: 'internId'
        }, {
            type: 'input',
            message: 'Enter intern email',
            name: 'internEmail'
        }, {
            type: 'input',
            message: 'Enter intern school',
            name: 'internSchool'
        }]).then((dataIntern) => {
            // create a new employee intern 
            const newIntern = new Intern(dataIntern.internName, dataIntern.internId, dataIntern.internEmail, dataIntern.internSchool)
            appendToFile(filename, internHTML(newIntern))

            optionToAddEngineerOrInternOrFinish(optionToAddOrFinish).then((data2) => { askEngineerOrIntern(data2) });
        })

    } else if (insertedData.option === 'Finish') {
        // call write to file function
        console.log("saving to index...")
        appendToFile(filename, footerHTML());
        console.log('saved...')
        exit();
    }
}


init(questionsArray[0]).then((data) => {
    // promise
    if (data.confirmUserData) {
        console.log(data.confirmUserData)
        writeToFile(filename, headHTML());
        console.log("Lets Start")
        managerPrompt(questionsArrayTeamManager).then((data) => {
            // create a new manager object
            const newManager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOfficeNumber)

            console.log(newManager);

            appendToFile(filename, managerHTML(newManager))


            optionToAddEngineerOrInternOrFinish(optionToAddOrFinish).then((data) => {
                askEngineerOrIntern(data);

                console.log(data)

            })
        })

        // const userData = inquirer.prompt(questionsArray_.range(1, 5);)
    } else {
        console.log("exiting")
        exit()
    }
})