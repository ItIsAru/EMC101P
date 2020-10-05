//Setting up the scene, camera, and render
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera 
(50,
window.innerWidth / window.innerHeight,
0.1,
1000);
//Camera positions and angles
camera.position.x = -45;
camera.position.y = 30;
camera.position.z = 30;
camera.rotation.x = -.5;
camera.rotation.y = -.9;
camera.rotation.z = -.41;

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor("#152238");
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

renderer.sortObjects = false;

//Changes size per refresh
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth,window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectMatrix();
})

///////////////////////////////////////////////////////////////////////////////////////////////////
//Floor
///////////////////////////////////////////////////////////////////////////////////////////////////

//first floor
const firstFloorGeo = new THREE.BoxGeometry(30, 1, 30);
const firstFloorMat = new THREE.MeshPhysicalMaterial({color: 0x404040});
const firstFloor = new THREE.Mesh(firstFloorGeo, firstFloorMat);
firstFloor.position.x = 0.00;
firstFloor.position.y = 0.5;
firstFloor.position.z = 0;
firstFloor.rotation.x = 0.0;
firstFloor.rotation.y = 0.0;
firstFloor.rotation.z = 0.0;
scene.add(firstFloor);

//second floor
const secondFloorGeo = new THREE.BoxGeometry(13, 1, 29);
const secondFloorMat = new THREE.MeshPhysicalMaterial({color: 0x404040});
const secondFloor = new THREE.Mesh(secondFloorGeo, secondFloorMat);
secondFloor.position.x = 7.833;
secondFloor.position.y = 10.932;
secondFloor.position.z = 0;
secondFloor.rotation.x = 0.0;
secondFloor.rotation.y = 0.0;
secondFloor.rotation.z = 0.0;
scene.add(secondFloor);

///////////////////////////////////////////////////////////////////////////////////////////////////
//Doors
///////////////////////////////////////////////////////////////////////////////////////////////////

//first door - 1stfloor
const firstDoorGeo = new THREE.BoxGeometry(1.5, 8, 4);
const firstDoorMat = new THREE.MeshPhysicalMaterial({color: 0xc78e56});
const firstDoor = new THREE.Mesh(firstDoorGeo, firstDoorMat);
firstDoor.position.x = -14.253;
firstDoor.position.y = 4.818;
firstDoor.position.z = 2.082;
scene.add(firstDoor);

//second door - 2ndfloor
const secondDoorGeo = new THREE.BoxGeometry(4, 8, 1.5);
const secondDoorMat = new THREE.MeshPhysicalMaterial({color: 0xc78e56});
const secondDoor = new THREE.Mesh(secondDoorGeo, secondDoorMat);
secondDoor.position.x = 3.861;
secondDoor.position.y = 15.377;
secondDoor.position.z = 0.341;
scene.add(secondDoor);

///////////////////////////////////////////////////////////////////////////////////////////////////
//Grey Wall
///////////////////////////////////////////////////////////////////////////////////////////////////

//first grey wall - left
const firstGreyWallGeo = new THREE.BoxGeometry(30, 10, 1);
const firstGreyWallMat = new THREE.MeshPhysicalMaterial({color: 0x708090});
const firstGreyWall = new THREE.Mesh(firstGreyWallGeo, firstGreyWallMat);
firstGreyWall.position.x = 0;
firstGreyWall.position.y = 5.803;
firstGreyWall.position.z = -14.500;
scene.add(firstGreyWall);

//second grey wall - back
const secondGreyWallGeo = new THREE.BoxGeometry(1, 14, 30);
const seconGreyWallMat = new THREE.MeshPhysicalMaterial({color: 0x708090});
const secondGreyWall = new THREE.Mesh(secondGreyWallGeo, seconGreyWallMat);
secondGreyWall.position.x = 15;
secondGreyWall.position.y = 7;
secondGreyWall.position.z = 0;
scene.add(secondGreyWall);

//third grey wall - right back
const thirdGreyWallGeo = new THREE.BoxGeometry(15, 14, 1);
const thirdGreyWallMat = new THREE.MeshPhysicalMaterial({color: 0x708090});
const thirdGreyWall = new THREE.Mesh(thirdGreyWallGeo, thirdGreyWallMat);
thirdGreyWall.position.x = 8;
thirdGreyWall.position.y = 6.956;
thirdGreyWall.position.z = 14.6;
scene.add(thirdGreyWall);

//fourth grey wall - rail
const fourthGreyWallGeo = new THREE.BoxGeometry(1, 4, 25);
const fourthGreyWallMat = new THREE.MeshPhysicalMaterial({color: 0x708090});
const fourthGreyWall = new THREE.Mesh(fourthGreyWallGeo, fourthGreyWallMat);
fourthGreyWall.position.x = 1;
fourthGreyWall.position.y = 12.002;
fourthGreyWall.position.z = 2.580;
scene.add(fourthGreyWall);

//fifth grey wall - right front
const fifthGreyWallGeo = new THREE.BoxGeometry(16, 10, 1);
const fifthGreyWallMat = new THREE.MeshPhysicalMaterial({color: 0x708090});
const fifthGreyWall = new THREE.Mesh(fifthGreyWallGeo, fifthGreyWallMat);
fifthGreyWall.position.x = -7.056;
fifthGreyWall.position.y = 5.840;
fifthGreyWall.position.z = 4.720;
scene.add(fifthGreyWall);

//sixth grey wall - top 1stfloor door
const sixthGreyWallGeo = new THREE.BoxGeometry(1, 2, 5);
const sixthGreyWallMat = new THREE.MeshPhysicalMaterial({color: 0x708090});
const sixthGreyWall = new THREE.Mesh(sixthGreyWallGeo, sixthGreyWallMat);
sixthGreyWall.position.x = -14.516;
sixthGreyWall.position.y = 9.852;
sixthGreyWall.position.z = 2.475;
scene.add(sixthGreyWall);

//seventh grey wall - side 1stfloor door
const seventhGreyWallGeo = new THREE.BoxGeometry(1, 10, 1);
const seventhGreyWallMat = new THREE.MeshPhysicalMaterial({color: 0x708090});
const seventhGreyWall = new THREE.Mesh(seventhGreyWallGeo, seventhGreyWallMat);
seventhGreyWall.position.x = -14.516;
seventhGreyWall.position.y = 5.865;
seventhGreyWall.position.z = -0.470;
scene.add(seventhGreyWall);

//eighth grey wall - 2ndfloor
const eighthGreyWallGeo = new THREE.BoxGeometry(14, 10, 1);
const eighthGreyWallMat = new THREE.MeshPhysicalMaterial({color: 0x708090});
const eighthGreyWall = new THREE.Mesh(eighthGreyWallGeo, eighthGreyWallMat);
eighthGreyWall.position.x = 7.627;
eighthGreyWall.position.y = 15.375;
eighthGreyWall.position.z = 0.341;
scene.add(eighthGreyWall);

///////////////////////////////////////////////////////////////////////////////////////////////////
//Glass Wall/Roof
///////////////////////////////////////////////////////////////////////////////////////////////////

//first glass wall - 1stfloor back
const firstGlassWallGeo = new THREE.BoxGeometry(0.5, 10, 10);
const firstGlassWallMat = new THREE.MeshLambertMaterial({color: 0xffffff, transparent: true, opacity: 0.5});
const firstGlassWall = new THREE.Mesh(firstGlassWallGeo, firstGlassWallMat);
firstGlassWall.position.x = 1.126;
firstGlassWall.position.y = 5.537;
firstGlassWall.position.z = 9.517;
scene.add(firstGlassWall);

//second glass wall - 1stfloor front
const secondGlassWallGeo = new THREE.BoxGeometry(1, 10, 13);
const secondGlassWallMat = new THREE.MeshLambertMaterial({color: 0xffffff, transparent: true, opacity: 0.5});
const secondGlassWall = new THREE.Mesh(secondGlassWallGeo, secondGlassWallMat);
secondGlassWall.position.x = -14.553;
secondGlassWall.position.y = 5.840;
secondGlassWall.position.z = -7.473;
scene.add(secondGlassWall);

//third glass wall - traingle roof
const thirdGlassWallGeo = new THREE.CylinderGeometry(12, 12, 1, 3);
const thirdGlassWallMat = new THREE.MeshLambertMaterial({color: 0xffffff, transparent: true, opacity: 0.5});
const thirdGlassWall = new THREE.Mesh(thirdGlassWallGeo, thirdGlassWallMat);
thirdGlassWall.position.x = -15.000;
thirdGlassWall.position.y = 16.857;
thirdGlassWall.position.z = -5.000;
thirdGlassWall.rotation.x = -1.55;
thirdGlassWall.rotation.y = 0;
thirdGlassWall.rotation.z = 1.55;
scene.add(thirdGlassWall);

//fourth glass wall - big right roof
const fourthGlassWallGeo = new THREE.BoxGeometry(15, 20, 0.5);
const fourthGlassWallMat = new THREE.MeshLambertMaterial({color: 0xffffff, transparent: true, opacity: 0.5});
const fourthGlassWall = new THREE.Mesh(fourthGlassWallGeo, fourthGlassWallMat);
fourthGlassWall.position.x = -7;
fourthGlassWall.position.y = 20;
fourthGlassWall.position.z = 0;
fourthGlassWall.rotation.x = -0.5;
scene.add(fourthGlassWall);

//fifth glass wall - small right roof
const fifthGlassWallGeo = new THREE.BoxGeometry(15, 10, 0.5);
const fifthGlassWallMat = new THREE.MeshLambertMaterial({color: 0xffffff, transparent: true, opacity: 0.5});
const fifthGlassWall = new THREE.Mesh(fifthGlassWallGeo, fifthGlassWallMat);
fifthGlassWall.position.x = 7;
fifthGlassWall.position.y = 24.5;
fifthGlassWall.position.z = -2.851;
fifthGlassWall.rotation.x = -0.5;
scene.add(fifthGlassWall);

///////////////////////////////////////////////////////////////////////////////////////////////////
//Roof
///////////////////////////////////////////////////////////////////////////////////////////////////

//Roof - left side
const roofGeo = new THREE.BoxGeometry(30, 20, 0.5);
const roofMat = new THREE.MeshPhysicalMaterial({color: 0x51361B});
const roof = new THREE.Mesh(roofGeo, roofMat);
roof.position.x = 0;
roof.position.y = 20.000;
roof.position.z = -10;
roof.rotation.x = 0.5;
scene.add(roof);

//triangle roof - back
const triRoofGeo = new THREE.CylinderGeometry(12, 12, 1, 3);
const triRoofMat = new THREE.MeshPhysicalMaterial({color: 0x51361B});
const triRoof = new THREE.Mesh(triRoofGeo, triRoofMat);
triRoof.position.x = 15.000;
triRoof.position.y = 16.857;
triRoof.position.z = -5;
triRoof.rotation.x = -1.55;
triRoof.rotation.y = 0;
triRoof.rotation.z = 1.55;
scene.add(triRoof);

//first plank - left1 (start at the front)
const firstPlankGeo = new THREE.BoxGeometry(2.00, 25.00, 1);
const firstPlankMat = new THREE.MeshPhysicalMaterial({color: 0x181008});
const firstPlank = new THREE.Mesh(firstPlankGeo, firstPlankMat);
firstPlank.position.x = -15.000;
firstPlank.position.y = 20.000;
firstPlank.position.z = -10.000;
firstPlank.rotation.x = 0.5;
scene.add(firstPlank);

//second plank - left2
const secondPlankGeo = new THREE.BoxGeometry(2.00, 25.00, 1);
const secondPlankMat = new THREE.MeshPhysicalMaterial({color: 0x181008});
const secondPlank = new THREE.Mesh(secondPlankGeo, secondPlankMat);
secondPlank.position.x = -10.000;
secondPlank.position.y = 20.000;
secondPlank.position.z = -10.000;
secondPlank.rotation.x = 0.5;
scene.add(secondPlank);

//third plank - left3
const thirdPlankGeo = new THREE.BoxGeometry(2.00, 25.00, 1);
const thirdPlankMat = new THREE.MeshPhysicalMaterial({color: 0x181008});
const thirdPlank = new THREE.Mesh(thirdPlankGeo, thirdPlankMat);
thirdPlank.position.x = -5.000;
thirdPlank.position.y = 20.000;
thirdPlank.position.z = -10.000;
thirdPlank.rotation.x = 0.5;
scene.add(thirdPlank);

//fourth plank - left4
const fourthPlankGeo = new THREE.BoxGeometry(2.00, 25.00, 1);
const fourthPlankMat = new THREE.MeshPhysicalMaterial({color: 0x181008});
const fourthPlank = new THREE.Mesh(fourthPlankGeo, fourthPlankMat);
fourthPlank.position.x = 0.000;
fourthPlank.position.y = 20.000;
fourthPlank.position.z = -10.000;
fourthPlank.rotation.x = 0.5;
scene.add(fourthPlank);

//fifth plank - left5
const fifthPlankGeo = new THREE.BoxGeometry(2.00, 25.00, 1);
const fifthPlankMat = new THREE.MeshPhysicalMaterial({color: 0x181008});
const fifthPlank = new THREE.Mesh(fifthPlankGeo, fifthPlankMat);
fifthPlank.position.x = 5.000;
fifthPlank.position.y = 20.000;
fifthPlank.position.z = -10.000;
fifthPlank.rotation.x = 0.5;
scene.add(fifthPlank);

//sixth plank - left6
const sixthPlankGeo = new THREE.BoxGeometry(2.00, 25.00, 1);
const sixthPlankMat = new THREE.MeshPhysicalMaterial({color: 0x181008});
const sixthPlank = new THREE.Mesh(sixthPlankGeo, sixthPlankMat);
sixthPlank.position.x = 10.000;
sixthPlank.position.y = 20.000;
sixthPlank.position.z = -10.000;
sixthPlank.rotation.x = 0.5;
scene.add(sixthPlank);

//seventh plank - left7
const seventhPlankGeo = new THREE.BoxGeometry(2.00, 25.00, 1);
const seventhPlankMat = new THREE.MeshPhysicalMaterial({color: 0x181008});
const seventhPlank = new THREE.Mesh(seventhPlankGeo, seventhPlankMat);
seventhPlank.position.x = 15.000;
seventhPlank.position.y = 20.000;
seventhPlank.position.z = -10.000;
seventhPlank.rotation.x = 0.5;
scene.add(seventhPlank);

//eighth plank - right1 (start at the front)
const eighthPlankGeo = new THREE.BoxGeometry(2.00, 25.00, 1);
const eighthPlankMat = new THREE.MeshPhysicalMaterial({color: 0x181008});
const eighthPlank = new THREE.Mesh(eighthPlankGeo, eighthPlankMat);
eighthPlank.position.x = -15.000;
eighthPlank.position.y = 20.000;
eighthPlank.position.z = 0;
eighthPlank.rotation.x = -0.5;
scene.add(eighthPlank);

//ninth plank - right2
const ninthPlankGeo = new THREE.BoxGeometry(2.00, 25.00, 1);
const ninthPlankMat = new THREE.MeshPhysicalMaterial({color: 0x181008});
const ninthPlank = new THREE.Mesh(ninthPlankGeo, ninthPlankMat);
ninthPlank.position.x = -10.000;
ninthPlank.position.y = 20.000;
ninthPlank.position.z = 0;
ninthPlank.rotation.x = -0.5;
scene.add(ninthPlank);

//tenth plank - right3
const tenthPlankGeo = new THREE.BoxGeometry(2.00, 25.00, 1);
const tenthPlankMat = new THREE.MeshPhysicalMaterial({color: 0x181008});
const tenthPlank = new THREE.Mesh(tenthPlankGeo, tenthPlankMat);
tenthPlank.position.x = -5.000;
tenthPlank.position.y = 20.000;
tenthPlank.position.z = 0;
tenthPlank.rotation.x = -0.5;
scene.add(tenthPlank);

//eleventh plank - right4
const eleventhPlankGeo = new THREE.BoxGeometry(2.00, 25.00, 1);
const eleventhPlankMat = new THREE.MeshPhysicalMaterial({color: 0x181008});
const eleventhPlank = new THREE.Mesh(eleventhPlankGeo, eleventhPlankMat);
eleventhPlank.position.x = 0.000;
eleventhPlank.position.y = 20.000;
eleventhPlank.position.z = 0;
eleventhPlank.rotation.x = -0.5;
scene.add(eleventhPlank);

//twelfth plank - right5
const twelfthPlankGeo = new THREE.BoxGeometry(2.00, 13.00, 1);
const twelfthPlankMat = new THREE.MeshPhysicalMaterial({color: 0x181008});
const twelfthPlank = new THREE.Mesh(twelfthPlankGeo, twelfthPlankMat);
twelfthPlank.position.x = 5.000;
twelfthPlank.position.y = 25.219;
twelfthPlank.position.z = -2.869;
twelfthPlank.rotation.x = -0.5;
scene.add(twelfthPlank);

//thirteenth plank - right6
const thirteenthPlankGeo = new THREE.BoxGeometry(2.00, 13.00, 1);
const thirteenthPlankMat = new THREE.MeshPhysicalMaterial({color: 0x181008});
const thirteenthPlank = new THREE.Mesh(thirteenthPlankGeo, thirteenthPlankMat);
thirteenthPlank.position.x = 10.000;
thirteenthPlank.position.y = 25.219;
thirteenthPlank.position.z = -2.869;
thirteenthPlank.rotation.x = -0.5;
scene.add(thirteenthPlank);

//fourteenth plank
const fourteenthPlankGeo = new THREE.BoxGeometry(2.00, 25.00, 1);
const fourteenthPlankMat = new THREE.MeshPhysicalMaterial({color: 0x181008});
const fourteenthPlank = new THREE.Mesh(fourteenthPlankGeo, fourteenthPlankMat);
fourteenthPlank.position.x = 15.000;
fourteenthPlank.position.y = 20.000;
fourteenthPlank.position.z = 0;
fourteenthPlank.rotation.x = -0.5;
scene.add(fourteenthPlank);

///////////////////////////////////////////////////////////////////////////////////////////////////
//Stairs
///////////////////////////////////////////////////////////////////////////////////////////////////

//first stair (start from ground)
const firstStairGeo = new THREE.BoxGeometry(4, 0.5, 2);
const firstStairMat = new THREE.MeshPhysicalMaterial({color: 0x51361B});
const firstStair = new THREE.Mesh(firstStairGeo, firstStairMat);
firstStair.position.x = -12.318;
firstStair.position.y = 1.614;
firstStair.position.z = -7.108;
scene.add(firstStair);

//second stair
const secondStairGeo = new THREE.BoxGeometry(4, 0.5, 2);
const secondStairMat = new THREE.MeshPhysicalMaterial({color: 0x51361B});
const secondStair = new THREE.Mesh(secondStairGeo, secondStairMat);
secondStair.position.x = -12.318;
secondStair.position.y = 2.681;
secondStair.position.z = -9.074;
scene.add(secondStair);

//third stair
const thirdStairGeo = new THREE.BoxGeometry(4.00, 0.5, 4.00);
const thirdStairMat = new THREE.MeshPhysicalMaterial({color: 0x51361B});
const thirdStair = new THREE.Mesh(thirdStairGeo, thirdStairMat);
thirdStair.position.x = -12.321;
thirdStair.position.y = 3.748;
thirdStair.position.z = -12.000;
scene.add(thirdStair);

//fourth stair
const fourthStairGeo = new THREE.BoxGeometry(2, 0.5, 4);
const fourthStairMat = new THREE.MeshPhysicalMaterial({color: 0x51361B});
const fourthStair = new THREE.Mesh(fourthStairGeo, fourthStairMat);
fourthStair.position.x = -9.501;
fourthStair.position.y = 4.736;
fourthStair.position.z = -12.000;
scene.add(fourthStair);

//fifth stair
const fifthStairGeo = new THREE.BoxGeometry(2, 0.5, 4);
const fifthStairMat = new THREE.MeshPhysicalMaterial({color: 0x51361B});
const fifthStair = new THREE.Mesh(fifthStairGeo, fifthStairMat);
fifthStair.position.x = -7.502;
fifthStair.position.y = 5.734;
fifthStair.position.z = -12.000;
scene.add(fifthStair);

//sixth stair
const sixthStairGeo = new THREE.BoxGeometry(2, 0.5, 4);
const sixthStairMat = new THREE.MeshPhysicalMaterial({color: 0x51361B});
const sixthStair = new THREE.Mesh(sixthStairGeo, sixthStairMat);
sixthStair.position.x = -5.508;
sixthStair.position.y = 6.729;
sixthStair.position.z = -12.000;
scene.add(sixthStair);

//seventh stair
const seventhStairGeo = new THREE.BoxGeometry(2, 0.5, 4);
const seventhStairMat = new THREE.MeshPhysicalMaterial({color: 0x51361B});
const seventhStair = new THREE.Mesh(seventhStairGeo, seventhStairMat);
seventhStair.position.x = -3.495;
seventhStair.position.y = 7.734;
seventhStair.position.z = -12.000;
scene.add(seventhStair);

//eighth stair
const eighthStairGeo = new THREE.BoxGeometry(2, 0.5, 4);
const eighthStairMat = new THREE.MeshPhysicalMaterial({color: 0x51361B});
const eighthStair = new THREE.Mesh(eighthStairGeo, eighthStairMat);
eighthStair.position.x = -1.506;
eighthStair.position.y = 8.748;
eighthStair.position.z = -12.000;
scene.add(eighthStair);

//ninth stair
const ninthStairGeo = new THREE.BoxGeometry(2, 0.5, 4);
const ninthStairMat = new THREE.MeshPhysicalMaterial({color: 0x51361B});
const ninthStair = new THREE.Mesh(firstStairGeo, firstStairMat);
ninthStair.position.x = 0.499;
ninthStair.position.y = 9.777;
ninthStair.position.z = -12.000;
scene.add(ninthStair);

///////////////////////////////////////////////////////////////////////////////////////////////////
const ambience = new THREE.DirectionalLight(0xFFFFFF, 2);
ambience.position.set(40, 150.0, 50);
scene.add(ambience);

const frontLight = new THREE.PointLight(0xFFFFFF, .5);
frontLight.position.set(-45, 30, 30);
scene.add(frontLight);


//Proceed to render
renderer.render(scene, camera);