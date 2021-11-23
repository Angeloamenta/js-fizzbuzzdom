const container = document.querySelector (".container");
// inserisco titolo all'interno del div creato
const body = document.querySelector (".bg-c");
const title = document.createElement('div')
title.classList.add('title-top');
body.prepend(title);
// con innerhtml possi inserire tag per creare un titolo h1
title.innerHTML = "<h1>" + "FizbuzzDOM" + "</h1>"
// algoritmo da 1 a 100 con multipli di 3 chiamati fizz, di 5 buzz e di 3 e 5 insieme chiamati fizzbuzz


// ricordarsi di mettere le informazioni a cascata per evitare di sovrascrivere
for (let i = 1; i<=100 ; i++) {
    const element = document.createElement('div');
        element.classList.add('box');
        container.append(element);
        
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
        element.append("Fizzbuzz");
        element.classList.add('red');
    }

    else if (i % 3 === 0){
        
        console.log ("Fizz");
        element.append("Fizz");
        element.classList.add('green')

    }else if (i % 5 === 0){
        
        console.log("Buzz");
        element.append("Buzz");
        element.classList.add('yellow')

    }else {
        console.log (i)
        element.append(i);
        element.classList.add('blue')
    }
}