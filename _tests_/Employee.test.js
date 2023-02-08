const Employee = require("../lib/Employee");

describe("Employee", () => {
    const newEmp = new Employee('Alec', '0001', 'acarter867@icloud.com');
  describe("getName", () => {
    it("getName should return name of employee", () => {
      const name = 'Alec';
      expect(newEmp.getName()).toEqual(name);
    });
  });

  describe("getId", () => {
    it("Should return correct ID of employee", () =>{
        const id = '0001';
        expect(newEmp.getId()).toEqual(id);
    });
  });
  
  describe("getEmail", () => {
    it("Should return correct email address of employee", () => {
        const email = 'acarter867@icloud.com';
        expect(newEmp.getEmail()).toEqual(email);
    });
  });
  
  describe("getRole", () => {
    it("Should return correct role of employee", () => {
        const role = 'Employee';
        expect(newEmp.getRole()).toEqual(role);
    })
  })
});