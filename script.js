$ ("#explicacion").on("click", function() {
	$(".img").fadeIn();

})

$ ("#quitar").on("click", function() {
	$(".img").fadeOut();

})

$ ("#comenzar").on("click", function() {
	$(".todo").fadeIn();
	$(".rojo").fadeIn();
	$(".azul").fadeIn();

})

$ ("#finalizar").on("click", function() {
	$(".todo").fadeOut();
	$(".rojo").fadeOut();
	$(".azul").fadeOut();

})

$ ("#borrar").on("click", function () {
	$("#resultados").empty();
})

$("form").on("submit", function(event) {
	event.preventDefault();

	function secuencia(pos) {
		var a = 0, b = 1, c = 1
		

		if (pos === 1){
			return b;
		} else {
			if (pos === 2) {
				return b;
			} else {
				for (var i = 2; i <= pos; i++){
				c = a + b;
				a = b;
				b = c;
				} return c;
			}	
		}
	}

	var pos = parseInt($("input#buscar").val());
	var result = secuencia(pos);

	if (pos >= 1477) {
			$("#resultados").append("<li>Ese numero es muy grande, prueba algo menor</li>");
	} else {
		if (result % 2 === 0) {
			$("#resultados").append("<li class=par> El numero que corresponde a la posicion " + pos + "  es: " + result + "</li>");
		} else {
			$("#resultados").append("<li class=impar> El numero que corresponde a la posicion " + pos + "  es: " + result + "</li>");
		}	
	}
})
