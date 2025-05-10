
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { aboutCeera } from "@/data/quizData";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-3 text-ceera-blue">
                À propos du {aboutCeera.shortName}
              </h1>
              <p className="text-xl text-gray-600">
                {aboutCeera.name}
              </p>
            </div>

            <div className="mb-8 bg-white rounded-xl shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4 text-ceera-orange">Notre Mission</h2>
              <p className="text-lg mb-6 text-gray-700">
                {aboutCeera.mission}
              </p>

              <div className="my-8 border-t border-b border-gray-200 py-6">
                <h3 className="text-xl font-semibold mb-4 text-ceera-blue">Fondé en {aboutCeera.founded}</h3>
                <p className="text-gray-700">
                  {aboutCeera.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-ceera-blue">Nos Valeurs</h3>
                  <ul className="space-y-2">
                    {aboutCeera.values.map((value, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-ceera-orange rounded-full mr-3"></span>
                        <span>{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-ceera-blue">Nos Activités</h3>
                  <ul className="space-y-2">
                    {aboutCeera.activities.map((activity, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-ceera-blue rounded-full mr-3"></span>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6 text-ceera-orange text-center">
                Contactez-nous
              </h2>
              <div className="flex flex-col items-center justify-center space-y-3">
                <p className="flex items-center">
                  <span className="font-medium w-24">Email:</span> 
                  <a href={`mailto:${aboutCeera.contact.email}`} className="text-ceera-blue hover:underline">
                    {aboutCeera.contact.email}
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="font-medium w-24">Téléphone:</span> 
                  <span>{aboutCeera.contact.phone}</span>
                </p>
                <div className="flex items-center space-x-6 mt-2">
                  <a 
                    href={`https://facebook.com/${aboutCeera.contact.socialMedia.facebook}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Facebook
                  </a>
                  <a 
                    href={`https://twitter.com/${aboutCeera.contact.socialMedia.twitter}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-600"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
