const fs = require("fs");
const os = require("os");

console.log(os.cpus().length);

// Sync... Blocking.....
// fs.writeFileSync("./test.txt", "hello world Sync");

//Async... Non-Blocking....
// fs.writeFile("./test.txt", "hello world Async", () => {});

//Sync
//Dependes on No. of threads. By default threads 4. maxmium threads no of core the serever
// console.log("1")
// const result = fs.readFileSync("./contact.txt", "utf-8");
// console.log(result);
// console.log("2")
// // //output
// // 1
// // Aman: +91839000000
// // Tanuj: +91798888888
// // 2

//Async
// console.log("1");
// const result = fs.readFile("./contact.txt", "utf-8", (err, result) => {
//   console.log(result);
// });
// console.log("2");
// // // output
// // 1
// // 2
// // Aman: +91839000000
// // Tanuj: +91798888888

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
