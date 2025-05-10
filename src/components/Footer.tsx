
import { aboutCeera } from '@/data/quizData';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-ceera-brown mb-2">{aboutCeera.shortName}</h3>
          <p className="text-sm text-gray-600">{aboutCeera.mission}</p>
          
          <div className="mt-4 text-sm text-gray-500">
            <p>Contact: {aboutCeera.contact.email}</p>
            <p className="mt-2">© {new Date().getFullYear()} - {aboutCeera.shortName}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
