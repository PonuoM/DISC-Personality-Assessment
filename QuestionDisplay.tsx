import React, { useState, useEffect, useCallback } from 'react';
import { Question, Choice, DISCType } from '../types';
import TimerDisplay from './TimerDisplay';
import { shuffleArray } from '../utils'; // Import shuffleArray

interface QuestionDisplayProps {
  question: Question;
  onAnswerSelect: (type: DISCType) => void;
  timeLeft: number;
  questionNumber: number;
  totalQuestions: number;
}

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({
  question,
  onAnswerSelect,
  timeLeft,
  questionNumber,
  totalQuestions,
}) => {
  const [shuffledChoices, setShuffledChoices] = useState<Choice[]>([]);
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    setShuffledChoices(shuffleArray(question.choices));
    setSelectedChoiceId(null); // Reset selection when question changes
    setIsAnswered(false); // Reset answered state
  }, [question]);

  const handleSelectChoice = useCallback((choice: Choice) => {
    if (isAnswered) return; // Prevent re-answering
    
    setSelectedChoiceId(choice.id);
    setIsAnswered(true); // Mark as answered
    
    // Delay slightly to show selection visual feedback before auto-advancing
    // The actual call to onAnswerSelect is now handled by App.tsx after this to ensure state updates
    // App.tsx will call advanceQuestion after its own setTimeout
    onAnswerSelect(choice.type);

  }, [onAnswerSelect, isAnswered]);


  return (
    <div className="bg-white shadow-2xl rounded-xl p-6 md:p-10 w-full max-w-2xl transform transition-all duration-500">
      <div className="mb-6">
        <p className="text-sm text-sky-600 font-semibold">
          คำถามที่ {questionNumber + 1} / {totalQuestions}
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mt-1">
          {question.text}
        </h2>
      </div>

      <TimerDisplay timeLeft={timeLeft} />

      <div className="space-y-4 mt-8">
        {shuffledChoices.map((choice) => (
          <button
            key={choice.id}
            onClick={() => handleSelectChoice(choice)}
            disabled={isAnswered} // Disable all buttons once one is selected and processed
            aria-pressed={selectedChoiceId === choice.id}
            className={`
              w-full text-left p-4 md:p-5 border-2 rounded-lg transition-all duration-200 
              text-slate-700 hover:bg-sky-100 hover:border-sky-500
              focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50
              ${selectedChoiceId === choice.id ? 'bg-sky-500 border-sky-600 text-white scale-105 shadow-lg' : 'bg-slate-50 border-slate-200'}
              ${isAnswered && selectedChoiceId !== choice.id ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}
              ${isAnswered && selectedChoiceId === choice.id ? 'cursor-default' : ''}
            `}
          >
            <span className="font-medium text-base md:text-lg">{choice.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionDisplay;