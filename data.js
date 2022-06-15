function mascaraData1(campoData) {
	document.forms[0].data1.value = document.forms[0].data1.value.replace(/[^0-9/\.]+/g, "");
	let data = campoData.value;
	if (data.length == 2) {
		if (data <= 31) {
			data = data + "/";
			document.forms[0].data1.value = data;
			return true;
		}
		document.forms[0].data1.value = "";
	}
	if (data.length == 5) {
		console.log(data.substring(3, 5));
		if (data.substring(3, 5) <= 12) {
			data = data + "/";
			document.forms[0].data1.value = data;
			return true;
		}
		document.forms[0].data1.value = data.substring(0, 3);
	}
	if (data.length == 10) {
		const dataAtual = new Date();
		const anoAtual = dataAtual.getFullYear();
		if (data.substring(6, 10) < anoAtual) {
			document.forms[0].data1.value = data.substring(0, 6);
		}
	}
}

function mascaraData2(campoData) {
	document.forms[0].data2.value = document.forms[0].data2.value.replace(/[^0-9/\.]+/g, "");
	let data = campoData.value;
	if (data.length == 2) {
		if (data <= 31) {
			data = data + "/";
			document.forms[0].data2.value = data;
			return true;
		}
		document.forms[0].data2.value = "";
	}
	if (data.length == 5) {
		console.log(data.substring(3, 5));
		if (data.substring(3, 5) <= 12) {
			data = data + "/";
			document.forms[0].data2.value = data;
			return true;
		}
		document.forms[0].data2.value = data.substring(0, 3);
	}
	if (data.length == 10) {
		const dataAtual = new Date();
		const anoAtual = dataAtual.getFullYear();
		if (data.substring(6, 10) < anoAtual) {
			document.forms[0].data2.value = data.substring(0, 6);
		}
	}
}
