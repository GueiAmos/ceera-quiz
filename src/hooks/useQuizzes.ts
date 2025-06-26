
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
  options: QuizOption[];
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  category_info: string;
  context_data: any;
}

export interface GeneratedQuiz extends Quiz {
  questions: QuizQuestion[];
}

export const useQuizzes = () => {
  return useQuery({
    queryKey: ['quizzes'],
    queryFn: async (): Promise<Quiz[]> => {
      console.log('Fetching quizzes from Supabase...');
      
      const { data: quizzesData, error: quizzesError } = await supabase
        .from('quizzes')
        .select('id, title, description, category_info, context_data')
        .order('created_at');

      if (quizzesError) {
        console.error('Error fetching quizzes:', quizzesError);
        throw quizzesError;
      }

      console.log('Quizzes data from Supabase:', quizzesData);
      return quizzesData || [];
    },
  });
};

export const useGenerateQuiz = (quizId: string) => {
  return useQuery({
    queryKey: ['generated-quiz', quizId],
    queryFn: async (): Promise<GeneratedQuiz | null> => {
      console.log('Generating quiz with ID:', quizId);
      
      // First get the quiz info
      const { data: quizData, error } = await supabase
        .from('quizzes')
        .select('id, title, description, category_info, context_data')
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

      // Generate questions using the Edge Function
      const response = await supabase.functions.invoke('generate-quiz-questions', {
        body: {
          categoryInfo: quizData.category_info,
          contextData: quizData.context_data,
          quizTitle: quizData.title
        }
      });

      if (response.error) {
        console.error('Error generating questions:', response.error);
        throw new Error('Failed to generate questions');
      }

      const { questions } = response.data;

      const generatedQuiz: GeneratedQuiz = {
        id: quizData.id,
        title: quizData.title,
        description: quizData.description,
        category_info: quizData.category_info,
        context_data: quizData.context_data,
        questions: questions
      };

      console.log('Generated quiz:', generatedQuiz);
      return generatedQuiz;
    },
    enabled: !!quizId,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    staleTime: 0, // Always generate fresh questions
  });
};
