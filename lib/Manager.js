const Employee = require('./Employee');
//manager object template
class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber,
        this.role = "Manager";
    }
}

module.exports = Manager;