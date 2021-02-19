const Indexed = require('../index');

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
         
           Indexed.engineering(cont)

        }
        else if(cont == "entern"){
            Indexed.interning(cont)

        }
        else{
           
            Indexed.htmlGroup.unshift(Indexed.htmlStart);
            Indexed.htmlGroup.push(Indexed.htmlEnd);
         
          fs.writeFile("outcome/test.html",Indexed.htmlGroup.join('\n'),() => {
          console.log('file made');
          })

            console.log("done")

        }
    }
}



module.exports = Teammate
