const readline = require("readline") ; 

const r1 = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);

function calculateTicketPrice(iAge)
{
    if(iAge < 0 )
    {
        iAge = -iAge ; 
    }
    
    if(iAge >=0 && iAge <=5)    ///(True And True ) => True || (False And True ) => False 
    {
        return 0;
    }
    else if(iAge >=6 && iAge <=18)
    {
        return 500 ;
    }

    else if(iAge >=19 && iAge <= 50 )
    {
        return 900;
    }
    else
    {
        return 400;
    }
}

r1.question("Enter the Age to calculate ticket price : ",(age) => 
{
    let Age = Number(age) ; 

    iRet = calculateTicketPrice(Age)  ;

    console.log(`Your Ticket Price is ${iRet} Ruppes`)
    r1.close() ; 
});