## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get? ANSWER: ƒ log() { [native code] }


Now enter just `console` in the Console, what output do you get back?
ANSWER: Console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console` ANSWER: "object"

Answer the following questions:

What does `console` store? ANSWER: It stores a set of functions (methods) designed to help you debug your code.
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
ANSWER: console → an object

.log or .assert → a method (function) within that object

`.`= The dot is the property access operator in JavaScript.
