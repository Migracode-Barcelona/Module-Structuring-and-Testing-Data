Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?

```js
alert("Hello world!");
```

Expected behaviour: a dialog displays **Hello world!** with an OK button. The call normally waits until the dialog is dismissed. Its return value is `undefined`; displaying the dialog is its effect. See [MDN: alert()](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert).

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

```js
const myName = prompt("What is your name?");
```

What effect does calling the `prompt` function have?

Expected behaviour: a dialog displays **What is your name?**, a text input, and OK and Cancel buttons. It lets the user enter a response.

What is the return value of `prompt`?

- Clicking OK returns the entered text as a string, which is stored in `myName`.
- Clicking OK without typing anything returns the empty string, `""`.
- Clicking Cancel returns `null`.

These return values are described in [MDN: prompt()](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt).

After answering the dialog, enter this separately to inspect the stored value:

```js
myName
```

The Console may display `undefined` after the `const` declaration itself. That is not the value stored in `myName`; entering `myName` shows the value returned by `prompt`.

These examples are for the browser Console. `alert` and `prompt` are browser APIs, so they are not available as globals in an ordinary Node.js script.
