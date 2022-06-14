import {GLTFLoader} from "GLTFLoader";
import * as THREE from "three";

let scene = new THREE.Scene();
let renderer = new THREE.WebGL1Renderer({
    canvas: document.querySelector("#canvas"),
    alpha: true,
    antialias: true
})
renderer.outputEncoding = THREE.sRGBEncoding;

let camera = new THREE.PerspectiveCamera(30, 1);
camera.position.set(0, 0, 5);

//scene.background = new THREE.Color(0x000000, 0);
let light = new THREE.DirectionalLight(0xffffff, 5);
light.position.set(0, 0.1, .2);
scene.add(light);

let loader = new GLTFLoader();
loader.load("../texture/scene.gltf", (gltf) => {
    scene.add(gltf.scene);
    renderer.render(scene, camera);
    function animate() {
        requestAnimationFrame(animate)
        let target = document.querySelector("#canvasOutput");
        let targetX = target.getAttribute("data-coordinate_x");
        console.log( gltf.scene.rotation.y)
        if (targetX > 80) {
            gltf.scene.rotation.y += 0.01;
            if (gltf.scene.rotation.y >= 1)
                gltf.scene.position.y = 1;
        }
        else {
            gltf.scene.rotation.y -= 0.01;
            if (gltf.scene.rotation.y <= -1)
                gltf.scene.position.y = -1;
        }
        renderer.render(scene, camera);
    }
    animate();
});