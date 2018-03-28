
function openNav() {
	if (window.screen.width <=  667) {
		document.getElementById('side-menu').style.width = '100vw';		
	}
	else {
		document.getElementById('side-menu').style.width = '16vw';		
	}
}

function closeNav() {
	document.getElementById('side-menu').style.width = '0';
}

var terms = $("ul li");

	function rotateTerm() {

	 var ct = $("#rotate").data("term") || 0;

	 console.log(terms.eq([ct]).text());
	 
	  $("#rotate").data("term", 
	  	ct == terms.length -1 ? 0 : ct + 1).text(terms.eq([ct]).text())
	  .fadeIn().delay(3000).fadeOut(200, rotateTerm);

	}
	$(rotateTerm);
