var i = 0;

while (i < 100){
    i++;
    var divisiblePar3 = i % 3;
    var divisiblePar5 = i % 5;

    if (divisiblePar3 === 0){
        console.log("Fizz")
        
    }else if (divisiblePar5 === 0 && divisiblePar3 !== 0){
        console.log("Buzz");
    }else{
       console.log(i) 
    }   
}//fin while