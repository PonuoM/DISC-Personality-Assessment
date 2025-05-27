import React from 'react';
import { TIME_PER_QUESTION } from '../constants';

interface TimerDisplayProps {
  timeLeft: number;
}

const TimerDisplay: React.FC<TimerDisplayProps> = ({ timeLeft }) => {
  const percentage = (timeLeft / TIME_PER_QUESTION) * 100;
  const progressColor = timeLeft <= 5 ? 'bg-red-500' : timeLeft <= 10 ? 'bg-yellow-500' : 'bg-sky-500';

  return (
    <div className="my-6 w-full"> {/* Removed max-w-md, increased my- margin */}
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-sky-700 dark:text-white">เวลาที่เหลือ</span>
        <span className="text-sm font-medium text-sky-700 dark:text-white">{timeLeft} วินาที</span>
      </div>
      <div className="w-full bg-gray-300 rounded-full h-3.5 dark:bg-gray-700"> {/* Increased height to h-3.5 */}
        <div
          className={`h-3.5 rounded-full transition-all duration-300 ease-linear ${progressColor}`}
          style={{ width: `${percentage}%` }}
          aria-valuenow={timeLeft}
          aria-valuemin={0}
          aria-valuemax={TIME_PER_QUESTION}
          role="progressbar"
          aria-label={`เวลาที่เหลือ ${timeLeft} วินาที`}
        ></div>
      </div>
    </div>
  );
};

export default TimerDisplay;