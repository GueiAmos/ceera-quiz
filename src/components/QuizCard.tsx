
import { Link } from 'react-router-dom';
import { Quiz } from '@/hooks/useQuizzes';

interface QuizCardProps {
  quiz: Quiz;
}

const QuizCard = ({ quiz }: QuizCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      <div className="p-5 flex-grow">
        <h3 className="text-xl font-bold text-ceera-blue mb-2">{quiz.title}</h3>
        <p className="text-gray-600 mb-4">{quiz.description}</p>
        <div className="text-sm text-gray-500 mb-3">
          <span>10 questions générées automatiquement</span>
        </div>
      </div>
      
      <div className="px-5 pb-5">
        <Link
          to={`/quiz/${quiz.id}`}
          className="w-full block text-center bg-ceera-orange hover:bg-ceera-orange/90 text-white font-medium py-2 px-4 rounded-lg transition-fade"
        >
          Commencer le quiz
        </Link>
      </div>
    </div>
  );
};

export default QuizCard;
