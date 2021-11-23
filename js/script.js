const container = document.querySelector (".container");

// algoritmo da 1 a 100 con multipli di 3 chiamati fizz, di 5 buzz e di 3 e 5 insieme chiamati fizzbuzz

for (let i = 1; i<=100 ; i++) {
    const element = document.createElement('div');
        element.classList.add('box');
        container.append(element);
        
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
        element.append("Fizzbuzz");
    }

    else if (i % 3 === 0){
        
        console.log ("Fizz");
        element.append("Fizz");

    }else if (i % 5 === 0){
        
        console.log("Buzz");
        element.append("Buzz");

    }else {
        console.log (i)
        element.append(i);
    }
}