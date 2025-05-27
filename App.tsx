
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { AssessmentPhase, DISCType, Scores } from './types';
import { QUESTIONS, TIME_PER_QUESTION, TOTAL_QUESTIONS, calculateResults } from './constants';
import StartScreen from './components/StartScreen';
import InstructionScreen from './components/InstructionScreen';
import QuestionDisplay from './components/QuestionDisplay';
import ResultsDisplay from './components/ResultsDisplay';
import ProgressBar from './components/ProgressBar';

export interface UserInfo {
  nickname: string;
  dateOfBirth: string;
  positionApplied: string;
}

const App: React.FC = () => {
  const [assessmentPhase, setAssessmentPhase] = useState<AssessmentPhase>(AssessmentPhase.Start);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<(DISCType | null)[]>(new Array(TOTAL_QUESTIONS).fill(null));
  const [timeLeft, setTimeLeft] = useState<number>(TIME_PER_QUESTION);
  const [results, setResults] = useState<{ dominantType: DISCType; scores: Scores } | null>(null);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  const timerIdRef = useRef<number | null>(null);
  const currentQuestionIndexRef = useRef(currentQuestionIndex);
  useEffect(() => {
    currentQuestionIndexRef.current = currentQuestionIndex;
  }, [currentQuestionIndex]);

  const userAnswersRef = useRef(userAnswers);
  useEffect(() => {
    userAnswersRef.current = userAnswers;
  }, [userAnswers]);

  const clearTimer = useCallback(() => {
    if (timerIdRef.current !== null) {
      clearInterval(timerIdRef.current);
      timerIdRef.current = null;
    }
  }, []); // Empty dependency array: clearTimer is stable

  const advanceQuestion = useCallback(() => {
    clearTimer();
    if (currentQuestionIndexRef.current < TOTAL_QUESTIONS - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setTimeLeft(TIME_PER_QUESTION);
    } else {
      setAssessmentPhase(AssessmentPhase.Results);
    }
  }, [clearTimer]); // clearTimer is stable, state setters are stable

  useEffect(() => {
    if (assessmentPhase === AssessmentPhase.Quiz) {
      // Ensure timeLeft is reset for the new question, if not already done by advanceQuestion
      // This is mainly for the very first question or if phase directly jumps to Quiz.
      // advanceQuestion already handles setTimeLeft for subsequent questions.
      if (timerIdRef.current === null) { // Check if a timer is not already potentially running for this question
         setTimeLeft(TIME_PER_QUESTION); // Ensure fresh start if needed
      }


      const newTimerId = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime <= 1) {
            setUserAnswers(prevAnswers => {
              const updatedAnswers = [...prevAnswers];
              if (updatedAnswers[currentQuestionIndexRef.current] === undefined || updatedAnswers[currentQuestionIndexRef.current] === null) {
                updatedAnswers[currentQuestionIndexRef.current] = null;
              }
              return updatedAnswers;
            });
            advanceQuestion(); // This will also call clearTimer and reset timeLeft for the next question
            return TIME_PER_QUESTION; // Effectively for the next tick if advanceQuestion didn't move phase
          }
          return prevTime - 1;
        });
      }, 1000);
      timerIdRef.current = newTimerId as unknown as number;

      return () => {
        clearInterval(newTimerId); // Clear this specific interval
        // We don't necessarily set timerIdRef.current to null here,
        // as clearTimer() is the canonical way to do it and might be called by advanceQuestion.
        // Or, to be safe if this cleanup runs before advanceQuestion's clearTimer:
        if (timerIdRef.current === newTimerId) {
            timerIdRef.current = null;
        }
      };
    } else {
      clearTimer(); // Clear timer if not in Quiz phase
    }
  }, [assessmentPhase, currentQuestionIndex, advanceQuestion, clearTimer]); // Dependencies now include stable functions if they are called directly.

  useEffect(() => {
    if (assessmentPhase === AssessmentPhase.Results && !results) {
      const finalResults = calculateResults(userAnswersRef.current);
      setResults(finalResults);
    }
  }, [assessmentPhase, results]);

  const handleStartAssessment = (info: UserInfo) => {
    setUserInfo(info);
    setAssessmentPhase(AssessmentPhase.Instructions);
  };

  const handleStartQuiz = () => {
    clearTimer(); // Ensure any lingering timer is cleared
    setCurrentQuestionIndex(0);
    setUserAnswers(new Array(TOTAL_QUESTIONS).fill(null));
    setTimeLeft(TIME_PER_QUESTION); // Explicitly set time for the first question
    setResults(null);
    setAssessmentPhase(AssessmentPhase.Quiz);
  };

  const handleAnswerSelect = useCallback((type: DISCType) => {
    setUserAnswers(prevAnswers => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[currentQuestionIndexRef.current] = type;
      return updatedAnswers;
    });
    // advanceQuestion will be called after a short delay, which will handle timer clearing and timeLeft reset.
    setTimeout(() => {
        advanceQuestion();
    }, 300);
  }, [advanceQuestion]); // advanceQuestion is stable

  const handleRestart = () => {
    clearTimer();
    setUserInfo(null);
    setAssessmentPhase(AssessmentPhase.Start);
  };

  const renderContent = () => {
    switch (assessmentPhase) {
      case AssessmentPhase.Start:
        return <StartScreen onStart={handleStartAssessment} />;
      case AssessmentPhase.Instructions:
        return <InstructionScreen onStartQuiz={handleStartQuiz} />;
      case AssessmentPhase.Quiz:
        return (
          <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-200 to-slate-400 p-4 selection:bg-sky-200">
            <ProgressBar current={currentQuestionIndex} total={TOTAL_QUESTIONS} />
            {QUESTIONS[currentQuestionIndex] ? (
              <QuestionDisplay
                question={QUESTIONS[currentQuestionIndex]}
                onAnswerSelect={handleAnswerSelect}
                timeLeft={timeLeft}
                questionNumber={currentQuestionIndex}
                totalQuestions={TOTAL_QUESTIONS}
              />
            ) : (
              <p>กำลังโหลดคำถาม...</p> 
            )}
          </div>
        );
      case AssessmentPhase.Results:
        if (!results || !userInfo) return <p>กำลังโหลดผลลัพธ์...</p>;
        return (
          <ResultsDisplay
            dominantType={results.dominantType}
            scores={results.scores}
            userInfo={userInfo}
            onRestart={handleRestart}
          />
        );
      default:
        return <p>มีบางอย่างผิดพลาด</p>;
    }
  };

  return <div className="App">{renderContent()}</div>;
};

export default App;
