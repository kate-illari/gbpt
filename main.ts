import * as THREE from "three";

let renderer = new THREE.WebGLRenderer(),
    scene = new THREE.Scene(),
    camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 1000 ),
    cubeMaterial = new THREE.MeshStandardMaterial( { color: 0x808080 } ),
    cube = new THREE.Mesh( new THREE.BoxGeometry( 1.0, 1.0, 1.0 ), cubeMaterial),
    light = new THREE.DirectionalLight( 0xffffff, 1 );


renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
scene.background = new THREE.Color(0x0FFFFF);

cube.position.z = -5;
light.position.set( 0.5, 1, 0.5 );


cube.receiveShadow = true;

scene.add( light );
scene.add( cube );

function render(){
    renderer.render(scene, camera);
}

function animate() {
    requestAnimationFrame( animate );
    cube.rotation.y += -0.01;
    cube.rotation.x += 0.01;
    render();
}

animate();

