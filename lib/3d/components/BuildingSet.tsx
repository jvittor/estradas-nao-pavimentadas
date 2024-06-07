'use client'

import { useEffect, useState } from 'react'
import { MathUtils } from 'three'
import { Tree } from './Tree'

export const BuildingSet = () => {
  const [treePositions, setTreePositions] = useState<[number, number, number][]>([])

  useEffect(() => {
    const positions: [number, number, number][] = []
    const numberOfTrees = 20; // Aumentar a quantidade de árvores
    for (let i = 0; i < numberOfTrees; i++) {
      positions.push([MathUtils.randFloatSpread(100), 0, MathUtils.randFloatSpread(100)]) // Distribuir árvores em uma área maior
    }
    setTreePositions(positions)
  }, [])

  return (
    <group>
      {treePositions.map((pos, index) => (
        <Tree
          key={index}
          position={pos}
          trunkHeight={5}
          trunkBottomRadius={0.5}
          trunkTopRadius={0.3}
          foliageBaseHeight={3}
          foliageTopRadius={2}
        />
      ))}
    </group>
  )
}
