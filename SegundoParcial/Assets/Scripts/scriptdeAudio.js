
 

function OnTriggerEnter (other : Collider) {
    if(other.name == "First Person Controller"){
    	if(GeneralVars.audioPlays ==1){
    		audio.Stop();
    		GeneralVars.audioPlays = 0;
    	}else{
        	audio.Play();  
        	GeneralVars.audioPlays = 1;  
        }
    }
}