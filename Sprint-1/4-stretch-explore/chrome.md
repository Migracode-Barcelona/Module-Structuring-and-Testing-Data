Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;
//It displays a popup message and pauses the page until the user clicks OK.

What effect does calling the `alert` function have?
//It opens a popup asking the user to type an answer.

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?
//It opens a popup asking the user for input and waits for their answer.
What is the return value of `prompt`?
//The text the user enters (e.g., "Faith"), or null if the user clicks Cancel.


