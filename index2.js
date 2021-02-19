const Teammate = require('./lib/teammate')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')

const inquirer = require('inquirer');
const fs = require('fs');



// teammate 
const group = [];
const htmlGroup =[]
idNum = 1;

const htmlStart = 
 
    ` <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>Document</title>
    </head>
    <body>
      <div class="jumbotron jumbotron-fluid">
      <div class="container"> `



const makeHTML = (group) => 

    `   
            <div class="row">
                <div class="col-3">
                    <h1>${group.name}</h1>
                    <h1>${group.title}</h1>
                    <h1>${group.email}</h1>
                    <h1>${group.id}</h1>
                    <h1>${group.unique}<h1>
                </div>
            </div>
  
    `

    
const htmlEnd = 

`</div>
</div>
</body>
</html>`;
    
    
    
    
    




inquirer.prompt([
    {
    type:"input",
    message:"what is your name?",
    name:"name",
    },
    {
        type:"email",
        message:"email?",
        name:"email",
        validate: validateEmail
    },
    {
        type:"input",
        message:"office id?",
        name:"unique",
        },
    {
        type:"list",
        message:"continue?",
        choices:["engineer","intern","no thanks"],
        name:"cont"
    },

]).then((response)=>{
    console.log(response)
    var timmy = new Teammate(response.name,"manager",idNum,response.email,response.cont,response.unique);
    idNum += 1;

    group.push(timmy);
    var item = makeHTML(timmy);
    htmlGroup.push(item);
    timmy.continue(timmy.cont);


})



function engineering(continu) {
    inquirer.prompt([
        {
        type:"input",
        message:"what is your name?",
        name:"name",
        },
        {
            type:"email",
            message:"email?",
            name:"email",
            validate: validateEmail
        },
        {
            type:"input",
            message:"Github?",
            name:"unique"
        },
        {
            type:"list",
            message:"continue?",
            choices:["engineer","intern","no thanks"],
            name:"cont"
        },
    
    ]).then((response)=>{
        console.log(response)
        var jimmy = new Teammate(response.name,continu,idNum,response.email,response.cont,response.unique);
        group.push(jimmy);
        var item = makeHTML(jimmy);
        htmlGroup.push(item);
        idNum += 1;
        jimmy.continue(jimmy.cont);
    
    
    })
}



function interning(continu) {
    inquirer.prompt([
        {
        type:"input",
        message:"what is your name?",
        name:"name",
        },
        {
            type:"email",
            message:"email?",
            name:"email",
            validate: validateEmail

            
        },
        {
            type:"input",
            message:"what school?",
            name:"unique"
        },
        {
            type:"list",
            message:"continue?",
            choices:["engineer","intern","no thanks"],
            name:"cont"
        },
    
    ]).then((response)=>{
        console.log(response)
        var kimmie = new Teammate(response.name,continu,idNum,response.email,response.cont,response.unique);
        
        group.push(kimmie);
        var item = makeHTML(kimmie);
        htmlGroup.push(item);
        idNum += 1;
        kimmie.continue(kimmie.cont);
    
    
    })
    console.log(htmlGroup);
}



function validateEmail(email){
    let testing = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if(testing){
        return true;
    }
    return false    
}

module.exports = {}