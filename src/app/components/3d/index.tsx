import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

// Components
import ThreeIntroduction from '@/app/components/3d/sections/introduction';

function ThreeMain() {
  return (
    <div className="absolute w-screen h-screen bg-base">
      <Canvas orthographic camera={{ position: [0, 0, 10], zoom: 100 }}>
        <OrbitControls />
        <ThreeIntroduction />
      </Canvas>
    </div>
  );
}

export default ThreeMain;
