## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?

Now enter just `console` in the Console, what output do you get back?

Try also entering `typeof console`

Answer the following questions:

What does `console` store?
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?

Answer
ƒ log() { [native code] } is shown after `console.log`

console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …} is shown after typing `console`

Say 'Object' after typing `typeof console`

`console` stores a group of built-in functionsn used for testing code and printing message.
`.` means `look inside`. It lets you open an object and grabs a specific item inside it.
`console.log` or `console.assert` means open `console` and grab the `log` or `assert`. `console.log` is printing anything and `console.assert` is testing a rule.
