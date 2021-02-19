const inquirer = require('inquirer');
const fs = require('fs');



// teammate 
const group = [];
idNum = 1;


const makeHTML = (group) => 

    `
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>Document</title>
    </head>
    <body>
      <div class="jumbotron jumbotron-fluid">
      <div class="container">
            <h1>${group.name}</h1>;
      </div>
    </div>
    </body>
    </html>`;
    
    
    
    
    
    
    



class Teammate{
    constructor(name,title,id,email,cont){
        this.name = name;
        this.title = title;
        this.email = email;
        this.id = id;
        this.cont = cont
    }
    officeid(officeID){
       console.log( this.officeID = officeID);
    }

    continue(cont){
        if(cont == "engineer"){
         
            engineering(cont)

        }
        else if(cont == "entern"){
            interning(cont)

        }
        else{
            
            for(var i = 0; i< group.length;i++){
                var moreHtml = [];
                let temp =makeHTML(group[i])
                moreHtml.push(temp)


            }
          fs.writeFile("outcome/test.html",moreHtml,() => {
          console.log(moreHtml);

   })


            console.log("done")
        

        }
    }
}


class Engineer extends Teammate {

    constructor(name,title,email,id,cont,github){

    super(name,title,email,id,cont)
    this.name = name;
    this.tile = title;
    this.email = email;
    this.id = id;
    this.cont  = cont;
    this.github = github;

    }
}


class Intern extends Teammate{
    constructor(name,title,email,id,cont,school){
    
        super(name,title,email,id,cont)
    this.name = name;
    this.title = title
    this.email = email;
    this.id = id;
    this.cont = cont;
    this.school = school;

    }

}

// name,title, email, id 


// occupation(title){
    //  maybe new object promed?
// } 

// subclasses 

// manager engineer intern
//   officeID       github        school
//

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
        type:"list",
        message:"continue?",
        choices:["engineer","entern","no thanks"],
        name:"cont"
    },

]).then((response)=>{
    console.log(response)
    var timmy = new Teammate(response.name,"manager",response.email,idNum,response.cont);
    idNum += 1;

    group.push(timmy);
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
            message:"github?",
            name:"github"
        },
        {
            type:"list",
            message:"continue?",
            choices:["engineer","entern","no thanks"],
            name:"cont"
        },
    
    ]).then((response)=>{
        console.log(response)
        var jimmy = new Engineer(response.name,continu,response.email,idNum,response.cont,response.github);
        group.push(jimmy);
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
            name:"school"
        },
        {
            type:"list",
            message:"continue?",
            choices:["engineer","entern","no thanks"],
            name:"cont"
        },
    
    ]).then((response)=>{
        console.log(response)
        var kimmie = new Intern(response.name,continu,response.email,idNum,response.cont,response.school);
        
        group.push(kimmie);
        idNum += 1;
        kimmie.continue(kimmie.cont);
    
    
    })
}

function validateEmail(email){
    let testing = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if(testing){
        return true;
    }
    return false    
}






