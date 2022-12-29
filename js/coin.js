let scene, camera, renderer;

document.addEventListener("DOMContentLoaded", function () {
    initializeScene()

    // Adding ambient lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.2))

    // Left point light
    const pointLightLeft = new THREE.PointLight(0xccc8c6, 1)
    pointLightLeft.position.set(-1, -1, 3)
    scene.add(pointLightLeft)

    // Right point light
    const pointLightRight = new THREE.PointLight(0xccc8c6, 1)
    pointLightRight.position.set(1, 2, 3)
    scene.add(pointLightRight)

    // Top point lights
    const pointLightTop = new THREE.PointLight(0xccc8c6, 1)
    pointLightTop.position.set(0, 3, 2)
    scene.add(pointLightTop)

    THREE.ImageUtils.crossOrigin = '';
    // IMPORTANT: This next line defines the texture of your coin. I didn't include the Minecraft texture (for copyright reasons) You should replace the url inside '.load(...)' with the path to your own image.
    const texture = new THREE.TextureLoader().load("../images/logo-coin.png");

    const material = new THREE.MeshStandardMaterial({
        map: texture,
        metalness: 0.8,
    })

    var geometry = new THREE.CylinderGeometry(3, 3, 0.1, 100);
    const mesh = new THREE.Mesh(geometry, material)

    scene.add(mesh)
    camera.position.set(0, 0, 7)


    mesh.rotation.x = 1.5;
    mesh.rotation.y = 0;
    mesh.rotation.z = 0;


    function animate() {
        mesh.rotation.z -= 0.02;


        requestAnimationFrame(animate)
        renderer.render(scene, camera)
    }

    animate()
})

function initializeScene() {
    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(75, 1, 0.2, 1000)
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(220, 220)
    document.getElementById("coin").appendChild(renderer.domElement);
}

window.onbeforeunload = function (event) {
    scene = null;
    camera = null;
};