import QuizPreview from '@/sanity/components/preview/quiz-preview'
import { FaQuestion } from "react-icons/fa6";

export default {
  name: 'quiz',
  title: 'Quiz',
  type: 'object',
  icon: FaQuestion,
  fields: [
    {
      name: 'question',
      title: 'Question',
      type: 'string',
    },
    {
      name: 'answers',
      title: 'Answers',
      type: 'array',
      of: [{ 
        type: 'object',
        fields: [
          {
            name: 'text',
            title: 'Answer',
            type: 'string',
          },
          {
            name: 'isCorrect',
            title: 'Correct',
            type: 'boolean',
          }
        ]
      }],
    },
  ],
  preview: {
    select: { 
      question: 'question',
      answers: 'answers',
    },
  },
  components: {
    preview: QuizPreview,
  }, 
}