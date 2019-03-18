//------------- Resultado --------------------
	function resultado() {
		var p1, p2, p3, p4, p5, p6, p7 ,p8, nota;

	// 1 pregunta 
		if (document.getElementById('p11').checked==true) {
			p1=1;
			document.getElementById('correcta11').style.backgroundColor = "green";
		}
		else if (document.getElementById('p12').checked==true) {
			p1=0;
			document.getElementById('incorrecta12').style.backgroundColor = "red";
			document.getElementById('correcta11').style.backgroundColor = "green";
		}
		else if (document.getElementById('p13').checked==true) {
			p1=0;
			document.getElementById('incorrecta13').style.backgroundColor = "red";
			document.getElementById('correcta11').style.backgroundColor = "green";
		}
		else if (document.getElementById('p14').checked==true) {
			p1=0;
			document.getElementById('incorrecta14').style.backgroundColor = "red";
			document.getElementById('correcta11').style.backgroundColor = "green";
		}
		else {
			p1=0;
			document.getElementById('correcta11').style.backgroundColor = "green";
		}
	// 2 pregunta 
		if (document.getElementById('p22').checked==true) {
			p2=1;
			document.getElementById('correcta22').style.backgroundColor = "green";
		}
		else if (document.getElementById('p21').checked==true) {
			p2=0;
			document.getElementById('incorrecta21').style.backgroundColor = "red";
			document.getElementById('correcta22').style.backgroundColor = "green";
		}
		else if (document.getElementById('p23').checked==true) {
			p2=0;
			document.getElementById('incorrecta23').style.backgroundColor = "red";
			document.getElementById('correcta22').style.backgroundColor = "green";
		}
		else if (document.getElementById('p24').checked==true) {
			p2=0;
			document.getElementById('incorrecta24').style.backgroundColor = "red";
			document.getElementById('correcta22').style.backgroundColor = "green";
		} 
		else {
			p2=0;
			document.getElementById('correcta22').style.backgroundColor = "green";
		}
	// 3 pregunta 
		if (document.getElementById('p33').checked==true) {
			p3=1;
			document.getElementById('correcta33').style.backgroundColor = "green";
		}
		else if (document.getElementById('p31').checked==true) {
			p3=0;
			document.getElementById('incorrecta31').style.backgroundColor = "red";
			document.getElementById('correcta33').style.backgroundColor = "green";
		}
		else if (document.getElementById('p32').checked==true) {
			p3=0;
			document.getElementById('incorrecta32').style.backgroundColor = "red";
			document.getElementById('correcta33').style.backgroundColor = "green";
		}
		else if (document.getElementById('p34').checked==true) {
			p3=0;
			document.getElementById('incorrecta34').style.backgroundColor = "red";
			document.getElementById('correcta33').style.backgroundColor = "green";
		}
		else {
			p3=0;
			document.getElementById('correcta33').style.backgroundColor = "green";
		}
	// 4 pregunta 
		if (document.getElementById('p44').checked==true) {
			p4=1;
			document.getElementById('correcta44').style.backgroundColor = "green";
		}
		else if (document.getElementById('p41').checked==true) {
			p4=0;
			document.getElementById('incorrecta41').style.backgroundColor = "red";
			document.getElementById('correcta44').style.backgroundColor = "green";
		}
		else if (document.getElementById('p43').checked==true) {
			p4=0;
			document.getElementById('incorrecta43').style.backgroundColor = "red";
			document.getElementById('correcta44').style.backgroundColor = "green";
		}
		else if (document.getElementById('p42').checked==true) {
			p4=0;
			document.getElementById('incorrecta42').style.backgroundColor = "red";
			document.getElementById('correcta44').style.backgroundColor = "green";
		}
		else {
			p4=0;
			document.getElementById('correcta44').style.backgroundColor = "green";
		}
	// 5 pregunta 
		if (document.getElementById('p55').checked==true) {
			p5=1;
			document.getElementById('correcta55').style.backgroundColor = "green";
		}
		else if (document.getElementById('p52').checked==true) {
			p5=0;
			document.getElementById('incorrecta52').style.backgroundColor = "red";
			document.getElementById('correcta55').style.backgroundColor = "green";
		}
		else if (document.getElementById('p53').checked==true) {
			p5=0;
			document.getElementById('incorrecta53').style.backgroundColor = "red";
			document.getElementById('correcta55').style.backgroundColor = "green";
		}
		else if (document.getElementById('p54').checked==true) {
			p5=0;
			document.getElementById('incorrecta54').style.backgroundColor = "red";
			document.getElementById('correcta55').style.backgroundColor = "green";
		}
		else {
			p5=0;
			document.getElementById('correcta55').style.backgroundColor = "green";
		}
	// 6 pregunta 
		if (document.getElementById('p66').checked==true) {
			p6=1;
			document.getElementById('correcta66').style.backgroundColor = "green";
		}
		else if (document.getElementById('p21').checked==true) {
			p6=0;
			document.getElementById('incorrecta61').style.backgroundColor = "red";
			document.getElementById('correcta66').style.backgroundColor = "green";
		}
		else if (document.getElementById('p63').checked==true) {
			p6=0;
			document.getElementById('incorrecta63').style.backgroundColor = "red";
			document.getElementById('correcta66').style.backgroundColor = "green";
		}
		else if (document.getElementById('p64').checked==true) {
			p6=0;
			document.getElementById('incorrecta64').style.backgroundColor = "red";
			document.getElementById('correcta66').style.backgroundColor = "green";
		} 
		else {
			p6=0;
			document.getElementById('correcta66').style.backgroundColor = "green";
		}
	// 7 pregunta 
		if (document.getElementById('p77').checked==true) {
			p7=1;
			document.getElementById('correcta77').style.backgroundColor = "green";
		}
		else if (document.getElementById('p71').checked==true) {
			p7=0;
			document.getElementById('incorrecta71').style.backgroundColor = "red";
			document.getElementById('correcta77').style.backgroundColor = "green";
		}
		else if (document.getElementById('p72').checked==true) {
			p7=0;
			document.getElementById('incorrecta72').style.backgroundColor = "red";
			document.getElementById('correcta77').style.backgroundColor = "green";
		}
		else {
			p7=0;
			document.getElementById('correcta77').style.backgroundColor = "green";
		}
	// 8 pregunta 
		if (document.getElementById('p88').checked==true) {
			p8=1;
			document.getElementById('correcta88').style.backgroundColor = "green";
		}
		else if (document.getElementById('p81').checked==true) {
			p8=0;
			document.getElementById('incorrecta81').style.backgroundColor = "red";
			document.getElementById('correcta88').style.backgroundColor = "green";
		}
		else if (document.getElementById('p82').checked==true) {
			p8=0;
			document.getElementById('incorrecta82').style.backgroundColor = "red";
			document.getElementById('correcta88').style.backgroundColor = "green";
		}
		else {
			p8=0;
			document.getElementById('correcta88').style.backgroundColor = "green";
		}

//----------- resultado ----------------------
	nota=p1+p2+p3+p4+p5+p6+p7+p8;
	alert(" Nota: " + nota + " de 8" );
	document.getElementById("Bienvenida").innerHTML = "Bienvenido al Quiz conseguiste: " + nota + " de 4";
	}
//------------- Drag and Drop ----------------
	function dragstart(caja, evento) {
	    // el elemento a arrastrar
	    event.dataTransfer.setData('Data', caja.id);
	}

	function drop(target, evento) {
	    // obtenemos los datos
	    var caja = event.dataTransfer.getData('Data');
	    // agregamos el elemento de arrastre al contenedor
	    target.appendChild(document.getElementById(caja));
	}
//------------- Resultado DD -----------------
	var caja1 = document.getElementById("caja1");
	var caja2 = document.getElementById("caja2");

	function DD (){
		//---------------------- Verificar -------------------------
		//---------------------- Resultado -------------------------
		document.getElementById("ResultadoDD").style.color = "black";
		document.getElementById("ResultadoDD").innerHTML = "Tu resultado es: ";
	}
