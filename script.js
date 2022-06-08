const soma = function(x,y){
		return x + y; 
	} 
	const mostrarResult = function(a,b,operacao=soma){
			console.log(operacao(a,b));
		}
	mostrarResult(3,5);
	mostrarResult(6,3,soma);
	mostrarResult(4,8,function(x,y){return x+y;});
	mostrarResult(5,8,(x,y) => x+y); 
