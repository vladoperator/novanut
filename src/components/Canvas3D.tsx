import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Scene from './Scene';
import CameraRig from './CameraRig';

export default function Canvas3D() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <Canvas
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        camera={{
          fov: 50,
          near: 0.1,
          far: 100,
          position: [0, 2, 8],
        }}
        style={{ background: 'transparent' }}
      >
        <CameraRig />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
