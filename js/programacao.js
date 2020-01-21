$(document).ready(function() {
	$.getJSON("js/programacao.json", function (data) {
		$("#email").html(data.email);
		$("#telefone").html(data.telefone);
		$("#morada").html(data.morada);
		$("#nome").html(data.nome)

	})
})