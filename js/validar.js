function Validar(){
    let cadena=document.getElementById("nombre").value;
	let filtroEmail= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	let msg="";
			
	//verificar Nombre
	if(cadena.length==0 || cadena.length>50)
		msg=msg+"\nEl Nombre está vacío o tiene mas de 50 letras";
	for(i=0;i<cadena.length;i++)
		if(!(cadena[i]>='a' && cadena[i]<='z' || cadena[i]>='A' && cadena[i]<='Z'))
		{	msg=msg+"\nEl Nombre debe tener solo letras";
			break;
		}
	//verificar Apellido
	cadena=document.getElementById("apellido").value;
	if(cadena.length==0 || cadena.length>30)
		msg=msg+"\nEl Apellido está vacío o tiene mas de 30 letras";
	for(i=0;i<cadena.length;i++)
		if(!(cadena[i]>='a' && cadena[i]<='z' || cadena[i]>='A' && cadena[i]<='Z'))
		{	msg=msg+"\nEl Apellido debe tener solo letras";
			break;
		}
	//verificar email
	cadena=document.getElementById("email").value;
	if (!filtroEmail.test(cadena))
		msg=msg+"\nEl E-mail es incorrecto";
	if(msg=="")
	{	alert("Datos enviados correctamente\nGracias por suscribirse! ");
     	return true;
	}
	else
	{	alert("Datos incorrectos: \n " + msg);
		return false;
	}
}
function Validar2(){
    let cadena=document.getElementById("nombre2").value;
	let filtroEmail= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	let msg="";
			
	//verificar Nombre
	if(cadena.length==0 || cadena.length>50)
		msg=msg+"\nEl Nombre está vacío o tiene mas de 50 letras";
	for(i=0;i<cadena.length;i++)
		if(!(cadena[i]>='a' && cadena[i]<='z' || cadena[i]>='A' && cadena[i]<='Z'))
		{	msg=msg+"\nEl Nombre debe tener solo letras";
			break;
		}
	//verificar email
	cadena=document.getElementById("email2").value;
	if (!filtroEmail.test(cadena))
		msg=msg+"\nEl E-mail es incorrecto";
	if(msg=="")
	{	alert("Datos enviados correctamente\nNos pondremos en contacto con usted para brindarle la información necesaria para adquirir el vehiculo seleccioando ");
     	return true;
	}
	else
	{	alert("Datos incorrectos: \n " + msg);
		return false;
	}
}

function Validar3(){
    let cadena=document.getElementById("nombre3").value;
	let filtroEmail= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	let msg="";
			
	//verificar Nombre
	if(cadena.length==0 || cadena.length>50)
		msg=msg+"\nEl Nombre está vacío o tiene mas de 50 letras";
	for(i=0;i<cadena.length;i++)
		if(!(cadena[i]>='a' && cadena[i]<='z' || cadena[i]>='A' && cadena[i]<='Z'))
		{	msg=msg+"\nEl Nombre debe tener solo letras";
			break;
		}
	//verificar email
	cadena=document.getElementById("email3").value;
	if (!filtroEmail.test(cadena))
		msg=msg+"\nEl E-mail es incorrecto";
	cadena=document.getElementById("message").value;
	if(cadena=="")
		msg=msg+"\nEl Mensaje de la consulta no puede estar vacío";
	if(msg=="")
	{	alert("Datos enviados correctamente\nNos pondremos en contacto con usted para intentar solucionar su consulta ");
     	return true;
	}
	else
	{	alert("Datos incorrectos: \n " + msg);
		return false;
	}
}