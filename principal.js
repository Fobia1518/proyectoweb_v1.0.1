const {cursos, opciones} = require('./datos');
const express = require('express');
const app = express();

function obtenerCursos(param)
{
	// setTimeout(function(){
	// 	console.log('El curso: ' + cursos[0].id + ' de ' + cursos[0].nombre + ' tiene una duracion de: ' + cursos[0].duracion + ' horas con un valor de: ' + cursos[0].valor);
	// },2000);

	// setTimeout(function(){
	// 	console.log('El curso: ' + cursos[1].id + ' de ' + cursos[1].nombre + ' tiene una duracion de: ' + cursos[1].duracion + ' horas con un valor de: ' + cursos[1].valor);
	// },4000);

	// setTimeout(function(){
	// 	console.log('El curso: ' + cursos[2].id + ' de ' + cursos[2].nombre + ' tiene una duracion de: ' + cursos[2].duracion + ' horas con un valor de: ' + cursos[2].valor);
	// },6000);

	if (param)
	{
		textoCursos = 'El id ingresado no existe'+ '<br /><br /> Los cursos existentes son: <br /><br />' + 'El curso: ' + cursos[0].id + ' de ' + cursos[0].nombre + ' tiene una duracion de: ' + cursos[0].duracion + ' horas con un valor de: ' + cursos[0].valor + '<br />' + 
					'El curso: ' + cursos[1].id + ' de ' + cursos[1].nombre + ' tiene una duracion de: ' + cursos[1].duracion + ' horas con un valor de: ' + cursos[1].valor + '<br />' + 
					'El curso: ' + cursos[2].id + ' de ' + cursos[2].nombre + ' tiene una duracion de: ' + cursos[2].duracion + ' horas con un valor de: ' + cursos[2].valor + '<br />';
	}
	else
	{
		textoCursos = 'El curso: ' + cursos[0].id + ' de ' + cursos[0].nombre + ' tiene una duracion de: ' + cursos[0].duracion + ' horas con un valor de: ' + cursos[0].valor + '<br />' + 
					'El curso: ' + cursos[1].id + ' de ' + cursos[1].nombre + ' tiene una duracion de: ' + cursos[1].duracion + ' horas con un valor de: ' + cursos[1].valor + '<br />' + 
					'El curso: ' + cursos[2].id + ' de ' + cursos[2].nombre + ' tiene una duracion de: ' + cursos[2].duracion + ' horas con un valor de: ' + cursos[2].valor + '<br />';
	}

	imprimir(textoCursos);

}
function imprimir(texto)
{
		app.get('/', function (req, res) {
			res.send(texto);
		});

		app.listen(3000);
}

const argv = require('yargs')
			.command ('inscribir', 'Inscripcion de estudiante a cursos', opciones)
			.argv

if(argv.id == null)
{
	obtenerCursos();
}
else
{
	const fs = require('fs');

	let buscarCurso = cursos.find( cursoEst => cursoEst.id == argv.i)

	if (buscarCurso != null)
	{
		// let crearArchivo =  (argv) => {
		// 	texto = 'El estudiante: ' + argv.n + "\r\n" +
		// 			'Cedula:' + argv.c + "\r\n" +
		// 			'Se ha matriculado \r\n' + 
		// 			'ID Curso: ' + buscarCurso.id + "\r\n" + 
		// 			'Nombre Curso: ' + buscarCurso.nombre + "\r\n" +  
		// 			'Duracion de: ' + buscarCurso.duracion + ' horas' + "\r\n" + 
		// 			'Valor de: ' + buscarCurso.valor;
		// 	fs.writeFile('inscribir.txt', texto, (err) => {
		// 		if (!err){
		// 			console.log('Se ha creado un archivo');
		// 		} 
		// 		else
		// 		{
		// 			console.log('No se ha creado un archivo');
		// 		}
		// 	});
		// }
		
		// crearArchivo(argv);

		texto = 'El estudiante: ' + argv.n + "<br />" +
					'Cedula:' + argv.c + "<br />" +
					'Se ha matriculado <br />' + 
					'ID Curso: ' + buscarCurso.id + "<br />" + 
					'Nombre Curso: ' + buscarCurso.nombre + "<br />" +  
					'Duracion de: ' + buscarCurso.duracion + ' horas' + "<br />" + 
					'Valor de: ' + buscarCurso.valor;

		imprimir(texto);
	}
	else
	{
		obtenerCursos(true);
	}
}	
