function toFahrenheit()
{
var val =document.getElementById("input").value;
	var fahr= 9/5*val+32;
    document.getElementById("para").innerHTML = fahr.toFixed(2) + "F" ;
    
	}
	function toCelsius()
	{
	
	var val = document.getElementById("input").value;
	var cel = (val-32)*5/9;
	document.getElementById("para").innerHTML = cel.toFixed(2) + "C" ;
	}
	
	function toMeters()
	{
	var val = document.getElementById("input").value;
	var meters = val*0.3048;
	document.getElementById("para").innerHTML = meters.toFixed(2) + " m" ;
	}
	function toFeet()
	{
	var val =document.getElementById("input").value;
	var feet =  val/0.3048;
	document.getElementById("para").innerHTML = feet.toFixed(2) + " f" ;
	}
	function toCentimeters()
	{
	var val =document.getElementById("input").value;
	var cent =2.54*val;
	document.getElementById("para").innerHTML = cent.toFixed(2) + " cm" ;
	}
	function toInches()
	{
	var val = document.getElementById("input").value;
	var inc = 0.393*val;
	document.getElementById("para").innerHTML = inc.toFixed(2) + " inches" ;
	}
	function toKilograms()
	{
	var val =document.getElementById("input").value;
	var kg = 0.453592/val;
	document.getElementById("para").innerHTML = kg.toFixed(2) + " kg" ;
	}
	function toPounds()
	{
	var val = document.getElementById("input").value;
	var pounds = 2.2*val;
	document.getElementById("para").innerHTML = pounds.toFixed(2) + " lb" ;
	}
	function Clear()
	{
	document.getElementById("input").value="";
	document.getElementById("para").innerHTML="";
	document.getElementById("input").focus();
	}