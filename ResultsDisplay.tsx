import React, { useRef } from 'react';
import { DISCType, Scores } from '../types';
import { UserInfo } from '../App'; // Assuming UserInfo is exported from App.tsx
import { DISC_DESCRIPTIONS } from '../constants';
import { getZodiacSign } from '../utils'; // Import zodiac sign utility
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import html2canvas from 'html2canvas';

interface ResultsDisplayProps {
  dominantType: DISCType;
  scores: Scores;
  userInfo: UserInfo;
  onRestart: () => void;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ dominantType, scores, userInfo, onRestart }) => {
  const resultDetails = DISC_DESCRIPTIONS[dominantType];
  const resultsRef = useRef<HTMLDivElement>(null);

  const chartData = (Object.keys(scores) as DISCType[]).map(type => ({
    name: type,
    score: scores[type],
    fill: DISC_DESCRIPTIONS[type].color.replace('bg-', '').replace('-500', ''),
  }));
  
  const colorMap: Record<string, string> = {
    'red-500': '#ef4444',
    'yellow-500': '#eab308',
    'green-500': '#22c55e',
    'blue-500': '#3b82f6',
  };

  const zodiacSign = getZodiacSign(new Date(userInfo.dateOfBirth));

  const handleSaveImage = () => {
    if (resultsRef.current) {
      html2canvas(resultsRef.current, { 
        useCORS: true,
        backgroundColor: null, // Use element's background
        scale: window.devicePixelRatio * 1.5, // Increase scale for better resolution
      }).then(canvas => {
        const image = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = image;
        link.download = `DISC_Results_${userInfo.nickname.replace(/\s+/g, '_') || 'User'}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }).catch(err => {
        console.error("Error generating image:", err);
        alert("ไม่สามารถบันทึกรูปภาพได้ กรุณาลองใหม่อีกครั้ง");
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 text-white p-4 md:p-6">
      <div ref={resultsRef} className="bg-white/10 backdrop-blur-lg shadow-xl rounded-lg p-6 md:p-10 w-full max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-sky-300">ผลลัพธ์ของคุณ</h2>
        
        <div className="mb-6 bg-white/5 p-4 rounded-lg text-slate-200 text-center md:text-left">
            <h3 className="text-xl font-semibold mb-3 text-sky-400">ข้อมูลผู้ทดสอบ:</h3>
            <p><strong>ชื่อเล่น:</strong> {userInfo.nickname}</p>
            <p><strong>วันเกิด:</strong> {new Date(userInfo.dateOfBirth).toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' })} (ปี{zodiacSign})</p>
            <p><strong>ตำแหน่งที่สมัคร:</strong> {userInfo.positionApplied}</p>
        </div>

        <div className={`p-6 rounded-lg ${resultDetails.color} bg-opacity-80 shadow-lg mb-8`}>
          <h3 className={`text-2xl md:text-3xl font-semibold mb-2 text-center ${resultDetails.color.includes('yellow') ? 'text-black' : 'text-white'}`}>
            {resultDetails.name}
          </h3>
          <p className={`text-md md:text-lg text-center ${resultDetails.color.includes('yellow') ? 'text-gray-800' : 'text-slate-100'}`}>
            {resultDetails.description}
          </p>
        </div>

        <div className="mb-8 bg-white/5 p-4 md:p-6 rounded-lg">
          <h4 className="text-xl md:text-2xl font-semibold mb-4 text-center text-slate-200">คะแนนรวมของคุณ:</h4>
          <div style={{ width: '100%', height: 300 }}>
             <ResponsiveContainer>
                <BarChart data={chartData} margin={{ top: 5, right: 20, left: -25, bottom: 5 }}> {/* Adjusted left margin for Y-axis labels */}
                  <CartesianGrid strokeDasharray="3 3" stroke="#475569" strokeOpacity={0.5} />
                  <XAxis dataKey="name" stroke="#cbd5e1" />
                  <YAxis allowDecimals={false} stroke="#cbd5e1" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'rgba(30, 41, 59, 0.9)', borderColor: '#475569', borderRadius: '0.5rem' }} 
                    itemStyle={{ color: '#e2e8f0' }}
                    cursor={{fill: 'rgba(71, 85, 105, 0.4)'}}
                  />
                  <Bar dataKey="score" radius={[4, 4, 0, 0]}>
                    {chartData.map((entry, index) => (
                       <Cell key={`cell-${index}`} fill={colorMap[DISC_DESCRIPTIONS[entry.name as DISCType].color.replace('bg-','')]} />
                    ))}
                  </Bar>
                </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <button
            onClick={handleSaveImage}
            className="w-full md:w-1/2 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg text-lg md:text-xl transition-colors duration-300 shadow-lg transform hover:scale-105"
            aria-label="บันทึกผลลัพธ์เป็นรูปภาพ"
          >
            บันทึกผลลัพธ์เป็นรูปภาพ
          </button>
          <button
            onClick={onRestart}
            className="w-full md:w-1/2 bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-6 rounded-lg text-lg md:text-xl transition-colors duration-300 shadow-lg transform hover:scale-105"
            aria-label="ทำแบบทดสอบอีกครั้ง"
          >
            ทำแบบทดสอบอีกครั้ง
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsDisplay;