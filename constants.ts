
import { Question, DISCType, Scores } from './types';

export const TIME_PER_QUESTION = 20; // seconds
export const TOTAL_QUESTIONS = 10;

export const QUESTIONS: Question[] = [
  {
    id: 'q1',
    text: 'เมื่อต้องเผชิญหน้ากับความท้าทายใหม่ๆ คุณมักจะ:',
    choices: [
      { id: 'q1c1', text: 'มุ่งตรงเข้าจัดการกับปัญหาทันทีและมองหาผลลัพธ์', type: DISCType.D },
      { id: 'q1c2', text: 'สร้างความกระตือรือร้นและชักชวนให้คนอื่นมีส่วนร่วม', type: DISCType.I },
      { id: 'q1c3', text: 'วางแผนอย่างรอบคอบและเตรียมพร้อมรับมืออย่างใจเย็น', type: DISCType.S },
      { id: 'q1c4', text: 'วิเคราะห์สถานการณ์อย่างละเอียดเพื่อหาทางแก้ไขที่ดีที่สุด', type: DISCType.C },
    ],
  },
  {
    id: 'q2',
    text: 'ในสถานการณ์ทางสังคมหรือการทำงานกลุ่ม คุณมักจะเป็นคนที่:',
    choices: [
      { id: 'q2c1', text: 'เป็นผู้นำในการตัดสินใจและกำหนดทิศทาง', type: DISCType.D },
      { id: 'q2c2', text: 'สร้างบรรยากาศที่เป็นมิตรและกระตุ้นให้ทุกคนมีส่วนร่วม', type: DISCType.I },
      { id: 'q2c3', text: 'รับฟังความคิดเห็นของผู้อื่นและสนับสนุนทีม', type: DISCType.S },
      { id: 'q2c4', text: 'ให้ความสำคัญกับข้อมูล ข้อเท็จจริง และรายละเอียด', type: DISCType.C },
    ],
  },
  {
    id: 'q3',
    text: 'เมื่อต้องทำงานภายใต้แรงกดดัน คุณมีแนวโน้มที่จะ:',
    choices: [
      { id: 'q3c1', text: 'ทำงานได้ดีขึ้นและมุ่งมั่นเพื่อให้สำเร็จตามเป้าหมาย', type: DISCType.D },
      { id: 'q3c2', text: 'มองหาทางออกที่สร้างสรรค์และพยายามสื่อสารเชิงบวก', type: DISCType.I },
      { id: 'q3c3', text: 'คงความสงบและทำงานตามขั้นตอนอย่างสม่ำเสมอ', type: DISCType.S },
      { id: 'q3c4', text: 'เพิ่มความระมัดระวังและตรวจสอบงานอย่างละเอียดถี่ถ้วน', type: DISCType.C },
    ],
  },
  {
    id: 'q4',
    text: 'คุณให้ความสำคัญกับสิ่งใดมากที่สุดในการทำงาน:',
    choices: [
      { id: 'q4c1', text: 'ผลลัพธ์ที่รวดเร็วและความสำเร็จที่วัดผลได้', type: DISCType.D },
      { id: 'q4c2', text: 'การได้รับการยอมรับและความสัมพันธ์ที่ดีกับผู้คน', type: DISCType.I },
      { id: 'q4c3', text: 'ความมั่นคง ความแน่นอน และสภาพแวดล้อมที่คาดการณ์ได้', type: DISCType.S },
      { id: 'q4c4', text: 'ความถูกต้อง คุณภาพ และการทำงานตามมาตรฐาน', type: DISCType.C },
    ],
  },
  {
    id: 'q5',
    text: 'เมื่อเกิดความขัดแย้ง คุณมักจะรับมืออย่างไร:',
    choices: [
      { id: 'q5c1', text: 'เผชิญหน้ากับปัญหาโดยตรงและพยายามหาทางแก้ไขอย่างรวดเร็ว', type: DISCType.D },
      { id: 'q5c2', text: 'พยายามไกล่เกลี่ยและสร้างความเข้าใจอันดีระหว่างทุกฝ่าย', type: DISCType.I },
      { id: 'q5c3', text: 'หลีกเลี่ยงการเผชิญหน้าโดยตรงและพยายามรักษาสถานการณ์ให้สงบ', type: DISCType.S },
      { id: 'q5c4', text: 'ค้นหาสาเหตุของปัญหาและเสนอแนวทางแก้ไขตามหลักการและเหตุผล', type: DISCType.C },
    ],
  },
  {
    id: 'q6',
    text: 'สไตล์การสื่อสารของคุณเป็นแบบใดมากที่สุด:',
    choices: [
      { id: 'q6c1', text: 'ตรงไปตรงมา ชัดเจน และเน้นผลลัพธ์', type: DISCType.D },
      { id: 'q6c2', text: 'กระตือรือร้น โน้มน้าวใจ และแสดงออกทางอารมณ์', type: DISCType.I },
      { id: 'q6c3', text: 'สุภาพ อดทน และเป็นผู้ฟังที่ดี', type: DISCType.S },
      { id: 'q6c4', text: 'มีเหตุผล เป็นทางการ และให้ข้อมูลที่ถูกต้อง', type: DISCType.C },
    ],
  },
  {
    id: 'q7',
    text: 'คุณรู้สึกมีแรงจูงใจมากที่สุดเมื่อ:',
    choices: [
      { id: 'q7c1', text: 'ได้ควบคุมสถานการณ์และเห็นผลลัพธ์ของความพยายาม', type: DISCType.D },
      { id: 'q7c2', text: 'ได้รับการยอมรับ ชื่นชม และมีโอกาสสร้างปฏิสัมพันธ์กับผู้อื่น', type: DISCType.I },
      { id: 'q7c3', text: 'ได้ทำงานในสภาพแวดล้อมที่มั่นคงและได้รับการสนับสนุน', type: DISCType.S },
      { id: 'q7c4', text: 'ได้ทำงานที่ท้าทายความสามารถในการวิเคราะห์และแก้ปัญหา', type: DISCType.C },
    ],
  },
  {
    id: 'q8',
    text: 'เมื่อต้องเรียนรู้สิ่งใหม่ๆ คุณชอบวิธีการแบบใด:',
    choices: [
      { id: 'q8c1', text: 'ลงมือทำทันที ลองผิดลองถูก และเรียนรู้จากประสบการณ์ตรง', type: DISCType.D },
      { id: 'q8c2', text: 'พูดคุย แลกเปลี่ยนความคิดเห็น และเรียนรู้ผ่านการมีส่วนร่วม', type: DISCType.I },
      { id: 'q8c3', text: 'ค่อยเป็นค่อยไป ทำตามขั้นตอน และต้องการคำแนะนำที่ชัดเจน', type: DISCType.S },
      { id: 'q8c4', text: 'ศึกษาข้อมูลอย่างละเอียด ทำความเข้าใจในหลักการและทฤษฎี', type: DISCType.C },
    ],
  },
  {
    id: 'q9',
    text: 'คุณจัดการกับการเปลี่ยนแปลงอย่างไร:',
    choices: [
      { id: 'q9c1', text: 'มองว่าเป็นโอกาสและพร้อมปรับตัวเพื่อผลลัพธ์ที่ดีกว่า', type: DISCType.D },
      { id: 'q9c2', text: 'เปิดรับการเปลี่ยนแปลงและพยายามมองในแง่ดี สร้างแรงบันดาลใจให้ผู้อื่น', type: DISCType.I },
      { id: 'q9c3', text: 'ต้องการเวลาในการปรับตัวและต้องการความชัดเจนเกี่ยวกับสิ่งที่เปลี่ยนแปลง', type: DISCType.S },
      { id: 'q9c4', text: 'วิเคราะห์ผลกระทบของการเปลี่ยนแปลงและวางแผนรับมืออย่างรอบคอบ', type: DISCType.C },
    ],
  },
  {
    id: 'q10',
    text: 'จุดแข็งของคุณในทีมคืออะไร:',
    choices: [
      { id: 'q10c1', text: 'การผลักดันให้ทีมบรรลุเป้าหมายและตัดสินใจได้รวดเร็ว', type: DISCType.D },
      { id: 'q10c2', text: 'การสร้างบรรยากาศที่ดี การสื่อสาร และการสร้างแรงจูงใจ', type: DISCType.I },
      { id: 'q10c3', text: 'ความน่าเชื่อถือ การสนับสนุน และการทำงานร่วมกับผู้อื่นอย่างราบรื่น', type: DISCType.S },
      { id: 'q10c4', text: 'ความแม่นยำ การวางแผน และการใส่ใจในรายละเอียดเพื่อให้งานมีคุณภาพ', type: DISCType.C },
    ],
  },
];

export const DISC_DESCRIPTIONS: Record<DISCType, { name: string; description: string; color: string }> = {
  [DISCType.D]: {
    name: 'D (Dominance) - ผู้นำ (The Leader)',
    description: 'คุณเป็นคนมุ่งมั่น กล้าตัดสินใจ ชอบความท้าทาย และมุ่งเน้นผลลัพธ์ คุณมีความเป็นผู้นำสูงและสามารถผลักดันให้งานสำเร็จได้อย่างรวดเร็ว อย่างไรก็ตาม บางครั้งอาจถูกมองว่าใจร้อนหรือขาดความอดทน',
    color: 'bg-red-500',
  },
  [DISCType.I]: {
    name: 'I (Influence) - ผู้สร้างแรงบันดาลใจ (The Inspirer)',
    description: 'คุณเป็นคนชอบเข้าสังคม ช่างพูด มีความคิดสร้างสรรค์ และสามารถสร้างแรงบันดาลใจให้ผู้อื่นได้ดี คุณให้ความสำคัญกับความสัมพันธ์และชอบทำงานเป็นทีม แต่อาจต้องระวังเรื่องการขาดความใส่ใจในรายละเอียด',
    color: 'bg-yellow-500',
  },
  [DISCType.S]: {
    name: 'S (Steadiness) - ผู้ประสานงาน (The Supporter)',
    description: 'คุณเป็นคนใจเย็น อดทน เป็นผู้ฟังที่ดี และให้ความสำคัญกับความสัมพันธ์ที่มั่นคง คุณชอบทำงานในสภาพแวดล้อมที่สงบและเป็นระบบ สามารถเป็นที่พึ่งพาของทีมได้ดี แต่อาจไม่ชอบการเปลี่ยนแปลงที่รวดเร็ว',
    color: 'bg-green-500',
  },
  [DISCType.C]: {
    name: 'C (Conscientiousness) - นักวิเคราะห์ (The Analyst)',
    description: 'คุณเป็นคนรอบคอบ มีระเบียบแบบแผน ให้ความสำคัญกับความถูกต้องและคุณภาพ คุณชอบวิเคราะห์ข้อมูลและวางแผนอย่างละเอียดก่อนลงมือทำ แต่อาจใช้เวลาในการตัดสินใจนานและต้องการข้อมูลที่ครบถ้วน',
    color: 'bg-blue-500',
  },
};

// Helper function to calculate results
export const calculateResults = (answers: (DISCType | null)[]): { dominantType: DISCType; scores: Scores } => {
  const scores: Scores = {
    [DISCType.D]: 0,
    [DISCType.I]: 0,
    [DISCType.S]: 0,
    [DISCType.C]: 0,
  };

  answers.forEach(answer => {
    if (answer) {
      scores[answer]++;
    }
  });

  let dominantType = DISCType.D; // Default
  let maxScore = -1;

  // Determine dominant type
  // In case of a tie, the first one encountered (D, I, S, C order) will be chosen.
  // A more complex tie-breaking logic could be implemented if needed.
  (Object.keys(scores) as DISCType[]).forEach(type => {
    if (scores[type] > maxScore) {
      maxScore = scores[type];
      dominantType = type;
    }
  });
  
  return { dominantType, scores };
};
    