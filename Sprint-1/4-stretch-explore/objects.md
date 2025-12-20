## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?

Now enter just `console` in the Console, what output do you get back?

Try also entering `typeof console`

Answer the following questions:

What does `console` store?
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?


Answer:
1. console stores an object that contains methods for logging and debugging, such as log, warn, error, assert, etc.
2. typeof console returns "object", confirming that console is an object.
3. console.log or console.assert uses the dot (.) syntax to access a method (function) of the console object.
The dot means "this method belongs to this object".
4. Example:
console.log("Hello"); // calls the log method of the console object
console.assert(1 === 2, "Not equal!"); // calls the assert method of the console object