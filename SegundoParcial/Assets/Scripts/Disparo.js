//Disparo.js
var Roca : Rigidbody;
var speed = 5;

function Update () {
	if ( Input.GetMouseButtonDown(0)) {
	clone = Instantiate(Roca, transform.position, transform.rotation);
	clone.velocity = transform.TransformDirection( Vector3 (0, 0, speed));
	Destroy (clone.gameObject, 1);
  }
}
