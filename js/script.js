

// algoritmo da 1 a 100 con multipli di 3 chiamati fizz, di 5 buzz e di 3 e 5 insieme chiamati fizzbuzz

for (let i = 1; i<=100 ; i++) {

    if (i % 3 === 0 && i % 5 === 0) {

        console.log("FizzBuzz");
    }

    else if (i % 3 === 0){
    
        console.log ("Fizz");

    }else if (i % 5 === 0){
        
        console.log("Buzz");
    }else {
        console.log (i)
    }
}