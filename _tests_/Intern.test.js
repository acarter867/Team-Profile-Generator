const Intern = require('../lib/Intern');

describe("Intern", () => {
    const newInt = new Intern('Alec', '0002', 'acarter867@icloud.com', 'UNC Chappel Hill');
    describe("getRole", () => {
        it("Should return proper role of Intern", () => {
            const role = "Intern";
            expect(newInt.getRole()).toEqual(role);
        });
    });

    describe("getSchool", () => {
        it("Should return proper school of Intern", () => {
            const school = "UNC Chappel Hill";
            expect(newInt.getSchool()).toEqual(school);
        });
    });
});