
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const geminiApiKey = Deno.env.get('GEMINI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { categoryInfo, contextData, quizTitle } = await req.json();

    const prompt = `
Génère exactement 10 questions de quiz sur le sujet suivant:

Titre du quiz: ${quizTitle}

Informations sur la catégorie:
${categoryInfo}

Données contextuelles: ${JSON.stringify(contextData, null, 2)}

Instructions importantes:
1. Créer exactement 10 questions en français
2. Chaque question doit avoir 4 options de réponse (A, B, C, D)
3. Une seule réponse correcte par question
4. Les questions doivent être basées uniquement sur les informations fournies
5. Varier la difficulté des questions
6. Inclure une explication pour chaque réponse correcte

Format de réponse requis (JSON strict):
{
  "questions": [
    {
      "text": "Texte de la question",
      "options": [
        "Option A",
        "Option B", 
        "Option C",
        "Option D"
      ],
      "correct_answer": 0,
      "explanation": "Explication de la réponse correcte"
    }
  ]
}

Important: Réponds uniquement avec le JSON, sans texte supplémentaire.
`;

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${geminiApiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 2048,
        }
      }),
    });

    if (!response.ok) {
      throw new Error(`Gemini API error: ${response.status}`);
    }

    const data = await response.json();
    const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!generatedText) {
      throw new Error('No content generated from Gemini API');
    }

    // Parse the JSON response from Gemini
    let questionsData;
    try {
      // Remove any markdown formatting if present
      const cleanJson = generatedText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
      questionsData = JSON.parse(cleanJson);
    } catch (parseError) {
      console.error('Failed to parse Gemini response:', generatedText);
      throw new Error('Invalid JSON response from Gemini API');
    }

    // Validate the structure
    if (!questionsData.questions || !Array.isArray(questionsData.questions)) {
      throw new Error('Invalid questions format from Gemini API');
    }

    // Ensure we have exactly 10 questions
    const questions = questionsData.questions.slice(0, 10);

    // Validate each question
    const validatedQuestions = questions.map((q, index) => {
      if (!q.text || !Array.isArray(q.options) || q.options.length !== 4 || 
          typeof q.correct_answer !== 'number' || q.correct_answer < 0 || q.correct_answer > 3) {
        throw new Error(`Invalid question format at index ${index}`);
      }
      
      return {
        id: `q${index + 1}`,
        text: q.text,
        options: q.options.map((option, optIndex) => ({
          id: `q${index + 1}_opt${optIndex}`,
          option_text: option,
          option_order: optIndex
        })),
        correct_answer: q.correct_answer,
        explanation: q.explanation || '',
        question_order: index
      };
    });

    return new Response(JSON.stringify({ questions: validatedQuestions }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in generate-quiz-questions function:', error);
    return new Response(JSON.stringify({ 
      error: error.message || 'Failed to generate questions' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
