
import { Link } from "react-router-dom";
import { Award, Book, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { aboutCeera } from "@/data/quizData";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="quiz-gradient text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">
              Bienvenue au Quiz {aboutCeera.shortName}
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in opacity-90">
              Testez vos connaissances sur notre association et son histoire tout en vous amusant
            </p>
            <div className="animate-scale-in">
              <Link
                to="/quiz-list"
                className="bg-white text-ceera-orange hover:bg-gray-100 font-semibold py-3 px-6 rounded-full text-lg shadow-lg transition-fade"
              >
                Commencer un quiz
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-ceera-blue">
              Pourquoi participer à nos quiz ?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-ceera-lightBlue text-ceera-blue">
                  <Book size={24} />
                </div>
                <h3 className="font-bold text-xl mb-3">Apprenez en vous amusant</h3>
                <p className="text-gray-600">
                  Découvrez l'histoire et les valeurs du CEERA de manière ludique et interactive
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-ceera-lightOrange text-ceera-orange">
                  <Star size={24} />
                </div>
                <h3 className="font-bold text-xl mb-3">Renforcez votre sentiment d'appartenance</h3>
                <p className="text-gray-600">
                  Développez votre lien avec la communauté CEERA en partageant des connaissances communes
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-ceera-lightBrown text-ceera-brown">
                  <Award size={24} />
                </div>
                <h3 className="font-bold text-xl mb-3">Gagnez des connaissances</h3>
                <p className="text-gray-600">
                  Chaque quiz vous permet d'approfondir vos connaissances sur notre association
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section Preview */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-ceera-blue">
                À propos du {aboutCeera.shortName}
              </h2>
              <p className="text-gray-700 mb-8">
                {aboutCeera.description.substring(0, 250)}...
              </p>
              <Link
                to="/about"
                className="inline-block font-medium text-ceera-orange hover:text-ceera-orange/90 underline transition-fade"
              >
                En savoir plus sur notre association
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
