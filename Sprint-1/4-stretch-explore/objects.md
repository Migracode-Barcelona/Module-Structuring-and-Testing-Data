## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?

Now enter just `console` in the Console, what output do you get back?

Try also entering `typeof console`

Answer the following questions:

What does `console` store?
console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
it provides a set of methods (functions) we can call to interact with the debugging console.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
log() { [native code] }
assert() { [native code] }
the log/assert methods inside console.
. - property accessor (like saying “go inside this object and grab this property or method”).
