"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Icosahedron, MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

function RotatingShape() {
    const meshRef = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        meshRef.current.rotation.x = time * 0.2;
        meshRef.current.rotation.y = time * 0.3;
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <Icosahedron args={[1, 15]} ref={meshRef} scale={2.5}>
                <MeshDistortMaterial
                    color="#333"
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0.4}
                    metalness={0.8}
                    wireframe={true}
                />
                {/* Fallback/Overlay for visual interest if wireframe is too thin */}
            </Icosahedron>
        </Float>
    );
}

export default function AbstractShape() {
    return (
        <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none -z-10 md:w-1/2 md:left-auto md:right-0">
            <Canvas camera={{ position: [0, 0, 8] }}>
                <ambientLight intensity={1} />
                <directionalLight position={[5, 5, 5]} intensity={2} color="#4f46e5" />
                <directionalLight position={[-5, -5, -5]} intensity={2} color="#ec4899" />
                <RotatingShape />
            </Canvas>
        </div>
    );
}
