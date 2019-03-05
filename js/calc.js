const number = valor => document.getElementById('visor').value += valor;

window.addEventListener("load", () => {

	const calc = document.getElementById("calcular");

	calc.addEventListener("click", (event) => {

	let resultado = 0;

	resultado = document.getElementById('visor').value;
	document.getElementById('visor').value = '';
	document.getElementById('visor').value = eval(resultado);	

	});

})

//Desenvolvido com suporte da função nativa eval.
