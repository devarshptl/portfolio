import Container from '@/app/layouts/Container';
import IntroMain from '@/assets/intro_main.jpg';

function Introduction() {
  const titles: Array<string> = [
    'Web Development',
    'Desktop Development',
    '3D/2D Game Development',
  ];
  return (
    <Container>
      <div className="flex lg:flex-row flex-col max-lg:items-center gap-4">
        <img src={IntroMain} className="rounded-2xl sm:w-80 w-full h-fit" />
        <div className="flex flex-col gap-2 w-full">
          <p className="font-semibold text-2xl">👋 Hi, I’m Devarsh Patel!</p>
          <p className="font-medium text-xl">
            Welcome to my digital workspace!
          </p>
          <p className="text-justify">
            I’m a passionate and performance-driven software engineer with
            hands-on experience in building scalable web applications,
            interactive 3D systems, and data-driven tools that solve real-world
            problems. With a strong foundation in both front-end and back-end
            technologies, I specialize in delivering robust, high-performance
            solutions using TypeScript, C++, Go, and Python—paired with modern
            frameworks like Angular, React, NestJS, and Three.js.
          </p>
          <p>Let’s build something extraordinary together.</p>
          <div className="grid sm:grid-flow-col grid-flow-row gap-4">
            {titles.map((item) => (
              <span className="py-1 px-2 border-1 rounded-lg border-gray-500 text-sm text-center uppercase">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Introduction;
