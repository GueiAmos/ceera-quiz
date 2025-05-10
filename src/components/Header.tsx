
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { aboutCeera } from '@/data/quizData';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold text-ceera-orange font-poppins">
            {aboutCeera.shortName}
          </h1>
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-ceera-orange transition-fade">
            Accueil
          </Link>
          <Link to="/quiz-list" className="text-gray-700 hover:text-ceera-orange transition-fade">
            Quiz
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-ceera-orange transition-fade">
            À propos
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-700 hover:text-ceera-orange"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <nav className="flex flex-col py-4">
            <Link 
              to="/" 
              className="px-6 py-3 text-gray-700 hover:bg-ceera-lightOrange hover:text-ceera-orange"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link 
              to="/quiz-list" 
              className="px-6 py-3 text-gray-700 hover:bg-ceera-lightOrange hover:text-ceera-orange"
              onClick={() => setIsMenuOpen(false)}
            >
              Quiz
            </Link>
            <Link 
              to="/about" 
              className="px-6 py-3 text-gray-700 hover:bg-ceera-lightOrange hover:text-ceera-orange"
              onClick={() => setIsMenuOpen(false)}
            >
              À propos
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
