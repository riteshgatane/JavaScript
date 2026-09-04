const { checkPrime } = require("crypto");
const readline = require("readline")

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function CheckDivisible(iNo)
{
    if((iNo % 3 == 0 )&& (iNo % 5 == 0))
        {
            console.log("Number is Divisible by 3 And 5");
        }
    else
        {
            console.log("Number is not  DIvision by 3 And 5");
        }
    
}

r1.question("Enter the Number to check divisible by 3 and 5: ",(input)=>

    {
        let iNo = input ; 
        CheckDivisible(iNo) ; 

        r1.close() ; 
    }
)