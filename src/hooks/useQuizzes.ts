
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface QuizOption {
  id: string;
  option_text: string;
  option_order: number;
}

export interface QuizQuestion {
  id: string;
  text: string;
  explanation?: string;
  correct_answer: number;
  question_order: number;
  question_options: QuizOption[];
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: QuizQuestion[];
}

export const useQuizzes = () => {
  return useQuery({
    queryKey: ['quizzes'],
    queryFn: async (): Promise<Quiz[]> => {
      console.log('Fetching quizzes from Supabase...');
      
      const { data: quizzesData, error: quizzesError } = await supabase
        .from('quizzes')
        .select(`
          id,
          title,
          description,
          questions (
            id,
            text,
            explanation,
            correct_answer,
            question_order,
            question_options (
              id,
              option_text,
              option_order
            )
          )
        `)
        .order('created_at');

      if (quizzesError) {
        console.error('Error fetching quizzes:', quizzesError);
        throw quizzesError;
      }

      console.log('Quizzes data from Supabase:', quizzesData);

      // Transform the data to match our interface
      const transformedQuizzes: Quiz[] = quizzesData?.map((quiz: any) => ({
        id: quiz.id,
        title: quiz.title,
        description: quiz.description,
        questions: quiz.questions
          ?.sort((a: any, b: any) => a.question_order - b.question_order)
          ?.map((question: any) => ({
            id: question.id,
            text: question.text,
            explanation: question.explanation,
            correct_answer: question.correct_answer,
            question_order: question.question_order,
            question_options: question.question_options
              ?.sort((a: any, b: any) => a.option_order - b.option_order)
              ?.map((option: any) => ({
                id: option.id,
                option_text: option.option_text,
                option_order: option.option_order,
              })) || []
          })) || []
      })) || [];

      console.log('Transformed quizzes:', transformedQuizzes);
      return transformedQuizzes;
    },
  });
};

export const useQuiz = (quizId: string) => {
  return useQuery({
    queryKey: ['quiz', quizId],
    queryFn: async (): Promise<Quiz | null> => {
      console.log('Fetching quiz with ID:', quizId);
      
      const { data: quizData, error } = await supabase
        .from('quizzes')
        .select(`
          id,
          title,
          description,
          questions (
            id,
            text,
            explanation,
            correct_answer,
            question_order,
            question_options (
              id,
              option_text,
              option_order
            )
          )
        `)
        .eq('id', quizId)
        .single();

      if (error) {
        console.error('Error fetching quiz:', error);
        throw error;
      }

      if (!quizData) {
        console.log('No quiz found with ID:', quizId);
        return null;
      }

      console.log('Quiz data from Supabase:', quizData);

      // Transform the data
      const transformedQuiz: Quiz = {
        id: quizData.id,
        title: quizData.title,
        description: quizData.description,
        questions: quizData.questions
          ?.sort((a: any, b: any) => a.question_order - b.question_order)
          ?.map((question: any) => ({
            id: question.id,
            text: question.text,
            explanation: question.explanation,
            correct_answer: question.correct_answer,
            question_order: question.question_order,
            question_options: question.question_options
              ?.sort((a: any, b: any) => a.option_order - b.option_order)
              ?.map((option: any) => ({
                id: option.id,
                option_text: option.option_text,
                option_order: option.option_order,
              })) || []
          })) || []
      };

      console.log('Transformed quiz:', transformedQuiz);
      return transformedQuiz;
    },
    enabled: !!quizId,
  });
};
