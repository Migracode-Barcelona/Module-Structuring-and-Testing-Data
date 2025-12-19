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

const getExtension = (fileName) => {
	const lastDotIndex = fileName.lastIndexOf(".");
	const extension = fileName.slice(lastDotIndex);
	return extension;
};

const getDirectory = (path) => {
	const lastSlashIndex = path.lastIndexOf("/");
	const pathBeforeLastSlash = path.slice(0, lastSlashIndex);
	const lastIndexOf_PathBeforeLastSlash = pathBeforeLastSlash.lastIndexOf("/");
	const dirname = pathBeforeLastSlash.slice(lastIndexOf_PathBeforeLastSlash + 1);
	return dirname;
};

const ext = getExtension(base);
const dir = getDirectory(filePath);

console.log(`The directory part of ${filePath} is ${dir}`);
console.log(`The extension part of ${filePath} is ${ext}`);

// https://www.google.com/search?q=slice+mdn



console.log(
	getDirectory("sprint/exercise")
)