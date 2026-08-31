const readline = require("readline") ; //Import build in readline module of Node.js

const r1 = readline.createInterface(
{
    input: process.stdin ,
    output: process.stdout  
});

r1.question("Enter your Name : ", (name) => {
    console.log("Hello "+name) ; 
    r1.close() ; 
}
);