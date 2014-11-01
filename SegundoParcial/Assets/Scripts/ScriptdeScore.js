//ScriptdeScoreTXT.js
function Update () {
if (GeneralVars.nSalud > 0){
      this.guiText.text = "Vida " + GeneralVars.nSalud.ToString() +"%";
      }
      
    else{
    this.guiText.text = "Estas muerto ";
    Application.LoadLevel("GameOver");
      }      
} 
