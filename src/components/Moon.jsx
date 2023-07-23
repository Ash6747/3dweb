/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.9 moon.glb -T 
Files: moon.glb [97.28MB] > moon-transformed.glb [497.84KB] (99%)
Author: OverGeared (https://sketchfab.com/OverGeared)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/the-moon-3335f1ff099a4f6d874824ebd0df85a6
Title: The Moon
*/

import { useRef } from 'react';
import { useGLTF, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { useLayoutEffect } from 'react';
import gsap from "gsap";

export const Floor_H = 2.3;
export const NB_F = 4;
export function Moon(props) {
  const { nodes, materials } = useGLTF('/models/moon/moon-transformed.glb')
  const moonRef = useRef();
  const scroll = useScroll();
  const tl = useRef();
  useFrame((state, delta)=>{
    tl.current.seek(scroll.offset * tl.current.duration());
  });
  useLayoutEffect(()=>{
    tl.current = gsap.timeline(
      { defaults:{ ease:"expo.inOut"}}
    );
    tl.current
    .to(moonRef.current.rotation, {
      duration:3,
      x: -3,
    },0)
    .to(moonRef.current.rotation, {
      duration:5,
      y: 10
    }, 0.1)
    .to(moonRef.current.position, {
      duration:5,
      z: 0
    }, 0.1)
    .to(moonRef.current.position, {
      duration:5,
      y: 0
    }, 0.1)

  })
  return (
    <group position={[0, -1.1, 3]} ref={moonRef} {...props} dispose={null}>
      <mesh 
      geometry={nodes.Sphere_Material001_0.geometry}
       material={materials['Material.001']} 
      rotation={[-Math.PI / 2, 0, 0]} 
      scale={1.0999} castShadow/>
    </group>
  )
}

useGLTF.preload('/models/moon/moon-transformed.glb')