const Engineer = require("../lib/Engineer");

describe('Engineer', () => {
    const newEng = new Engineer('Alec', '0001', 'acarter867@icloud.com', 'acarter867');
    describe('getGithub', () => {
        it("Should return correct github username of the Engineer", () => {
            const github = 'acarter867';
            expect(newEng.getGithub()).toEqual(github); 
        });        
    });

    describe('getRole', () => {
        it("Should return the correct role of the Engineer", () => {
            const role = 'Engineer';
            expect(newEng.getRole()).toEqual(role);
        });        
    });

})