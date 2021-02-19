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
      <link rel="stylesheet" href="style.css">

      <title>Document</title>
    </head>
    <body>

      <div class="container-fluid">
      <header class="col-12 jumbotron mb-3">
      <h1>My Team </h1>
      </header> 
      <div class="row row_box">`



const makeHTML = (group) => 

    `   
                <div class="col-2 box">
                    <h2>${group.name}</h2>
                    <p>${group.title}</p>
                    <p>ID: ${group.id}</p>
                    Email:<a src="${group.email}">${group.email}</a>
                    <p>${group.unique}<p>
                </div>
            
  
    `

    
const htmlEnd = 

`</div>
</div>
</body>
</html>`;
    
    
    
    
    



class Teammate{
    constructor(name,title,id,email,cont,unique){
        this.name = name;
        this.title = title;
        this.email = email;
        this.id = id;
        this.cont = cont;
        this.unique = unique
    }

    continue(cont){
        if(cont == "engineer"){
         
            engineering(cont)

        }
        else if(cont == "intern"){
            interning(cont)

        }
        else{
           
            htmlGroup.unshift(htmlStart);
            htmlGroup.push(htmlEnd);
         
          fs.writeFile("outcome/test.html",htmlGroup.join('\n'),() => {
          console.log('file made');
          })


            console.log("done")
        

        }
    }
}


class Engineer extends Teammate {

    constructor(name,title,email,id,cont,unique){

    super(name,title,email,id,cont)
    this.name = name;
    this.tile = title;
    this.email = email;
    this.id = id;
    this.cont  = cont;
    this.unique = unique;

    }
}


class Intern extends Teammate{
    constructor(name,title,email,id,cont,unique){
    
        super(name,title,email,id,cont)
    this.name = name;
    this.title = title
    this.email = email;
    this.id = id;
    this.cont = cont;
    this.unique = unique;

    }

}

// name,title, email, id 


// occupation(title){
    //  maybe new object promed?
// } 

// subclasses 

// manager engineer intern
//   officeID       unique        school
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
   
}


function validateEmail(email){
    let testing = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if(testing){
        return true;
    }
    return false    
}






