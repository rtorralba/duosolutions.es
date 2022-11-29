// JavaScript Document
positionIt = function() {
	if( document.getElementById ) {
		// Get a reference to divCentrado and measure its width and height.
		var div = document.getElementById( "pagina" );
		var divWidth = div.offsetWidth ? div.offsetWidth : div.style.width ? parseInt( div.style.width ) : 0;
		var divHeight = div.offsetHeight ? div.offsetHeight :  div.style.height ? parseInt( div.style.height ) : 0;
		
		// Calculating setX and setX so the div will be centered in the viewport.
		var setX = ( getViewportWidth() - divWidth ) / 2;
		var setY = ( getViewportHeight() - divHeight ) / 2;
		
		// If setX or setY have become smaller than 0, make them 0.
		if( setX < 0 ) setX = 0;
		if( setY < 0 ) setY = 0;
		
		// Position the div in the center of the page and make it visible.
		div.style.left = setX + "px";
		div.style.top = setY + "px";
		div.style.visibility = "visible";
	}
};

getViewportWidth = function() {
	var width = 0;
	if( document.documentElement && document.documentElement.clientWidth ) {
		width = document.documentElement.clientWidth;
	}
	else if( document.body && document.body.clientWidth ) {
		width = document.body.clientWidth;
	}
	else if( window.innerWidth ) {
		width = window.innerWidth - 18;
	}
	return width;
};

getViewportHeight = function() {
	var height = 0;
	if( document.documentElement && document.documentElement.clientHeight ) {
		height = document.documentElement.clientHeight;
	}
	else if( document.body && document.body.clientHeight ) {
		height = document.body.clientHeight;
	}
	else if( window.innerHeight ) {
		height = window.innerHeight - 18;
	}
	return height;
};

window.onload = positionIt;
window.onresize = positionIt;

function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}
