document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);

// LLamado a Ajax e imprimir resultados
function cargarNombres(e) {
	e.preventDefault();

	// Leer las variables

	const origen = document.getElementById('origen');
	const origenSeleccionado = origen.options[origen.selectedIndex].value;

	const genero = document.getElementById('genero');
	const generoSeleccionado = genero.options[genero.selectedIndex].value;

	const cantidad = document.getElementById('numero').value;

	let url = '';
	url += 'https://uinames.com/api/?';
	// Si hay origien agregarlo a la URl
	if (origenSeleccionado !== '') {
		url += `region=${origenSeleccionado}&`;
	}
	// Si hay un genero agregarlo a la URl
	if (generoSeleccionado !== '') {
		url += `gender=${generoSeleccionado}&`;
	}
	// Si hay una cantidad agregarlo a la URL
	if (cantidad !== '') {
		url += `amount=${cantidad}&`;
	}

	console.log(url);
}
