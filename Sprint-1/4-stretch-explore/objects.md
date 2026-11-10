## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?

Expected output: Chrome shows a preview of the `log` function, typically something like `ƒ log() { [native code] }`. The exact display can vary. Entering `console.log` accesses the function; it does not call it because there are no parentheses.

Now enter just `console` in the Console, what output do you get back?

Expected output: an expandable object containing properties such as `log`, `warn`, `error`, and `assert`. Many of these properties hold functions that provide debugging tools. See [MDN: console](https://developer.mozilla.org/en-US/docs/Web/API/console).

Try also entering `typeof console`

```js
typeof console
```

Expected result: `"object"`.

Answer the following questions:

What does `console` store?

`console` refers to an object provided by the environment. It groups related debugging functions together, including `log` for displaying messages and `assert` for reporting a failed condition.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?

The dot accesses a named property of an object. `console.log` accesses the `log` property of `console`; `console.assert` accesses its `assert` property. Both properties hold functions. This is called [dot notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors#dot_notation).

Adding parentheses calls the function:

```js
console.log("Hello world!"); // Displays a message.
console.assert(2 + 2 === 4, "The calculation is wrong"); // No message: the condition is true.
```

For comparison, a call such as `console.assert(false, "Check failed")` displays an assertion message because its condition is false. See [MDN: console.assert()](https://developer.mozilla.org/en-US/docs/Web/API/console/assert_static).
