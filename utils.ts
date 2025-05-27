// Fisher-Yates shuffle algorithm
export const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

// Function to get Thai/Chinese Zodiac sign
export const getZodiacSign = (dateOfBirth: Date): string => {
  const year = dateOfBirth.getFullYear();
  
  // Note: This is a simplified calculation based on Gregorian year.
  // Traditional Chinese/Thai astrology can be more complex with exact cutoffs often around Lunar New Year.
  const zodiacAnimalsThai = [
    'วอก (ลิง)',     // Monkey (starts with 1920, 1932, ..., (year - 1920) % 12 === 0)
    'ระกา (ไก่)',    // Rooster
    'จอ (หมา)',       // Dog
    'กุน (หมู)',      // Pig
    'ชวด (หนู)',      // Rat
    'ฉลู (วัว)',     // Ox
    'ขาล (เสือ)',    // Tiger
    'เถาะ (กระต่าย)', // Rabbit
    'มะโรง (งูใหญ่)',// Dragon (Big Snake)
    'มะเส็ง (งูเล็ก)',// Snake (Small Snake)
    'มะเมีย (ม้า)',   // Horse
    'มะแม (แพะ)',     // Goat
  ];
  
  // Start year for Monkey (วอก) is 1920. (1920 % 12 = 0 for a 12-year cycle starting from a reference, if 1920 is index 0)
  // (year - 4) % 12 is a common formula if 0 = Rat.
  // Rat: 1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020. So (year - 1924) % 12
  // Let's align with the order provided if Rat is index 4 (0-indexed) in the array:
  // 0: Monkey, 1: Rooster, 2: Dog, 3: Pig, 4: Rat...
  // (year - 1900) % 12 should map:
  // 1900 = Rat. (1900-1900)%12 = 0. So Rat needs to be at index 0 for this formula.
  // Let's use the list order starting with Rat and a base year for Rat.
  // Base Rat year: 1924. Index = (year - 1924) % 12. If negative, add 12.
  
  const thaiZodiacOrder = [
    'ชวด (หนู)',      // Rat
    'ฉลู (วัว)',     // Ox
    'ขาล (เสือ)',    // Tiger
    'เถาะ (กระต่าย)', // Rabbit
    'มะโรง (งูใหญ่)',// Dragon
    'มะเส็ง (งูเล็ก)',// Snake
    'มะเมีย (ม้า)',   // Horse
    'มะแม (แพะ)',     // Goat
    'วอก (ลิง)',     // Monkey
    'ระกา (ไก่)',    // Rooster
    'จอ (หมา)',       // Dog
    'กุน (หมู)',      // Pig
  ];

  let index = (year - 1924) % 12;
  if (index < 0) {
    index += 12;
  }
  return thaiZodiacOrder[index] || 'ไม่ทราบ';
};
