## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
//It returns something like ƒ log() { [native code] }, which shows that console.log is a function built into the browser.

Now enter just `console` in the Console, what output do you get back?
//console shows an object that contains many debugging functions (methods), such as log, error, warn, table, and more.

Try also entering `typeof console`

Answer the following questions:

What does `console` store?
//console stores an object that contains many debugging functions (methods), such as log, error, warn, table, and more.
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
//The dot (.) is used to access a property or method inside an object.
console.log means “the log method belonging to the console object.”
