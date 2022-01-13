import { getAllQuestionsAnswers } from '../operations/answers-questions.queries';

export const mockAllQuestionsAnswers = [
  {
    request: {
      query: getAllQuestionsAnswers
    },
    result: {
      data: {
        getAllQuestionsAnswers: {
          items: [
            {
              _id: '61b0eaa730f3f3458c68b8ad',
              question: [
                {
                  lang: 'ua',
                  value: 'Запитання-1'
                },
                {
                  lang: 'en',
                  value: 'Question-1'
                }
              ],
              answer: [
                {
                  lang: 'ua',
                  value: '<p>Відповідь-1</p>'
                },
                {
                  lang: 'en',
                  value: '<p>Answer-1</p>'
                }
              ],
              translationsKey: '61b0eaa730f3f3458c68b8ac'
            }
          ]
        }
      }
    }
  }
];
