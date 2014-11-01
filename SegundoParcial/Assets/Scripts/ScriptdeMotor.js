//ScriptdeMotor
var health: int;
private var healthLevel: GameObject;

function Awake(){
      healthLevel=GameObject.Find("Score");
      }
      
function Start(){
      health=100;
      healthLevel.guiText.text=health.ToString();
      }
