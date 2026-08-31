const readline = require("readline") ; // tells the node.js that eadline is require

const r1 = readline.createInterface(
    {
        input: process.stdin , 
        output: process.stdout
    }
);

r1.question("Enter the Number : ",(a) => 
{
    let iRemainder = a % 2 ; 
    console.log("Remainder is : ",iRemainder) ; 
    if(iRemainder == 0 )
    {
        console.log("Number is Even ") ;
    }
    else
    {
        console.log("Number is ODD ");
    }
    r1.close() ; 
});