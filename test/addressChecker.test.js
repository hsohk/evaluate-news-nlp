import {checkForWebAddress} from "../src/client";
describe("Testing the submit functionality", () => {
    test("Testing the handleSubmit() function", () => {
        expect(checkForWebAddress('http://test.com')).toBe(true);
    })
    test("Testing the handleSubmit() function", () => {
        expect(checkForWebAddress('htp://test.com')).toBe(false);
    })
});