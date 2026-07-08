'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function CinematicLayer() {
  const canvasRef = useRef(null);
  const stateRef = useRef({});

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // --- Renderer ---
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const clock = new THREE.Clock();

    // --- Particle field ---
    const COUNT = window.innerWidth < 768 ? 350 : 750;
    const geo = new THREE.BufferGeometry();
    const posArr = new Float32Array(COUNT * 3);
    const colArr = new Float32Array(COUNT * 3);

    const warmOrange = new THREE.Color(1.0, 0.55, 0.22);
    const softWhite  = new THREE.Color(0.92, 0.88, 0.78);
    const blueGlow   = new THREE.Color(0.3, 0.55, 1.0);
    const speeds = new Float32Array(COUNT);
    const offsets = new Float32Array(COUNT);

    for (let i = 0; i < COUNT; i++) {
      posArr[i * 3]     = (Math.random() - 0.5) * 18;
      posArr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      posArr[i * 3 + 2] = (Math.random() - 0.5) * 8;

      const r = Math.random();
      const c = r < 0.55 ? warmOrange : r < 0.85 ? softWhite : blueGlow;
      colArr[i * 3]     = Math.max(0, c.r + (Math.random() - 0.5) * 0.12);
      colArr[i * 3 + 1] = Math.max(0, c.g + (Math.random() - 0.5) * 0.12);
      colArr[i * 3 + 2] = Math.max(0, c.b + (Math.random() - 0.5) * 0.12);

      speeds[i]  = Math.random() * 0.4 + 0.15;
      offsets[i] = Math.random() * Math.PI * 2;
    }

    const initialPos = posArr.slice();

    geo.setAttribute('position', new THREE.BufferAttribute(posArr, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colArr, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.16,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geo, mat);
    scene.add(points);

    // --- Mouse parallax ---
    let mx = 0, my = 0, tmx = 0, tmy = 0;
    const onMouseMove = (e) => {
      mx = (e.clientX / window.innerWidth  - 0.5) * 2;
      my = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove);

    // --- Resize ---
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    // --- Animation loop ---
    let rafId;
    const animate = () => {
      rafId = requestAnimationFrame(animate);
      if (stateRef.current.paused) return;

      const t = clock.getElapsedTime();
      const pos = geo.attributes.position.array;

      for (let i = 0; i < COUNT; i++) {
        const s = speeds[i], o = offsets[i];
        pos[i * 3]     = initialPos[i * 3]     + Math.sin(t * s * 0.5 + o) * 0.3;
        pos[i * 3 + 1] = initialPos[i * 3 + 1] + Math.cos(t * s * 0.4 + o) * 0.25 + Math.sin(t * 0.12) * 0.06;
        pos[i * 3 + 2] = initialPos[i * 3 + 2] + Math.sin(t * s * 0.3 + o + 1) * 0.18;
      }
      geo.attributes.position.needsUpdate = true;

      // Smooth parallax
      tmx += (mx - tmx) * 0.025;
      tmy += (my - tmy) * 0.025;
      camera.position.x = tmx * 0.4;
      camera.position.y = tmy * 0.25;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      geo.dispose();
      mat.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
      }}
    />
  );
}
