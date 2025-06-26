
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuizCard from "@/components/QuizCard";
import { useQuizzes } from "@/hooks/useQuizzes";

const QuizListPage = () => {
  const { data: quizzes, isLoading, error } = useQuizzes();

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-2 text-center text-ceera-blue">
              Nos Quiz
            </h1>
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ceera-blue"></div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-2 text-center text-ceera-blue">
              Nos Quiz
            </h1>
            <div className="text-center py-12">
              <p className="text-red-500">Erreur lors du chargement des quiz. Veuillez réessayer.</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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
            {quizzes?.map((quiz) => (
              <QuizCard key={quiz.id} quiz={quiz} />
            ))}
          </div>

          {(!quizzes || quizzes.length === 0) && (
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
