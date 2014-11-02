 var vela : GUITexture;
 var pan : GUITexture;
 
function start(){
	Screen.lockCursor = false;
}

function OnMouseEnter(){
	if(name=="botonsalir"){
		pan.transform.position = Vector3(0.5, 0.5, 3);
	}
	
	if(name=="botonjugar"||name=="botonmenu"){
		vela.transform.position = Vector3(0.5, 0.5, 3);
	}
}

function OnMouseExit(){
	if(name=="botonsalir"){
		pan.transform.position = Vector3(0.5, 0.5, 0);
	}
	
	if(name=="botonjugar"||name=="botonmenu"){
		vela.transform.position = Vector3(0.5, 0.5, 0);
	}
}

function OnMouseDown(){
	if(name=="botonsalir"){
		Application.Quit();
	}
	if(name=="botonmenu"){
		Application.LoadLevel("HomeMenu");
	}
	if(name=="botonjugar"){
		Application.LoadLevel("Level1");
	}
}