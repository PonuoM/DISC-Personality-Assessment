import React, { useState } from 'react';
import { UserInfo } from '../App'; // Assuming UserInfo is exported from App.tsx or types.ts

interface StartScreenProps {
  onStart: (userInfo: UserInfo) => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  const [nickname, setNickname] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [positionApplied, setPositionApplied] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!nickname.trim() || !dateOfBirth.trim() || !positionApplied.trim()) {
      setError('กรุณากรอกข้อมูลให้ครบทุกช่อง');
      return;
    }
    setError('');
    onStart({ nickname, dateOfBirth, positionApplied });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 text-white p-6">
      <div className="bg-white/10 backdrop-blur-lg shadow-xl rounded-lg p-8 md:p-12 text-center max-w-2xl w-full">
        <img 
          src="https://img5.pic.in.th/file/secure-sv1/ChatGPT_Image_9_.._2568_16_40_30-removebg-preview.png" 
          alt="DISC Assessment Visual" 
          className="mx-auto mb-6 w-48 h-48 object-contain"
        />
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          แบบทดสอบบุคลิกภาพ DISC
        </h1>
        <p className="text-md md:text-lg mb-8 text-slate-300">
          ค้นหาว่าคุณเป็นคนประเภทไหนตามหลัก DISC (D, I, S, หรือ C) ผ่านคำถาม 10 ข้อ เพื่อทำความเข้าใจตนเองและพัฒนาการทำงานร่วมกับผู้อื่น
        </p>

        <div className="my-8 border-t border-slate-600 pt-8">
          <h2 className="text-2xl font-semibold mb-6 text-sky-300">ข้อมูลผู้ทำแบบทดสอบ</h2>
          <div className="space-y-4 text-left">
            <div>
              <label htmlFor="nickname" className="block text-sm font-medium text-slate-300 mb-1">ชื่อเล่น</label>
              <input
                type="text"
                id="nickname"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                className="w-full p-3 bg-slate-700/50 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:ring-sky-500 focus:border-sky-500"
                placeholder="เช่น ฟ้าใส"
                aria-label="ชื่อเล่น"
              />
            </div>
            <div>
              <label htmlFor="dob" className="block text-sm font-medium text-slate-300 mb-1">วันเกิด</label>
              <input
                type="date"
                id="dob"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                className="w-full p-3 bg-slate-700/50 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:ring-sky-500 focus:border-sky-500"
                aria-label="วันเกิด"
              />
            </div>
            <div>
              <label htmlFor="position" className="block text-sm font-medium text-slate-300 mb-1">ตำแหน่งที่สมัคร</label>
              <input
                type="text"
                id="position"
                value={positionApplied}
                onChange={(e) => setPositionApplied(e.target.value)}
                className="w-full p-3 bg-slate-700/50 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:ring-sky-500 focus:border-sky-500"
                placeholder="เช่น นักพัฒนาซอฟต์แวร์"
                aria-label="ตำแหน่งที่สมัคร"
              />
            </div>
          </div>
          {error && <p className="mt-4 text-red-400 text-sm">{error}</p>}
        </div>

        <button
          onClick={handleSubmit}
          className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-10 rounded-lg text-xl transition-colors duration-300 shadow-lg transform hover:scale-105 w-full md:w-auto mt-6"
          aria-label="เริ่มทำแบบทดสอบ"
        >
          เริ่มทำแบบทดสอบ
        </button>
        <p className="mt-8 text-sm text-slate-400">
          แต่ละข้อมีเวลา 20 วินาทีในการตอบ
        </p>
      </div>
    </div>
  );
};

export default StartScreen;