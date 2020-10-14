//Saturn: AMONG US Edition c':
//I use index2.html for this

//Constants, Delta Time and Renderer
const SCENE = new THREE.Scene();
const CLOCK = new THREE.Clock();
const FOV = 75;
const NEAR = 0.1;
const FAR = 1000;
const MAXPARTICLES = 2000;
const RENDERER = new THREE.WebGLRenderer();
let deltaTime;

RENDERER.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(RENDERER.domElement);

// Camera Positions
let camera = new THREE.PerspectiveCamera(
  FOV,
  window.innerWidth / window.innerHeight,
  NEAR,
  FAR
);
camera.position.x = 0;
camera.position.y =0;
camera.position.z = 225;
camera.lookAt(new THREE.Vector3(0, 0, 0));

// Particles!! Note: I use TextureLoader so I map the particles with the image.
let particleTex = new THREE.TextureLoader().load(
  'images/Cyan.png'
)
let particles = new THREE.Geometry();
for (let i = 0; i < MAXPARTICLES; i++) {
  let particle = new THREE.Vector3(
    random(-300, 300),
    random(-10, 10),
    random(-200, 200)
  );
  particles.vertices.push(particle);
}
let particleMaterial = new THREE.PointsMaterial({
  map: particleTex,
  size: 4,
});
let particleSystem = new THREE.Points(particles, particleMaterial);
particleSystem.sortParticles = true;
SCENE.add(particleSystem);

// Generates a number
function random(min, max) {
    if (isNaN(max)) {``
      max = min;
      min = 0;
    }
    return Math.random() * (max - min) + min;
  }

//Saturn Sphere... I also use texture loader and const because it is stuck in one place.
const SATURNTEX = new THREE.TextureLoader().load(
    'images/saturnTexture.jpg');
const SATURNGEO = new THREE.SphereGeometry(100, 50, 50);
const SATURNMAT = new THREE.MeshBasicMaterial({map: SATURNTEX});
const SATURN = new THREE.Mesh(SATURNGEO, SATURNMAT);
SCENE.add(SATURN);

//Rendering of particles. I used Date*now() multiplies by 0.0002 to loop the particles.
function render() {
    requestAnimationFrame(render);
  
    deltaTime = CLOCK.getDelta();
    
    particleSystem.rotation.y = Date.now() * 0.0002;
    RENDERER.render(SCENE, camera);
  }
  render();

//Resizing
function resize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  RENDERER.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener("resize", resize, false);