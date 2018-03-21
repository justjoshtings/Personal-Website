
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
