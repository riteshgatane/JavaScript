const readline = require("readline");

const r1 = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }

);


r1.question("Enter the First Number : ",(input1) => 
{
    let a = Number(input1);

r1.question("Enter the Second Number : ",(input2) => 
{
    let b =  Number(input2);

    console.log("Addition is : ",a+b) ; 
    console.log("Subtration is : ",a-b) ; 
    console.log("Multiplication is :", a*b) ;
    r1.close() ; 
});
});