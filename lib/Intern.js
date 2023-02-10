const Employee = require('./Employee');
//intern object template with added getSchool method
class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
        this.role = 'Intern';
    }
    getSchool(){
        return this.school;
    }
}

module.exports = Intern;