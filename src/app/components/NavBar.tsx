// Layouts
import Container from '@/app/layouts/Container';

function NavBar() {
  const navLinks = [
    { link: 'https://www.linkedin.com/in/devarshptl/', text: 'LinkedIn' },
    { link: 'https://github.com/devarshptl', text: 'Github' },
  ];

  return (
    <div className="bg-gray-800">
      <Container>
        <div className="flex flex-row justify-between items-center">
          <h1
            className="text-gray-100 lg:text-3xl text-2xl uppercase tracking-wider"
            style={{ fontFamily: 'Birthstone' }}
          >
            Devarsh Patel
          </h1>
          <ul className="flex flex-row justify-between lg:gap-8 gap-4 text-gray-400">
            {navLinks.map((item) => (
              <li className="md:text-md text-sm uppercase tracking-wider hover:text-gray-50">
                <a href={item.link}>{item.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}
export default NavBar;
