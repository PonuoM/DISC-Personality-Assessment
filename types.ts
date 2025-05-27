
export enum DISCType {
  D = 'D', // Dominance - มุ่งมั่น, กล้าตัดสินใจ
  I = 'I', // Influence - ช่างพูด, เข้าสังคมเก่ง
  S = 'S', // Steadiness - ใจเย็น, อดทน
  C = 'C', // Conscientiousness - รอบคอบ, รักความสมบูรณ์แบบ
}

export interface Choice {
  id: string;
  text: string;
  type: DISCType;
}

export interface Question {
  id: string;
  text: string;
  choices: Choice[];
}

export enum AssessmentPhase {
  Start,
  Instructions,
  Quiz,
  Results,
}

export type Scores = Record<DISCType, number>;
    