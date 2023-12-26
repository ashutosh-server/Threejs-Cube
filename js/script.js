const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 50;  

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
scene.add(ambientLight);


// const pointlight=new THREE.PointLight(0xffffff,1,100)
const geometry = new THREE.BoxGeometry(10, 10, 15);
// const geometry = new THREE.CapsuleGeometry(1, 1, 50, 80);
// const geometry = new THREE.CircleGeometry(10, 24, 32);
// const geometry = new THREE.ConeGeometry(2, 4, 320);
// const geometry = new THREE.CylinderGeometry(2,2, 2, 320);
// const material = new THREE.MeshBasicMaterial({ color: "red" });
const material = new THREE.MeshStandardMaterial({ color: "red" });
// const cube = new THREE.Mesh(geometry, material);
const cube = new THREE.Line(geometry, material);


scene.add(cube);

// cube.rotation.x = 10;
// cube.rotation.x = Math.PI * (45 / 180.0);

// renderer.render(scene, camera);

let flag = true;

function animate() {
  if (cube.position.x > 4 ) {
    flag = false;
  } else if (cube.position.x < -4) {
    flag = true;
  }
  if (flag) {
    cube.position.x += 0.1;
  } else {
    cube.position.x -= 0.1;
}
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;
  renderer.render(scene, camera);

  requestAnimationFrame(animate);
}

// let q = 0;
// function animate() {
//   cube.position.x = 3 * Math.sin(q += 0.01);
//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;
//     cube.rotation.z += 0.01;
//   renderer.render(scene, camera);

//   requestAnimationFrame(animate);
// }


// setInterval(animate,1000)

animate();
