//ScriptdeRecoleccion.js

function OnTriggerEnter (other : Collider) {
    if(other.name == "First Person Controller"){
        GeneralVars.puntos +=10; 
        if(this.name == "Foto"){
        	Application.LoadLevel("Win");
        }
        else
        	Destroy (gameObject);     
    }
}

function Update(){
	transform.Rotate(Vector3.one * 3, Space.World);
}
