//For example, the following credit card numbers are valid:

/*```markdown
//9999777788880000
//6666666666661666
```

And the following credit card numbers are invalid:

```markdown
a92332119c011112 (invalid characters)
4444444444444444 (only one type of number)
1111111111111110 (sum less than 16)
6666666666666661 (odd final number)*/
const validateCreditCard = require("./credit-card-validator");

test("should validate a valid credit card number", () => {
    expect(validateCreditCard("9999777788880000")).toEqual(true);
    expect(validateCreditCard("6666666666661666")).toEqual(true);
    });

test("should invalidate a credit card number with invalid characters", () => {
    expect(validateCreditCard("a92332119c011112")).toEqual(false);
    });

test("should invalidate a credit card number with only one type of digit", () => {
    expect(validateCreditCard("4444444444444444")).toEqual(false);
    });

test("should invalidate a credit card number with a sum less than 16", () => {
    expect(validateCreditCard("1111111111111110")).toEqual(false);
    });

test("should invalidate a credit card number with an odd final digit", () => {
    expect(validateCreditCard("6666666666666661")).toEqual(false);
    });