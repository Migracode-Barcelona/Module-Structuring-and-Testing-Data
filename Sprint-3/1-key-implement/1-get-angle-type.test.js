const { getAngleType } = require("./1-get-angle-type");
describe("getAngleType", () => {

    test("Case 1: identifies Right Angles", () => {
        expect(getAngleType(90)).toBe("Right angle");
    });
});