
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuizCard from "@/components/QuizCard";
import { quizzes } from "@/data/quizData";

const QuizListPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2 text-center text-ceera-blue">
            Nos Quiz
          </h1>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Choisissez un quiz pour tester vos connaissances sur différents aspects de notre association.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {quizzes.map((quiz) => (
              <QuizCard key={quiz.id} quiz={quiz} />
            ))}
          </div>

          {quizzes.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">Aucun quiz disponible pour le moment.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default QuizListPage;
