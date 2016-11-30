function nomeCognome(form) {
	var nome = form.campo1.value;
	var cognome = form.campo2.value;
	var newDiv = document.createElement('div');
	newDiv.innerHTML = "<BR>" + nome + " " + cognome;
	newDiv.innerHTML += "<BR><B>" + nome + " " + cognome + "</B>";
	newDiv.innerHTML += "<BR><I>" + nome + " " + cognome + "</I>";
	document.body.appendChild(newDiv);
}

function calcoli(form) {
	var num1 = parseInt(form.campo1.value);
	var num2 = parseInt(form.campo2.value);
	var newDiv = document.createElement('div');
	newDiv.innerHTML = "<BR>" + (num1 + num2);
	newDiv.innerHTML += "<BR>" + (num1 * num2);
	newDiv.innerHTML += "<BR>" + (num1 / num2);
	document.body.appendChild(newDiv);
}

function esercizio2(form) {
	var sesso = form.sesso.value;
	var compleanno = new Date(form.compleanno.value);
	if (compleanno == "") {
		alert("Inserire una data di nascita!");
		return;
	}

	if (sesso == "M") {
		document.body.style.background = "lightblue";
	} else {
		document.body.style.background = "lightpink";
	}

	var newDiv = document.createElement('div');
	newDiv.innerHTML = "<BR>Hai " + calcolaEta(compleanno, false) + " anni" + (calcolaEta(compleanno, true)==0?"":" e " + calcolaEta(compleanno, true) + " mesi!");
	document.body.appendChild(newDiv);
	if ((compleanno.getDate() + "/" + compleanno.getMonth()) == (new Date().getDate() + "/" + new Date().getMonth())) {
		alert("A U G U R I ! ! !");
	}
}

function calcolaEta(data, isMonth) {
	var oggi = new Date();
	var compleanno = new Date(data);

	if (!isMonth) {
		if ((oggi.getMonth() - compleanno.getMonth()) == 0) {
			if ((oggi.getDate() - compleanno.getDate()) >= 0) {
				return (oggi.getFullYear() - compleanno.getFullYear());
			} else {
				return (oggi.getFullYear() - compleanno.getFullYear())-1;
			}
		} else if ((oggi.getMonth() - compleanno.getMonth()) > 0){
			return (oggi.getFullYear() - compleanno.getFullYear());
		} else {
			return (oggi.getFullYear() - compleanno.getFullYear())-1;
		}
	} else {
		if ((oggi.getMonth() - compleanno.getMonth()) == 0) {
			if ((oggi.getDate() - compleanno.getDate()) >= 0) {
				return (oggi.getMonth() - compleanno.getMonth());
			} else {
				return 1+compleanno.getMonth()-(compleanno.getMonth() - oggi.getMonth());
			}
		} else if ((oggi.getMonth() - compleanno.getMonth()) > 0){
			return (oggi.getMonth() - compleanno.getMonth());
		} else {
			return 1+compleanno.getMonth()-(compleanno.getMonth() - oggi.getMonth());
		}
	}
}
