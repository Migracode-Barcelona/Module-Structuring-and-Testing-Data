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

const firstDirIndex = filePath.indexOf("cyf");
const lastDirIndex = filePath.lastIndexOf("interpret");
const dir = filePath.slice(firstDirIndex, lastDirIndex);
console.log(`The directory part of ${filePath} is ${dir}`);

const firstExtIndex = filePath.indexOf(".");
const ext = filePath.slice(firstExtIndex);
console.log(`The extension part of ${filePath} is ${ext}`);

// https://www.google.com/search?q=slice+mdn