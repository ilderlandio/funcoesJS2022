// function pessoa(){
//     this.contador = 0; 

//     setInterval(function(){
//         this.contador++;
//     console.log(this.contador);
//     },1000);
// }

// new pessoa; // ao criar a instância, automaticamente a função é chamada
// // no caso, deve aparecer NaN, pois o this do setInterval(), não é o mesmo de pessoa()

/* ----------------------------------------------------------------- */

// resolvendo com o bind 

// function pessoa(){
//     this.contador = 0; 

//     setInterval(function(){
//         this.contador++;
//     console.log(this.contador);
//     }.bind(this),1000);
// }

// new pessoa; 

/* ----------------------------------------------------------------- */

// // Ou então, cria uma constante e atribui a ela o this

// function pessoa(){
//     this.contador = 0; 
//     self = this; 
//     setInterval(function(){
//         self.contador++;
//     console.log(self.contador);
//     },1000);
// }

// new pessoa; 


/* ----------------------------------------------------------------- */

// o JS 6 criou uma função nova que resolve isso, o arrow function, ou função de seta. 

// function pessoa(){
//     this.contador = 0; 

//     setInterval(() => {
//         this.contador++;
//     console.log(this.contador);
//     },1000);
// }

// new pessoa; 



/* ----------------------------------------------------------------- */

// Ou ainda, não mexa no this

function pessoa(){
    contador = 0; 

    setInterval(function(){
        contador++;
    console.log(contador);
    },1000);
}

new pessoa; 