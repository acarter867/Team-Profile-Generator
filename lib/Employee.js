//Employee class with getter methods
class Employee{
    constructor(name, id, email, role){
    this.name = name,
    this.id = id,
    this.email = email,
    this.role = 'Employee';
    this.getName = () => {
        return this.name;
    }
    this.getId = () => {
        return this.id;
    }
    this.getEmail = () => {
        return this.email;
    }
    this.getRole = () => {
        return this.role;
    }
    }
}

module.exports = Employee;