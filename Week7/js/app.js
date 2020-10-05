

//Setting up the scene, camera, and render
let scene = new THREE.S
let camera = new THREE.PerspectiveCamera 
(50,
window.innerWidth / window.innerHeight,
0.1,
1000);
//Camera positions and angles
camera.position.x = 1.10;
camera.position.y = 3.20;
camera.position.z = 3.70;
camera.rotation.x = -0.35;
camera.rotation.y = 0.2;
camera.rotation.z = 0.1;
camera.scale.z = 1.6;

let renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor("#152238");
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

//Changes size per refresh
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth,window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectMatrix();
})


// For the desk of the table...
let tableDeskGeo = new THREE.BoxGeometry(4.00, 0.10, 2.00);
let tableDeskMat = new THREE.MeshPhongMaterial({color: 0xffd28c});
let tableDesk = new THREE.Mesh(tableDeskGeo, tableDeskMat);
scene.add(tableDesk);
tableDesk.position.y = 1.2;

// For the legs of the table...
//firstLeg
let firstLegGeo = new THREE.CylinderGeometry(0.10, 0.10, 1.20, 30);
let firstLegMat = new THREE.MeshToonMaterial({color: 0xffff00});
let firstLeg = new THREE.Mesh( firstLegGeo, firstLegMat);
firstLeg.position.x = 1.75;
firstLeg.position.y = 0.6;
firstLeg.position.z = 0.75;
scene.add(firstLeg);

//secondLeg
let secondLegGeo = new THREE.CylinderGeometry(0.10, 0.10, 1.20, 30);
let secondLegMat = new THREE.MeshToonMaterial({color: 0xffff00});
let secondLeg = new THREE.Mesh( secondLegGeo, secondLegMat);
secondLeg.position.x = 1.75;
secondLeg.position.y = 0.6;
secondLeg.position.z = -0.75;
scene.add(secondLeg);

//thirdLeg
let thirdLegGeo = new THREE.CylinderGeometry(0.10, 0.10, 1.20, 30);
let thirdLegMat = new THREE.MeshToonMaterial({color: 0xffff00});
let thirdLeg = new THREE.Mesh( thirdLegGeo, thirdLegMat);
thirdLeg.position.x = -1.75;
thirdLeg.position.y = 0.6;
thirdLeg.position.z = 0.75;
scene.add(thirdLeg);

//fourthLeg
let fourthLegGeo = new THREE.CylinderGeometry(0.10, 0.10, 1.20, 30);
let fourthLegMat = new THREE.MeshToonMaterial({color: 0xffff00});
let fourthLeg = new THREE.Mesh( fourthLegGeo, fourthLegMat);
fourthLeg.position.x = -1.75;
fourthLeg.position.y = 0.6;
fourthLeg.position.z = -0.75;
scene.add(fourthLeg);

//For Books...
//firstBook
let firstBookGeo = new THREE.BoxGeometry(0.40, 0.05, 0.60);
let firstBookMat = new THREE.MeshPhysicalMaterial({color: 0xffabab});
let firstBook = new THREE.Mesh(firstBookGeo, firstBookMat);
firstBook.position.x = 0.00;
firstBook.position.y = 1.3;
firstBook.position.z = 0.00;
firstBook.rotation.x = 0.0;
firstBook.rotation.y = 1.0;
firstBook.rotation.z = 0.0;
scene.add(firstBook);

//secondBook
let secondBookGeo = new THREE.BoxGeometry(0.40, 0.05, 0.60);
let secondBookMat = new THREE.MeshPhysicalMaterial({color: 0x6eb5ff});
let secondBook = new THREE.Mesh(secondBookGeo, secondBookMat);
secondBook.position.x = 0.00;
secondBook.position.y = 1.4;
secondBook.position.z = 0.00;
secondBook.rotation.x = 0.00;
secondBook.rotation.y = 0.70;
secondBook.rotation.z = 0.00;
scene.add(secondBook);

//thirdBook
let thirdBookGeo = new THREE.BoxGeometry(0.40, 0.05, 0.60);
let thirdBookMat = new THREE.MeshPhysicalMaterial({color: 0x97aa2ff});
let thirdBook = new THREE.Mesh(thirdBookGeo, thirdBookMat);
thirdBook.position.x = -0.40;
thirdBook.position.y = 1.31;
thirdBook.position.z = 0.17;
thirdBook.rotation.x = 0.00;
thirdBook.rotation.y = 0.00;
thirdBook.rotation.z = .2;
scene.add(thirdBook);


//For the monitor...
//Monitor Platform
let platformMonitorGeo = new THREE.CylinderGeometry(0.10, 0.30, 0.10, 30);
let platformMonitorMat = new THREE.MeshStandardMaterial({color: 0x151515});
let platformMonitor = new THREE.Mesh( platformMonitorGeo, platformMonitorMat);
platformMonitor.position.x = -0.80;
platformMonitor.position.y = 1.3;
platformMonitor.position.z = -0.50;
scene.add(platformMonitor);

//Monitor Stand
let standMonitorGeo = new THREE.CylinderGeometry(0.02, 0.02, 1.00, 30);
let standMonitorMat = new THREE.MeshStandardMaterial({color: 0x151515});
let standMonitor = new THREE.Mesh( standMonitorGeo, standMonitorMat);
standMonitor.position.x = -0.80;
standMonitor.position.y = 1.7;
standMonitor.position.z = -0.50;
scene.add(standMonitor);

//Back of the Monitor
let backMonitorGeo = new THREE.BoxGeometry(1.20, 0.60, 0.02);
let backMonitorMat = new THREE.MeshStandardMaterial({color: 0x151515});
let backMonitor = new THREE.Mesh(backMonitorGeo, backMonitorMat);
backMonitor.position.x = -0.80;
backMonitor.position.y = 2.20;
backMonitor.position.z = -0.40;
scene.add(backMonitor);

//Sscreen of the Monitor
let screenMonitorGeo = new THREE.BoxGeometry(1.75, 1.00, 0.03);
let screenMonitorMat = new THREE.MeshStandardMaterial({color: 0x2a2a2a});
let screenMonitor = new THREE.Mesh(screenMonitorGeo, screenMonitorMat);
screenMonitor.position.x = -0.80;
screenMonitor.position.y = 2.20;
screenMonitor.position.z = -0.40;
scene.add(screenMonitor);

//For the lamp
//Lamp Platform
let platformLampGeo = new THREE.CylinderGeometry(0.10, 0.30, 0.20, 30);
let platformLampMat = new THREE.MeshStandardMaterial({color: 0xffff00});
let platformLamp = new THREE.Mesh( platformLampGeo, platformLampMat);
platformLamp.position.x = 1.50;
platformLamp.position.y = 1.3;
platformLamp.position.z = -0.40;
scene.add(platformLamp);

//Lamp Stand
let standLampGeo = new THREE.CylinderGeometry(0.02, 0.02, 1.00, 30);
let standLampMat = new THREE.MeshStandardMaterial({color: 0xffff00});
let standLamp = new THREE.Mesh( standLampGeo, standLampMat);
standLamp.position.x = 1.50;
standLamp.position.y = 1.65;
standLamp.position.z = -0.40;
scene.add(standLamp);

//Head of the Lamp
let headLampGeo = new THREE.CylinderGeometry(0.10, 0.20, 0.28, 30);
let headLampMat = new THREE.MeshStandardMaterial({color: 0xffff00});
let headLamp = new THREE.Mesh( headLampGeo, headLampMat);
headLamp.position.x = 1.44;
headLamp.position.y = 2.10;
headLamp.position.z = -0.36;
headLamp.rotation.x = -1.5;
headLamp.rotation.y = -0.5;
headLamp.rotation.z = -1.2;
scene.add(headLamp);

//For Background
//Floor
let floorGeo = new THREE.BoxGeometry(8.00, 0.01, 8.00);
let floorMat = new THREE.MeshToonMaterial({color: 0x000a14});
let floor = new THREE.Mesh(floorGeo, floorMat);
floor.position.x = 0.00;
floor.position.y = 0.00;
floor.position.z = -2;
floor.rotation.x = 0.0;
floor.rotation.y = 0.0;
floor.rotation.z = 0.0;
scene.add(floor);

//Side Wall
let sideWallGeo = new THREE.BoxGeometry(0.01, 5, 8);
let sideWallMat = new THREE.MeshToonMaterial({color: 0x001f3d});
let sideWall = new THREE.Mesh(sideWallGeo, sideWallMat);
sideWall.position.x = -2.014;
sideWall.position.y = 2.5;
sideWall.position.z = 2.00;
sideWall.rotation.x = 0.0;
sideWall.rotation.y = 0.0;
sideWall.rotation.z = 0.0;
scene.add(sideWall);

//Back Wall
let backWallGeo = new THREE.BoxGeometry(8, 10, 0.10);
let backWallMat = new THREE.MeshToonMaterial({color: 0x001f3d});
let backWall = new THREE.Mesh(backWallGeo, backWallMat);
backWall.position.x = 0.00;
backWall.position.y = 0.0;
backWall.position.z = -2.00;
backWall.rotation.x = 0.0;
backWall.rotation.y = 0.0;
backWall.rotation.z = 0.0;
scene.add(backWall);

//For Light Sources
//Environmental Light / Ambience
let ambience = new THREE.PointLight(0x3F3FCD, 0.9);
ambience.position.set(0, 5.0, 0);
scene.add(ambience);

//Spotlight 
let spotLight = new THREE.SpotLight(0xfdfd96, 1.0, 3, .9, 0.6, .9);
spotLight.position.set(1.0,2.1, -0.3);
spotLight.castShadow = true; 
spotLight.target = thirdLeg;
scene.add(spotLight);

//Light at Lamp
let lampLight = new THREE.PointLight(0xfdfd96, 2);
lampLight.distance = 0.5;
lampLight.position.x = 1.0;
lampLight.position.y = 1.95;
lampLight.position.z = -0.3;
lampLight.castShadow = true;
scene.add(lampLight);

//Proceed to render
renderer.render(scene, camera);



