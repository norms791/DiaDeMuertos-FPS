//ScriptdeEnemigos.js
var interval : float=0.5; 
private var nextinterval : float=0.0; 

function OnTriggerEnter (other : Collider) {
    if(other.name == "First Person Controller"){
        GeneralVars.nSalud-=1;       
    }
    else if(other.name == "Roca(Clone)"){
         Destroy (gameObject);    
    }
   
}

function Update(){
	transform.Rotate(Vector3.one * 3, Space.World);
}

function OnTriggerStay (other : Collider) {
    if(other.name == "First Person Controller"){
        if (Time.time>nextinterval){
            nextinterval = Time.time + interval; 
            GeneralVars.nSalud-=1;
        }
    }
}