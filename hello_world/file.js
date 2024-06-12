const fs = require("fs");

// Sync...
// fs.writeFileSync("./test.txt", "hello world Sync");

//Async
// fs.writeFile("./test.txt", "hello world Async", () => {});

//Sync
// const result = fs.readFileSync("./contact.txt", "utf-8");
// console.log(result);

//Async
// fs.readFile("./contact.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log("error", err);
//   } else {
//     console.log(result);
//   }
// });

//Sync
// fs.appendFileSync("./test.txt", `\nthis line is Sync not Aync`)
// fs.cpSync("./test.txt", "./copy.txt");
// fs.unlinkSync("./copy.txt");