/**
 * 
 */

const hoy = new Date();

 var hoyT = 
  dia = 23, 
  mes = 2,
  anyo = 2024;
  
  var calendario = {
	  dia : hoy.getDate(),
	  mes : hoy.getMonth(),
	  anyo : hoy.getFullYear(),
  };
  
  if (calendario === hoyT){
	  document.write("Es hoy");
  }
  else (document.write("Aún falta"))
	    