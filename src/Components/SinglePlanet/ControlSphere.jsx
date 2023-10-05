import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import vertexShader from '../../Shaders/vertex.glsl';
import fragmentShader from '../../shaders/fragment.glsl';
import gsap from 'gsap';
import { GrWindowsLegacy } from 'react-icons/gr';

const ControlSphere = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const animationFrameID = useRef(null);
  const popUpRef = useRef(null);

  const spots = [
    {
      name: 'Olympus Mons',
      position: { lat: 23, lng: 120 },
      img: 'https://media.sciencephoto.com/image/r3500195/800wm',
    },
  ];

  useEffect(() => {
    if (containerRef.current && canvasRef.current && popUpRef.current) {
      // Create a scene
      const radiusEarth = 5;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        containerRef.current.offsetWidth / containerRef.current.offsetHeight,
        0.1,
        1000
      );

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        canvas: canvasRef.current,
      });

      renderer.setSize(
        containerRef.current.offsetWidth,
        containerRef.current.offsetHeight
      );

      camera.position.z = 10;

      // Create a rotating planet
      const sphere = new THREE.Mesh(
        new THREE.SphereGeometry(5, 50, 50),
        new THREE.ShaderMaterial({
          vertexShader,
          fragmentShader,
          uniforms: {
            globeTexture: {
              value: new THREE.TextureLoader().load('/Texture/mars.jpg'),
            },
          },
        })
      );
      scene.add(sphere);
      sphere.rotation.y = -Math.PI / 2;

      // Create orbit controls
      const controls = new OrbitControls(camera, renderer.domElement);

      const group = new THREE.Group();
      group.add(sphere);
      scene.add(group);

      const starGeometry = new THREE.BufferGeometry();
      const starMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
      });

      const starVertices = [];
      for (let i = 0; i < 5000; i++) {
        const x = (Math.random() - 0.5) * 2000;
        const y = (Math.random() - 0.5) * 2000;
        const z = -Math.random() * 2000;

        starVertices.push(x, y, z);
      }

      starGeometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(starVertices, 3)
      );

      const stars = new THREE.Points(starGeometry, starMaterial);
      scene.add(stars);

      function createMarks(spots) {
        spots.forEach((spot) => {
          const lat = spot.position.lat;
          const lng = spot.position.lng;

          const mark = new THREE.Mesh(
            new THREE.BoxGeometry(0.9, 0.6, 0.1),
            new THREE.MeshBasicMaterial({
              color: '#298ebd',
            })
          );

          const latitude_rad = (lat * Math.PI) / 180;
          const longitude_rad = (lng * Math.PI) / 180;

          let x =
            radiusEarth * Math.cos(latitude_rad) * Math.sin(longitude_rad);
          let z =
            radiusEarth * Math.cos(latitude_rad) * Math.cos(longitude_rad);
          let y = radiusEarth * Math.sin(latitude_rad);

          mark.position.x = x;
          mark.position.y = y;
          mark.position.z = z;

          mark.lookAt(0, 0, 0); //whre the boxs should be faced
          // mark.geometry.applyMatrix4(
          //   new THREE.Matrix4().makeTranslation(0, 0, -zScale / 2)
          // );

          group.add(mark);

          gsap.to(mark.scale, {
            x: 1.1,
            y: 1.2,
            z: 1.4,
            duration: 2,
            yoyo: true,
            repeat: -1, //means Infinity,
            ease: 'linear',
            delay: Math.random(),
          });

          mark.name = spot.name;
          mark.img = spot.img;
          mark.type = 'mark';
        });
      }
      createMarks(spots);

      const mouse = { x: undefined, y: undefined };
      const raycaster = new THREE.Raycaster();

      const IsData = {
        state: false,
        country: '',
      };

      const popUpEl = popUpRef.current;

      const animate = () => {
        group.rotation.y += 0.0005;
        renderer.render(scene, camera);
        animationFrameID.current = requestAnimationFrame(animate);

        raycaster.setFromCamera(mouse, camera);

        // calculate objects intersecting the picking ray

        const intersects = raycaster.intersectObjects(
          group.children.filter((mesh) => {
            if (mesh.type) return mesh.type === 'mark';
          })
        );

        gsap.set(popUpEl, {
          display: 'none',
        });

        IsData.state = false;
        IsData.country = '';

        for (let i = 0; i < intersects.length; i++) {
          const box = intersects[i].object;

          gsap.set(popUpEl, {
            display: 'block',
          });

          popUpEl.querySelector('#title').textContent = box.name;
          popUpEl.querySelector('#img').src = box.img;

          IsData.state = true;
          IsData.country = box.country;
        }
      };

      animate();

      const mouseMove = (e) => {
        const offset = containerRef.current.getBoundingClientRect().top;
        mouse.x = (e.clientX / innerWidth) * 2 - 1;
        mouse.y = -((e.clientY - offset) / innerHeight) * 2 + 1;

        gsap.set(popUpEl, {
          x: e.clientX,
          y: e.clientY,
        });
      };
      addEventListener('mousemove', mouseMove);

      const clickEvent = (e) => {
        if (IsData.state) {
          console.log('clicked');
          // making the click function to the specifiq point work
        }
      };
      containerRef.current.addEventListener('click', clickEvent);

      // Cleanup
      return () => {
        cancelAnimationFrame(animationFrameID.current);
        removeEventListener('mousemove', mouseMove);
        containerRef.current.removeEventListener('click', clickEvent);
      };
    }
  }, []);

  return (
    <div ref={containerRef} className='min-h-screen'>
      <canvas ref={canvasRef}></canvas>
      {/* pop up on over */}
      <div
        ref={popUpRef}
        className='fixed top-0 left-0 p-2 bg-opacity-60 backdrop-filter backdrop-blur-lg bg-primary-darkDash w-[150px]'
      >
        <h1 className='text-white text-md font-medium mb-2' id='title'>
          text
        </h1>
        <img src='' id='img' alt='' />
      </div>
    </div>
  );
};

export default ControlSphere;
