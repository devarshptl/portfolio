import { Center, Image, Text, Text3D } from '@react-three/drei';
import { Suspense } from 'react';

// Fonts
import imperialFont from '@/fonts/imperial.json';

// Pictures
import githubLogo from '@/assets/github.webp';
import introJPEG from '@/assets/intro_main.jpeg';
import linkedinLogo from '@/assets/linkedin.png';

function ThreeIntroduction() {
  return (
    <>
      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[10, 5]} />
        <meshPhysicalMaterial
          color={0x000000}
          transparent
          opacity={0.05}
          roughness={0}
          thickness={0.5}
          transmission={1}
          ior={1.5}
        />
        <Suspense>
          <Center position={[0, 2, 0]}>
            <Text3D
              position={[0, 2, 0]}
              size={0.5}
              height={0.1}
              font={JSON.parse(JSON.stringify(imperialFont))}
            >
              <meshBasicMaterial color={0xa6e3a1} />
              Devarsh Patel
            </Text3D>
          </Center>

          <Image url={introJPEG} position={[-2.5, 0, 0]} scale={[3, 3]} />
          <Text
            position={[2, 0.5, 0]}
            overflowWrap="normal"
            maxWidth={5}
            fontSize={0.15}
          >
            <meshBasicMaterial color={0xf9e2af} />
            Welcome to my digital workspace! I’m a passionate and
            performance-driven software engineer with hands-on experience in
            building scalable web applications, interactive 3D systems, and
            data-driven tools that solve real-world problems. With a strong
            foundation in both front-end and back-end technologies, I specialize
            in delivering robust, high-performance solutions using TypeScript,
            C++, Go, and Python—paired with modern frameworks like Angular,
            React, NestJS, and Three.js. Let’s build something extraordinary
            together.
          </Text>
        </Suspense>
        <Image
          onClick={() => {
            window.location.href = 'https://www.linkedin.com/in/devarshptl';
          }}
          transparent
          scale={[0.5, 0.5]}
          url={linkedinLogo}
          position={[-0.25, -0.8, 0]}
        />

        <Image
          onClick={() => {
            window.location.href = 'https://github.com/devarshptl';
          }}
          transparent
          scale={[0.57, 0.57]}
          url={githubLogo}
          position={[0.5, -0.83, 0]}
        />
        <Center position={[1, -0.9, 0]}>
          <Text color={0x94e2d5} fontSize={0.15}>
            Built with React and ThreeJS!
          </Text>
        </Center>
      </mesh>
    </>
  );
}

export default ThreeIntroduction;
