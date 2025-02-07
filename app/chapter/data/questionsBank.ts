// data/questionBankALL.ts

export interface Question {
  question_type: "text" | "image";
  question: string;
  options: string[];
  correctAnswer: string;
}

// Define the structure of questionBankALL with keys as chapter names
export interface QuestionBank {
  [key: string]: Question[]; // This allows accessing by dynamic keys like "chapter1", "chapter2", etc.
}


export const questionBankALL:QuestionBank = {
  
    chapter1: [
      { question_type: "text", question: "안녕하세요", options: ["Hello", "Goodbye", "Thank you", "Welcome"], correctAnswer: "Hello" },
      {
        "question_type": "text",
        "question": "이름이 무엇인가요?",
        "options": [
          "What is your name?",
          "How old are you?",
          "Where are you from?",
          "What is your job?"
        ],
        "correctAnswer": "What is your name?"
      },
      
      { question_type: "image", question: "/quiz_images/kid.png", options: ["어린이", "아들", "딸", "오이"], correctAnswer: "어린이" },
      { question_type: "text", question: "감사합니다", options: ["Hello", "Goodbye", "Thank you", "Welcome"], correctAnswer: "Thank you" },
      { question_type: "text", question: "안녕히 가세요", options: ["Hello", "Goodbye", "Thank you", "Welcome"], correctAnswer: "Goodbye" },
    ],
 
    chapter2: [
      { question_type: "text", question: "이것은 무엇입니까?", options: ["What is this?", "Where are you going?", "What do you do?", "What is your nationality?"], correctAnswer: "What is this?" },
      { question_type: "image", question: "/quiz_images/apple.jpg", options: ["사과", "포도", "바나나", "수박"], correctAnswer: "사과" },
      { question_type: "text", question: "저는 학생입니다.", options: ["I am a teacher", "I am a student", "I am a doctor", "I am a cook"], correctAnswer: "I am a student" },
    ],
     chapter3: [
      { question_type: "text", question: "어디에서 왔어요?", options: ["Where are you from?", "How are you?", "What do you want?", "Where is it?"], correctAnswer: "Where are you from?" },
      { question_type: "image", question: "/quiz_images/flag.svg", options: ["한국", "미국", "일본", "중국"], correctAnswer: "한국" },
      { question_type: "text", question: "한국어를 할 수 있어요?", options: ["Can you speak Korean?", "Can you hear me?", "Are you Korean?", "Where is Korea?"], correctAnswer: "Can you speak Korean?" },
    ],
 
    chapter4: [
      { question_type: "text", question: "이것은 얼마예요?", options: ["How much is this?", "What is this?", "Where is this?", "Is this mine?"], correctAnswer: "How much is this?" },
      { question_type: "image", question: "/quiz_images/money.webp", options: ["돈", "지갑", "카드", "책"], correctAnswer: "돈" },
      { question_type: "text", question: "카드로 결제할 수 있어요?", options: ["Can I pay with a card?", "Can I get a discount?", "Is this on sale?", "Where do I pay?"], correctAnswer: "Can I pay with a card?" },
    ],
  
    chapter5: [
      { question_type: "text", question: "몇 시예요?", options: ["What time is it?", "How are you?", "How old are you?", "What is this?"], correctAnswer: "What time is it?" },
      { question_type: "image", question: "/quiz_images/clock.jpg", options: ["시계", "전화기", "컴퓨터", "가방"], correctAnswer: "시계" },
      { question_type: "text", question: "지금은 오후 세 시입니다.", options: ["It’s 3 PM now", "It’s 3 AM now", "It’s 12 PM now", "It’s 9 AM now"], correctAnswer: "It’s 3 PM now" },
    ],
  
    chapter6: [
      { question_type: "text", question: "날씨가 어때요?", options: ["How is the weather?", "Where is your home?", "Are you happy?", "What do you do?"], correctAnswer: "How is the weather?" },
      { question_type: "image", question: "/quiz_images/cucumber.webp", options: ["맑음", "오이 ", "눈", "바람"], correctAnswer: "오이" },
      { question_type: "text", question: "오늘 날씨는 맑아요.", options: ["The weather is sunny today.", "It is raining today.", "It is snowing today.", "It is windy today."], correctAnswer: "The weather is sunny today." },
    ],
 
    chapter7: [
      { question_type: "text", question: "병원은 어디에 있어요?", options: ["Where is the hospital?", "Where is the school?", "Where is the bank?", "Where is the bus stop?"], correctAnswer: "Where is the hospital?" },
      { question_type: "image", question: "/quiz_images/hospital.png", options: ["병원", "학교", "은행", "마트"], correctAnswer: "병원" },
      { question_type: "text", question: "병원은 저쪽에 있어요.", options: ["The hospital is over there.", "The hospital is closed.", "The hospital is small.", "The hospital is open."], correctAnswer: "The hospital is over there." },
    ],
 
    chapter8: [
      { question_type: "text", question: "학교에 어떻게 가요?", options: ["How do you go to school?", "Where is your school?", "Are you a student?", "Do you like school?"], correctAnswer: "How do you go to school?" },
      { question_type: "image", question: "/quiz_images/bus.png", options: ["버스", "택시", "기차", "비행기"], correctAnswer: "버스" },
    ],
 
    chapter9: [
      { question_type: "text", question: "주말에 뭐 할 거예요?", options: ["What will you do on the weekend?", "Where do you live?", "Do you work?", "Is it raining?"], correctAnswer: "What will you do on the weekend?" },
    ],

    chapter10: [
      { question_type: "text", question: "생일이 언제예요?", options: ["When is your birthday?", "What is your name?", "Where do you live?", "How old are you?"], correctAnswer: "When is your birthday?" },
    ],
 
    chapter11: [
      { question_type: "text", question: "안녕하세요", options: ["Hello", "Goodbye", "Thank you", "Welcome"], correctAnswer: "Hello" },
      { question_type: "image", question: "/quiz_images/kid.png", options: ["어린이", "아들", "딸", "오이"], correctAnswer: "어린이" },
      { question_type: "text", question: "감사합니다", options: ["Hello", "Goodbye", "Thank you", "Welcome"], correctAnswer: "Thank you" },
      { question_type: "text", question: "안녕히 가세요", options: ["Hello", "Goodbye", "Thank you", "Welcome"], correctAnswer: "Goodbye" },
    ],
 
    chapter12: [
      { question_type: "text", question: "이것은 무엇입니까?", options: ["What is this?", "Where are you going?", "What do you do?", "What is your nationality?"], correctAnswer: "What is this?" },
      { question_type: "image", question: "/quiz_images/apple.png", options: ["사과", "포도", "바나나", "수박"], correctAnswer: "사과" },
      { question_type: "text", question: "저는 학생입니다.", options: ["I am a teacher", "I am a student", "I am a doctor", "I am a cook"], correctAnswer: "I am a student" },
    ],
 
    chapter13: [
      { question_type: "text", question: "어디에서 왔어요?", options: ["Where are you from?", "How are you?", "What do you want?", "Where is it?"], correctAnswer: "Where are you from?" },
      { question_type: "image", question: "/quiz_images/flag.svg", options: ["한국", "미국", "일본", "중국"], correctAnswer: "한국" },
      { question_type: "text", question: "한국어를 할 수 있어요?", options: ["Can you speak Korean?", "Can you hear me?", "Are you Korean?", "Where is Korea?"], correctAnswer: "Can you speak Korean?" },
    ],
 
    chapter14: [
      { question_type: "text", question: "이것은 얼마예요?", options: ["How much is this?", "What is this?", "Where is this?", "Is this mine?"], correctAnswer: "How much is this?" },
      { question_type: "image", question: "/quiz_images/money.png", options: ["돈", "지갑", "카드", "책"], correctAnswer: "돈" },
      { question_type: "text", question: "카드로 결제할 수 있어요?", options: ["Can I pay with a card?", "Can I get a discount?", "Is this on sale?", "Where do I pay?"], correctAnswer: "Can I pay with a card?" },
    ],

    chapter15: [
      { question_type: "text", question: "몇 시예요?", options: ["What time is it?", "How are you?", "How old are you?", "What is this?"], correctAnswer: "What time is it?" },
      { question_type: "image", question: "/quiz_images/clock.png", options: ["시계", "전화기", "컴퓨터", "가방"], correctAnswer: "시계" },
      { question_type: "text", question: "지금은 오후 세 시입니다.", options: ["It’s 3 PM now", "It’s 3 AM now", "It’s 12 PM now", "It’s 9 AM now"], correctAnswer: "It’s 3 PM now" },
    ],
  
    chapter16: [
      { question_type: "text", question: "날씨가 어때요?", options: ["How is the weather?", "Where is your home?", "Are you happy?", "What do you do?"], correctAnswer: "How is the weather?" },
      { question_type: "image", question: "/quiz_images/sun.png", options: ["맑음", "비", "눈", "바람"], correctAnswer: "맑음" },
      { question_type: "text", question: "오늘 날씨는 맑아요.", options: ["The weather is sunny today.", "It is raining today.", "It is snowing today.", "It is windy today."], correctAnswer: "The weather is sunny today." },
    ],
  
    chapter17: [
      { question_type: "text", question: "병원은 어디에 있어요?", options: ["Where is the hospital?", "Where is the school?", "Where is the bank?", "Where is the bus stop?"], correctAnswer: "Where is the hospital?" },
      { question_type: "image", question: "/quiz_images/hospital.png", options: ["병원", "학교", "은행", "마트"], correctAnswer: "병원" },
      { question_type: "text", question: "병원은 저쪽에 있어요.", options: ["The hospital is over there.", "The hospital is closed.", "The hospital is small.", "The hospital is open."], correctAnswer: "The hospital is over there." },
    ],
 
    chapter18: [
      { question_type: "text", question: "학교에 어떻게 가요?", options: ["How do you go to school?", "Where is your school?", "Are you a student?", "Do you like school?"], correctAnswer: "How do you go to school?" },
      { question_type: "image", question: "/quiz_images/bus.png", options: ["버스", "택시", "기차", "비행기"], correctAnswer: "버스" },
    ],
  
 
};

// Extend chapters 11-18 similarly with practical Korean questions.
