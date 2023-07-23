/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import {angleToRadians} from "../utils/angle";
import { OrbitControls, PerspectiveCamera, ScrollControls, useScroll, Scroll } from "@react-three/drei";
import { Moon } from "./Moon";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";

export const Experience=()=>{
	const moonRef = useRef(null);
	const scroll = useScroll();
	
	// const { scrollYProgress } = useViewportScroll()
	// const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
	return(
		<>
		<PerspectiveCamera makeDefault position={[0, 0.03, 3.5]} />
		{/* <mesh position={[0, 0.5, 0]}>
			<sphereGeometry args={[0.5, 320, 320]}/>
			<meshNormalMaterial/>
		</mesh> */}
		<OrbitControls enableZoom={false}/>
		<ScrollControls pages={2} damping={0.01}>
			<mesh   ref={moonRef} >
				<Moon/>
				<meshStandardMaterial roughness={[1]}/>
				<ambientLight args={["#ffffff", 0.03]}/>
			</mesh>
			<Scroll html>
				{/* DOM contents in here will scroll along */}
				<div className="contentContainer">
					<h1 className="heading" >THE ALPHA AGENCY</h1>
					<motion.div
					initial={{
						opacity:0,
						originX:0,
						originZ:0,
						originY:0,
						
					}}
					whileInView={{
						opacity:1,
						originX:0,
						originZ:0,
						originY:0,
					}}
					transition={{
						duration:0.4,
						delay:0.5,
					}}
					className="titleContainer"
					style={{ top: '135vh' }}>
						<motion.h1
						className="heading"
						>ATTAIN</motion.h1>
						<h1 className="heading">DIGITAL NIRVANA</h1>
					</motion.div>
				</div>
			</Scroll>
		</ScrollControls>
		
		<mesh rotation={[-(angleToRadians(90)), 0, 0]} position={[0, -3, 0]} receiveShadow>
			<planeGeometry args={[8, 8, 8]}/>
			<meshStandardMaterial/>
		</mesh>
		
		<spotLight args={["#ffffff", 5.5, 5, angleToRadians(30), 0.2]} position={[0, 0, 2.8]} castShadow/>
		
		</>
	)
}