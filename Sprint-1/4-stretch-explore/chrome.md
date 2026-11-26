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

Answer
1) Effect of `alert` function
The new message box appears "the chrome page say "Hello Wordld with ok buttom" after typing `alert` function. Untill ok button isn't clicked, the screen is frooze.
2) Effect of `prompt` function
The new message box appears "the chrome page say "What is your name" with empty input taga and two buttons; "ok" and "cancle" after typing `prompt` function. Untill typing anything in empty input tag and click on "ok" or "cancle", the screen is frooze.
3) Return value of `prompt`
The return value of `prompt` is same as whatever you type in the empty input tag.