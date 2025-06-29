import { Link } from 'react-scroll';
import { 
  FaHome, 
  FaUser, 
  FaCode, 
  FaBriefcase, 
  FaEnvelope, 
  FaGraduationCap
} from 'react-icons/fa';

const Navbar = () => {
  const navLinks = [
    { id: 'home', icon: <FaHome className="text-xl" />, title: 'Home' },
    { id: 'about', icon: <FaUser className="text-xl" />, title: 'About' },
    { id: 'skills', icon: <FaCode className="text-xl" />, title: 'Skills' },
    {id: 'education', icon: <FaGraduationCap className='text-xl'/>, title: 'Education'},
    { id: 'projects', icon: <FaBriefcase className="text-xl" />, title: 'Work' },
    { id: 'contact', icon: <FaEnvelope className="text-xl" />, title: 'Contact' },
  ];

  return (
    <nav className="fixed  rounded-2xl top-10/12 md:top-2 w-fit backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3">
        {/* Desktop Navigation */}
        <div className="flex text-gray-400 justify-center items-center space-x-3 md:space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.id}
              to={link.id} 
              smooth={true} 
              duration={500} 
              className="cursor-pointer hover:text-gray-300 transition p-2"
              title={link.title}
            >
              {link.icon}
            </Link>
          ))}   
        </div>
      </div>
    </nav>
  );
};

export default Navbar;