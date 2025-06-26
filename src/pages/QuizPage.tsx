
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useQuiz } from "@/hooks/useQuizzes";

const QuizPage = () => {
  const { quizId } = useParams<{ quizId: string }>();
  const navigate = useNavigate();
  const { data: currentQuiz, isLoading, error } = useQuiz(quizId || '');
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);

  useEffect(() => {
    if (!isLoading && !currentQuiz && quizId) {
      console.log('Quiz not found, redirecting...');
      navigate("/quiz-list");
    }
  }, [currentQuiz, isLoading, quizId, navigate]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (!isAnswerSubmitted) {
      setSelectedAnswer(answerIndex);
    }
  };

  const handleNextQuestion = () => {
    // Record user answer
    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[currentQuestionIndex] = selectedAnswer!;
    setUserAnswers(updatedUserAnswers);

    // Move to next question or finish quiz
    if (currentQuiz && currentQuestionIndex < currentQuiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer !== null) {
      setIsAnswerSubmitted(true);
      
      if (currentQuiz && selectedAnswer === currentQuiz.questions[currentQuestionIndex].correct_answer) {
        setScore(score + 1);
      }
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setQuizCompleted(false);
    setUserAnswers([]);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow py-8">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ceera-blue"></div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !currentQuiz) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow py-8">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center py-12">
              <p className="text-red-500 mb-4">Quiz non trouvé ou erreur de chargement.</p>
              <button
                onClick={() => navigate('/quiz-list')}
                className="bg-ceera-blue hover:bg-ceera-blue/90 text-white font-medium py-2 px-6 rounded-lg transition-fade"
              >
                Retour aux quiz
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const currentQuestion = currentQuiz.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100;

  if (quizCompleted) {
    const percentage = (score / currentQuiz.questions.length) * 100;
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow py-8">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                Résultats du Quiz
              </h1>
              
              <div className="text-center mb-8">
                <div className="mb-4">
                  <span className="text-4xl md:text-6xl font-bold text-ceera-blue">
                    {score}
                  </span>
                  <span className="text-xl md:text-2xl text-gray-600">
                    /{currentQuiz.questions.length}
                  </span>
                </div>
                <p className="text-lg text-gray-700">
                  Vous avez obtenu {percentage.toFixed(0)}% de bonnes réponses
                </p>
              </div>

              <div className="mb-8 bg-gray-100 p-4 rounded-lg">
                <h2 className="font-bold mb-4 text-ceera-blue">Revue des questions :</h2>
                {currentQuiz.questions.map((question, index) => (
                  <div key={question.id} className="mb-4 p-4 bg-white rounded-md shadow-sm">
                    <p className="font-medium mb-2">{index + 1}. {question.text}</p>
                    <p className="text-sm">
                      <span className="font-medium">Votre réponse :</span> {
                        userAnswers[index] !== undefined 
                          ? question.question_options[userAnswers[index]]?.option_text || "Sans réponse"
                          : "Sans réponse"
                      }
                    </p>
                    <p className={`text-sm ${userAnswers[index] === question.correct_answer ? "text-green-600" : "text-red-600"}`}>
                      <span className="font-medium">Réponse correcte :</span> {question.question_options[question.correct_answer]?.option_text}
                    </p>
                    {question.explanation && (
                      <p className="text-sm mt-2 text-gray-600 bg-gray-50 p-2 rounded">
                        {question.explanation}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={restartQuiz}
                  className="bg-ceera-orange hover:bg-ceera-orange/90 text-white font-medium py-2 px-6 rounded-lg transition-fade"
                >
                  Recommencer ce quiz
                </button>
                <button
                  onClick={() => navigate('/quiz-list')}
                  className="bg-ceera-blue hover:bg-ceera-blue/90 text-white font-medium py-2 px-6 rounded-lg transition-fade"
                >
                  Autres quiz
                </button>
              </div>
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
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <div className="mb-6">
              <h1 className="text-xl md:text-2xl font-bold mb-2 text-center">
                {currentQuiz.title}
              </h1>
              
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                <div 
                  className="bg-ceera-orange h-2.5 rounded-full transition-all duration-500" 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              
              <div className="text-sm text-gray-600 flex justify-between">
                <span>Question {currentQuestionIndex + 1} sur {currentQuiz.questions.length}</span>
                <span>Score: {score}</span>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">{currentQuestion.text}</h2>
              
              <div className="space-y-3">
                {currentQuestion.question_options.map((option, index) => (
                  <button
                    key={option.id}
                    onClick={() => handleAnswerSelect(index)}
                    className={`w-full text-left p-4 rounded-lg border transition-all ${
                      selectedAnswer === index 
                        ? isAnswerSubmitted
                          ? index === currentQuestion.correct_answer
                            ? "bg-green-100 border-green-500"
                            : "bg-red-100 border-red-500"
                          : "bg-ceera-lightBlue border-ceera-blue"
                        : "bg-white hover:bg-gray-50 border-gray-200"
                    }`}
                    disabled={isAnswerSubmitted}
                  >
                    <div className="flex items-center">
                      <div className={`w-6 h-6 flex items-center justify-center rounded-full mr-3 ${
                        selectedAnswer === index 
                          ? isAnswerSubmitted
                            ? index === currentQuestion.correct_answer
                              ? "bg-green-500 text-white"
                              : "bg-red-500 text-white"
                            : "bg-ceera-blue text-white"
                          : "bg-gray-200 text-gray-700"
                      }`}>
                        {String.fromCharCode(65 + index)}
                      </div>
                      {option.option_text}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {isAnswerSubmitted && currentQuestion.explanation && (
              <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-gray-700">{currentQuestion.explanation}</p>
              </div>
            )}

            <div className="flex justify-center">
              {!isAnswerSubmitted ? (
                <button
                  onClick={handleSubmitAnswer}
                  disabled={selectedAnswer === null}
                  className={`py-3 px-8 rounded-lg font-medium text-white transition-fade ${
                    selectedAnswer === null 
                      ? "bg-gray-300 cursor-not-allowed" 
                      : "bg-ceera-blue hover:bg-ceera-blue/90"
                  }`}
                >
                  Valider ma réponse
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className="bg-ceera-orange hover:bg-ceera-orange/90 text-white font-medium py-3 px-8 rounded-lg transition-fade"
                >
                  {currentQuestionIndex < currentQuiz.questions.length - 1 ? "Question suivante" : "Voir les résultats"}
                </button>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default QuizPage;
