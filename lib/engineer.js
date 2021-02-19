const Teammate = require('./teammate');

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

module.exports = Engineer