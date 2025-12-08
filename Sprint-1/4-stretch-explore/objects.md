## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?
console returns a large object with many properties and methods ;

console {log: ƒ, warn: ƒ, error: ƒ, assert: ƒ, ...} // which shows that console is a built-in JavaScript object.


Try also entering `typeof console`
"object" appeared when entered typeof console. // which confirms that console is an object, not a function.


Answer the following questions:

What does `console` store?
console stores an object full of functions that help you output information for debugging.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?

console.log means:

Access the log property of the console object.

In this case, the property happens to be a function you can call.


`.` means:

a property access operator in javascript.


