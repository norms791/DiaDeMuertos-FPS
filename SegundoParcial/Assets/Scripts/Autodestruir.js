//Autodestruir.js
var nTime : float = 30;
public var Aceleracion : float = 1;


function OnTriggerEnter (other : Collider) {
	if(other.name == "Calabaza"||other.name == "Frankenstein"||other.name == "Momia"||other.name == "Vampiro"){
    Destroy(this.gameObject);
   	} 
}
