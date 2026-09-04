const readline = require("readline") ; 

const r1 = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

function Display(icnt)
{
    for(i=0 ; i < icnt ; i++)
        {
        console.log("Jay Ganesh");
        }

}

r1.question("Enter the Frequency :",(input)=>
{
    let icnt = input ; 
    Display(icnt)
    r1.close() ; 
}
);

