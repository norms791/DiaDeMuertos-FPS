//ScriptdeScoreTXT.js
function Update () {
if (GeneralVars.nSalud > 0){
		//Actualiza la vida
		if(this.name == "Score")
	      this.guiText.text = "Vida " + GeneralVars.nSalud.ToString() +"%"; 
      	else if(this.name == "Puntos")
      	  this.guiText.text = "Puntos " + GeneralVars.puntos.ToString() ; 
      }
      
    else{
    Application.LoadLevel("GameOver");
      }      
} 
