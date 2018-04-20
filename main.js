"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var THREE = require("three");
var renderer = new THREE.WebGLRenderer(), scene = new THREE.Scene(), camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000), cubeMaterial = new THREE.MeshStandardMaterial({ color: 0x808080 }), cube = new THREE.Mesh(new THREE.BoxGeometry(1.0, 1.0, 1.0), cubeMaterial), light = new THREE.DirectionalLight(0xffffff, 1), sphereGeometry = new THREE.SphereBufferGeometry(5, 32, 32), sphereMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 }), sphere = new THREE.Mesh(sphereGeometry, sphereMaterial), planeGeometry = new THREE.PlaneBufferGeometry(20, 20, 32, 32), planeMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 }), plane = new THREE.Mesh(planeGeometry, planeMaterial);
var controls = new THREE.OrbitControls(camera);
console.warn(controls);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
scene.background = new THREE.Color(0x00FFFF);
cube.position.z = -5;
light.position.set(0.5, 1, 0.5);
light.shadow.mapSize.width = 512;
light.shadow.mapSize.height = 512;
light.shadow.camera.near = 1;
light.shadow.camera.far = 500;
sphere.castShadow = true;
cube.receiveShadow = true;
sphere.receiveShadow = false;
plane.receiveShadow = true;
scene.add(sphere);
scene.add(plane);
scene.add(light);
scene.add(cube);
function render() {
    renderer.render(scene, camera);
}
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.y += -0.01;
    cube.rotation.x += 0.01;
    //controls.update();
    render();
}
animate();
//# sourceMappingURL=main.js.map