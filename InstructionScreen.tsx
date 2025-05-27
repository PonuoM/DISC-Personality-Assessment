
import React from 'react';

interface InstructionScreenProps {
  onStartQuiz: () => void;
}

const InstructionScreen: React.FC<InstructionScreenProps> = ({ onStartQuiz }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-800 to-slate-600 text-white p-6">
      <div className="bg-white/10 backdrop-blur-lg shadow-xl rounded-lg p-8 md:p-12 max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center">คำแนะนำก่อนเริ่ม</h2>
        <ul className="list-disc list-inside space-y-3 text-lg mb-8 text-slate-200">
          <li>แบบทดสอบนี้มีทั้งหมด 10 คำถาม</li>
          <li>แต่ละคำถามจะมี 4 ตัวเลือก ให้เลือกคำตอบที่ตรงกับคุณมากที่สุด</li>
          <li>คุณมีเวลา 20 วินาทีในการตอบแต่ละคำถาม</li>
          <li>หากหมดเวลา ระบบจะไปยังคำถามถัดไปโดยอัตโนมัติ</li>
          <li>พยายามตอบตามความเป็นจริงเพื่อให้ได้ผลลัพธ์ที่แม่นยำที่สุด</li>
        </ul>
        <button
          onClick={onStartQuiz}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg text-xl transition-colors duration-300 shadow-lg transform hover:scale-105"
        >
          เข้าใจแล้ว เริ่มเลย!
        </button>
      </div>
    </div>
  );
};

export default InstructionScreen;
    