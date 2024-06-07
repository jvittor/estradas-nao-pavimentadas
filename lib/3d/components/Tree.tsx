// Tree.tsx
import React from 'react';
import { roadColor } from '../util/constants';
import { Color } from '@react-three/fiber'
import Color4 from 'three/examples/jsm/renderers/common/Color4.js';
import * as THREE from 'three'

interface TreeProps {
    position: [number, number, number];
    color?: Color,
    trunkHeight: number;
    trunkBottomRadius: number;
    trunkTopRadius: number;
    foliageBaseHeight: number;
    foliageTopRadius: number;
    borderColor?: string
}
const color5 = new THREE.Color( 'skyblue' );

export const Tree: React.FC<TreeProps> = ({
    borderColor = roadColor,
    color = 'white',
    position,
    trunkHeight,
    trunkBottomRadius,
    trunkTopRadius,
    foliageBaseHeight,
    foliageTopRadius,
}) => {
    return (
        <group position={position}>
            {/* Trunk */}
            <mesh position={[0, trunkHeight / 2, 0]}>
                <cylinderGeometry args={[trunkBottomRadius, trunkTopRadius, trunkHeight]} />
                <meshStandardMaterial color={color5} />
            </mesh>

            {/* Leaves - using multiple smaller spheres */}
            <mesh position={[0, trunkHeight, 0]}>
                <sphereGeometry args={[foliageTopRadius, 16, 16]} />
                <meshStandardMaterial color={color5} /> {/* Lime Green */}
            </mesh>
            <mesh position={[1, trunkHeight + foliageBaseHeight / 4, 1]}>
                <sphereGeometry args={[foliageTopRadius * 0.8, 16, 16]} />
                <meshStandardMaterial color={color5} /> {/* Lawn Green */}
            </mesh>
            <mesh position={[-1, trunkHeight + foliageBaseHeight / 4, -1]}>
                <sphereGeometry args={[foliageTopRadius * 0.8, 16, 16]} />
                <meshStandardMaterial color={color5} /> {/* Lawn Green */}
            </mesh>
            <mesh position={[1, trunkHeight + foliageBaseHeight / 2, -1]}>
                <sphereGeometry args={[foliageTopRadius * 0.6, 16, 16]} />
                <meshStandardMaterial color={color5} /> {/* Green Yellow */}
            </mesh>
            <mesh position={[-1, trunkHeight + foliageBaseHeight / 2, 1]}>
                <sphereGeometry args={[foliageTopRadius * 0.6, 16, 16]} />
                <meshStandardMaterial color={color5} /> {/* Green Yellow */}
            </mesh>
        </group>
    );
};
