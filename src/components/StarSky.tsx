import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

export default function StarSky() {
  return (
    <div className='fixed left-0 top-0 z-[-50] h-[100vh] w-[100vw]'>
      <Canvas>
        <Stars
          radius={200}
          depth={10}
          count={5000}
          factor={10}
          saturation={0}
          fade
          speed={3}
        />
      </Canvas>
    </div>
  );
}
