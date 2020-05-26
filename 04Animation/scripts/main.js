

// // changing individual properties with code and using setInterval
var rotationSpeed = 0.01;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
	myOtherBox.object3D.rotation.x -= rotationSpeed*2;

	myOtherBox.object3D.rotation.y += rotationSpeed*2;
    myOtherBox.object3D.rotation.z += rotationSpeed*2;

	console.log(myOtherBox.object3D.rotation.x);
	//return 1 - pow(1 - rotationSpeed, 3);
}

setInterval(spin, 16); //equivalent to 60 fps