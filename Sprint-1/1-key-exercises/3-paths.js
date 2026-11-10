// The diagram below shows the different names for parts of a file path on a Unix operating system

// ┌─────────────────────┬────────────┐
// │          dir        │    base    │
// ├──────┬              ├──────┬─────┤
// │ root │              │ name │ ext │
// "  /    home/user/dir / file  .txt "
// └──────┴──────────────┴──────┴─────┘

// (All spaces in the "" line should be ignored. They are purely for formatting.)

const filePath = "/Users/mitch/cyf/Module-JS1/week-1/interpret/file.txt";
const lastSlashIndex = filePath.lastIndexOf("/");
const base = filePath.slice(lastSlashIndex + 1);
console.log(`The base part of ${filePath} is ${base}`);

// Create a variable to store the dir part of the filePath variable
// Create a variable to store the ext part of the variable

// Take the characters from the start up to, but not including, the last slash.
const dir = filePath.slice(0, lastSlashIndex);

// base is "file.txt". Find its last dot and take that dot and everything after it.
const ext = base.slice(base.lastIndexOf("."));

console.log(`The dir part is ${dir}`);
console.log(`The ext part is ${ext}`);

// slice(start, end) includes start but excludes end. Without end, it goes to the end.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf

// https://www.google.com/search?q=slice+mdn
