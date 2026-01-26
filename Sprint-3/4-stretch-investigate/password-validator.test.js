/* 
Password Validation

Write a program that should check if a password is valid
and returns a boolean

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one of the following non-alphanumeric symbols: ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array. 

You must breakdown this problem in order to solve it. Find one test case first and get that working
*/

const isValidPassword = require("./password-validator");
test("password has at least 5 characters", () => {
    const password = "12345";
    const result = isValidPassword(password);
    expect(result).toEqual(true);
}
);

test("password has at least one uppercase letter", () => {
    const password = "abcD1!";
    const result = isValidPassword(password);
    expect(result).toEqual(true);
}
);

test("password has at least one lowercase letter", () => {
    const password = "ABCd1!";
    const result = isValidPassword(password);
    expect(result).toEqual(true);
}
);

test("password has at least one number", () => {
    const password = "Abcde!2";
    const result = isValidPassword(password);
    expect(result).toEqual(true);
}
);

test("password has at least one non-alphanumeric symbol", () => {
    const password = "Abcde1";
    const result = isValidPassword(password);
    expect(result).toEqual(true);      
}
);

test("password is not in the previous passwords array", () => {
    const password = "Password1!";
    const previousPasswords = ["Password1!", "Password2@", "Password3#"];
    const result = isValidPassword(password, previousPasswords);
    expect(result).toEqual(true);      
}
);

test("valid password meets all criteria", () => {
    const password = "Valid1!";
    const previousPasswords = ["Password1!", "Password2@", "Password3#"];
    const result = isValidPassword(password, previousPasswords);
    expect(result).toEqual(true);      
}
);  
test("invalid password fails multiple criteria", () => {
    const password = "inv";
    const previousPasswords = ["inv", "Password2@", "Password3#"];
    const result = isValidPassword(password, previousPasswords);            
    expect(result).toEqual(false);      
}
);  



