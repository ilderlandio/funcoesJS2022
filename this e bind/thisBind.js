const pessoa = {
    saudacao: "Bom dia",
    saudar(){ // método do objeto pessoa JS 6
        console.log(this.saudacao);
        // se tirar o this, não acessa 
    }
}
pessoa.saudar(); // acesso ok

 const falar = pessoa.saudar; // armazena a função saudar na variável falar
 falar() // indefined

// // solução com bind

const falarBind = pessoa.saudar.bind(pessoa); 
falarBind(); // funciona, acesso ok
// falarBind virou função, pois recebeu uma, quem possibilitou isso foi o bind