## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
ans: ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?
ans: An object containing various logging methods.

Try also entering `typeof console`

Answer the following questions:

What does `console` store?
ans: "object"

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
ans: The dot (.) is the property accessor (dot notation). It means we are accessing the 'log' method inside the 'console' object.
