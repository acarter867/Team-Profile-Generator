const Employee = require('./Employee');
//Engineer object template that includes getGithub method
class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
        this.role = 'Engineer';
    }
    getGithub(){
        return this.github;
    }
}

module.exports = Engineer;