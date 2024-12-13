import { Devvit } from '@devvit/public-api';

// Question bank with multiple choice options
const QUESTIONS = {
  currentAffairs: [
    {
      question: "Which country launched the first successful moon landing in 2024?",
      options: ["India", "China", "United States", "Russia"],
      correctAnswer: "India"
    },
    {
      question: "Who was elected as the UN Secretary-General in 2024?",
      options: ["António Guterres", "Amina Mohammed", "Volkan Bozkır", "Maria Fernanda Espinosa"],
      correctAnswer: "António Guterres"
    },
    {
      question: "Which country hosted the G20 Summit in 2024?",
      options: ["India", "Brazil", "South Africa", "Germany"],
      correctAnswer: "Brazil"
    },
    {
      question: "Which tech company unveiled a quantum computer in 2024?",
      options: ["Google", "IBM", "Intel", "Microsoft"],
      correctAnswer: "IBM"
    },
    {
      question: "What was the theme of World Environment Day 2024?",
      options: ["Beat Plastic Pollution", "Restore Our Earth", "Time for Nature", "Sustainable Living"],
      correctAnswer: "Beat Plastic Pollution"
    },
    {
      question: "Which country won the Eurovision Song Contest in 2024?",
      options: ["Sweden", "Norway", "Italy", "Ukraine"],
      correctAnswer: "Sweden"
    },
    {
      question: "What is the world's most populous country as of 2024?",
      options: ["China", "India", "United States", "Indonesia"],
      correctAnswer: "India"
    },
    {
      question: "Which company acquired Twitter in 2024?",
      options: ["Meta", "Microsoft", "Apple", "It remained independent"],
      correctAnswer: "It remained independent"
    },
    {
      question: "Which country won the ICC Cricket World Cup in 2023?",
      options: ["India", "Australia", "England", "Pakistan"],
      correctAnswer: "India"
    },
    {
      question: "Who became the new CEO of Tesla in 2024?",
      options: ["Elon Musk", "Tom Zhu", "Gwynne Shotwell", "A new candidate"],
      correctAnswer: "Tom Zhu"
    }
  ],
  history: [
    {
      question: "In which year did World War II end?",
      options: ["1943", "1945", "1947", "1939"],
      correctAnswer: "1945"
    },
    {
      question: "Who was the first woman to win a Nobel Prize?",
      options: ["Marie Curie", "Mother Teresa", "Ada Lovelace", "Rosalind Franklin"],
      correctAnswer: "Marie Curie"
    },
    {
      question: "Who was the first President of the United States?",
      options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
      correctAnswer: "George Washington"
    },
    {
      question: "When was the Declaration of Independence signed?",
      options: ["1776", "1789", "1804", "1812"],
      correctAnswer: "1776"
    },
    {
      question: "Which empire built the Colosseum in Rome?",
      options: ["Greek Empire", "Roman Empire", "Ottoman Empire", "Byzantine Empire"],
      correctAnswer: "Roman Empire"
    },
    {
      question: "Who discovered America in 1492?",
      options: ["Christopher Columbus", "Vasco da Gama", "Ferdinand Magellan", "Marco Polo"],
      correctAnswer: "Christopher Columbus"
    },
    {
      question: "What year did the Berlin Wall fall?",
      options: ["1987", "1989", "1991", "1993"],
      correctAnswer: "1989"
    },
    {
      question: "Who was the British Prime Minister during World War II?",
      options: ["Neville Chamberlain", "Winston Churchill", "Clement Attlee", "Margaret Thatcher"],
      correctAnswer: "Winston Churchill"
    },
    {
      question: "Which battle marked the end of Napoleon's rule?",
      options: ["Battle of Waterloo", "Battle of Trafalgar", "Battle of Leipzig", "Battle of Austerlitz"],
      correctAnswer: "Battle of Waterloo"
    },
    {
      question: "Who was the last Tsar of Russia?",
      options: ["Alexander III", "Nicholas II", "Peter the Great", "Ivan IV"],
      correctAnswer: "Nicholas II"
    }
  ],
  sports: [
    {
      question: "Which country won the FIFA World Cup in 2022?",
      options: ["Brazil", "Argentina", "France", "Germany"],
      correctAnswer: "Argentina"
    },
    {
      question: "Who won the NBA championship in 2023?",
      options: ["Golden State Warriors", "Los Angeles Lakers", "Denver Nuggets", "Boston Celtics"],
      correctAnswer: "Denver Nuggets"
    },
    {
      question: "Who won the Wimbledon men's singles title in 2023?",
      options: ["Novak Djokovic", "Carlos Alcaraz", "Roger Federer", "Rafael Nadal"],
      correctAnswer: "Carlos Alcaraz"
    },
    {
      question: "Which country hosted the Olympics in 2024?",
      options: ["Japan", "United States", "France", "Australia"],
      correctAnswer: "France"
    },
    {
      question: "Who holds the record for the most goals in FIFA World Cup history?",
      options: ["Miroslav Klose", "Pele", "Lionel Messi", "Cristiano Ronaldo"],
      correctAnswer: "Miroslav Klose"
    },
    {
      question: "Which athlete has the most Olympic gold medals?",
      options: ["Usain Bolt", "Michael Phelps", "Carl Lewis", "Mark Spitz"],
      correctAnswer: "Michael Phelps"
    },
    {
      question: "Which team won the ICC T20 World Cup in 2022?",
      options: ["India", "England", "Pakistan", "New Zealand"],
      correctAnswer: "England"
    },
    {
      question: "Who won the Ballon d'Or in 2023?",
      options: ["Lionel Messi", "Erling Haaland", "Kylian Mbappé", "Kevin De Bruyne"],
      correctAnswer: "Lionel Messi"
    },
    {
      question: "Which country won the Rugby World Cup in 2023?",
      options: ["New Zealand", "South Africa", "England", "Australia"],
      correctAnswer: "South Africa"
    },
    {
      question: "Who won the Formula 1 World Championship in 2023?",
      options: ["Lewis Hamilton", "Max Verstappen", "Charles Leclerc", "Fernando Alonso"],
      correctAnswer: "Max Verstappen"
    }
  ]
};


Devvit.configure({
  redditAPI: true,
});

Devvit.addMenuItem({
  label: 'Trivia Guessing Game',
  location: 'subreddit',
  onPress: async (_, { reddit, ui }) => {
    const subreddit = await reddit.getCurrentSubreddit();
    await reddit.submitPost({
      preview: (
        <vstack padding="medium" cornerRadius="medium">
          <text style="heading" size="medium">
            Loading Trivia Guessing Game...
          </text>
        </vstack>
      ),
      title: `${subreddit.name} Trivia Guessing Game`,
      subredditName: subreddit.name,
    });

    ui.showToast({
      text: `Successfully created a Trivia Guessing Game post!`,
      appearance: 'success',
    });
  },
});

Devvit.addCustomPostType({
  name: 'TriviaGame',
  render: context => {
    const [category, setCategory] = context.useState<'currentAffairs' | 'history' | 'sports' | null>(null);
    const [questions, setQuestions] = context.useState<any[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = context.useState(0);
    const [score, setScore] = context.useState(0);
    const [gameStarted, setGameStarted] = context.useState(false);
    const [gameOver, setGameOver] = context.useState(false);

    const selectCategory = (selectedCategory: 'currentAffairs' | 'history' | 'sports') => {
      // Get all questions from the selected category
      const allCategoryQuestions = QUESTIONS[selectedCategory];
      
      // Randomly select 5 unique questions
      const selectedQuestions = [];
      const questionIndices = new Set();
      
      while (selectedQuestions.length < 5 && questionIndices.size < allCategoryQuestions.length) {
        const randomIndex = Math.floor(Math.random() * allCategoryQuestions.length);
        
        if (!questionIndices.has(randomIndex)) {
          questionIndices.add(randomIndex);
          selectedQuestions.push(allCategoryQuestions[randomIndex]);
        }
      }
      
      setCategory(selectedCategory);
      setQuestions(selectedQuestions);
      setGameStarted(true);
    };

    const handleAnswerClick = (selectedAnswer: string) => {
      if (gameStarted && !gameOver) {
        // Check if the answer is correct
        if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
          setScore(prevScore => prevScore + 10);
        }

        // Move to next question or end game
        if (currentQuestionIndex < 4) {
          setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        } else {
          setGameOver(true);
        }
      }
    };

    const handleRestartClick = () => {
      setCategory(null);
      setQuestions([]);
      setCurrentQuestionIndex(0);
      setScore(0);
      setGameStarted(false);
      setGameOver(false);
    };

    return (
      <vstack alignment='center middle' height='100%' gap='small' padding='medium'>
        {!gameStarted && !gameOver && (
          <vstack gap='medium' alignment='center middle'>
            <text size='xlarge' weight='bold'>
              Choose a Trivia Category
            </text>
            <hstack gap='small'>
              <button 
                onPress={() => selectCategory('currentAffairs')}
                width='fill'
              >
                Current Affairs
              </button>
              <button 
                onPress={() => selectCategory('history')}
                width='fill'
              >
                History
              </button>
              <button 
                onPress={() => selectCategory('sports')}
                width='fill'
              >
                Sports
              </button>
            </hstack>
          </vstack>
        )}

        {gameStarted && !gameOver && (
          <vstack gap='medium' alignment='center middle'>
            <text size='large' weight='bold'>
              {`Question ${currentQuestionIndex + 1}/5`}
            </text>
            <text size='large' alignment='center'>
              {questions[currentQuestionIndex].question}
            </text>
            <vstack gap='small' width='100%'>
              {questions[currentQuestionIndex].options.map((option: string, index: number) => (
                <button 
                  key={index}
                  onPress={() => handleAnswerClick(option)}
                  width='fill'
                >
                  {option}
                </button>
              ))}
            </vstack>
            <text>
              {`Current Score: ${score}`}
            </text>
          </vstack>
        )}

        {gameOver && (
          <vstack gap='medium' alignment='center middle'>
            <text size='xxlarge' weight='bold'>
              Game Over!
            </text>
            <text size='large'>
              {`Your Final Score: ${score}/50`}
            </text>
            <button 
              onPress={handleRestartClick}
              width='fill'
            >
              Play Again
            </button>
          </vstack>
        )}
      </vstack>
    );
  },
});

export default Devvit;