const Manager = require('../lib/Manager');

describe('Manager', () => {
    const newMan = new Manager('Alec', '0002', 'acarter867@icloud.com', '123');
    describe("Office Number", () => {
        it("Should return office number of Manager", () => {
            const officeNumber = '123';
            expect(newMan.officeNumber).toEqual(officeNumber);
        });
    });
    describe("getRole", () => {
        it("Should return correct role of manager", () => {
            const role = "Manager";
            expect(newMan.getRole()).toEqual(role);
        });
    });
});