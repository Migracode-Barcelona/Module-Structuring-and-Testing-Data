const { getAngleType } = require("./1-get-angle-type");

describe("getAngleType", () => {
  test("Case 1: identifies Right Angles", () => {
    expect(getAngleType(90)).toBe("Right angle");
  });

  test("Case 2: identifies Acute Angles", () => {
    expect(getAngleType(45)).toBe("Acute angle");
  });

  test("Case 3: identifies Obtuse Angles", () => {
    expect(getAngleType(120)).toBe("Obtuse angle");
  });

  test("Case 4: identifies Straight Angles", () => {
    expect(getAngleType(180)).toBe("Straight angle");
  });

  test("Case 5: identifies Reflex Angles", () => {
    expect(getAngleType(270)).toBe("Reflex angle");
  });

  test("Case 6: identifies Full Rotation", () => {
    expect(getAngleType(360)).toBe("Full rotation");
  });
}); 