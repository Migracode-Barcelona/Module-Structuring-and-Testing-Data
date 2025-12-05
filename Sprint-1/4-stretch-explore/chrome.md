Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?
What is the return value of `prompt`?

Answer:
Calling alert("Hello world!") shows a popup with the message "Hello world!" to the user.
The alert function does not return any value (returns undefined).
Calling prompt("What is your name?") shows a popup with a text input field asking the user for their name.
The return value of prompt is the text entered by the user, or null if the user presses Cancel.
Example:
const myName = prompt("What is your name?");
console.log(myName); // will display the name entered or null
