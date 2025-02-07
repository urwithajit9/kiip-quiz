import { create } from "zustand";

interface Question {
  question_type: "text" | "image";
  question: string;
  options: string[];
  correctAnswer: string;
}

interface QuizState {
  currentChapter: string;
  questions: Question[];
  currentIndex: number;
  userAnswers: (string | null)[];
  quizFinished: boolean;
  correctCount: number;
  wrongCount: number;
  
  // setQuestions: (questions: Question[]) => void;
  setQuestions: (chapter: string, questions: Question[]) => void;
  selectAnswer: (answer: string) => void;
  goToNext: () => void;
  goToPrevious: () => void;
  restartQuiz: () => void;
  setChapter: (chapter: string) => void; // To set the current chapter
}

export const useQuizStore = create<QuizState>((set) => ({
  currentChapter: '', // Initialize currentChapter
  questions: [],
  currentIndex: 0,
  userAnswers: [],
  quizFinished: false,
  correctCount: 0,
  wrongCount: 0,

  // setQuestions: (questions) => set({ questions, userAnswers: new Array(questions.length).fill(null) }),
  // Set questions for a specific chapter
  setQuestions: (chapter, questions) => set({
    currentChapter: chapter,
    questions,
    userAnswers: new Array(questions.length).fill(null),
  }),

   // Set the current chapter
   setChapter: (chapter) => set({ currentChapter: chapter }),


  selectAnswer: (answer) =>
    set((state) => {
      if (state.userAnswers[state.currentIndex] !== null) return state; // Prevent re-selection

      const newAnswers = [...state.userAnswers];
      newAnswers[state.currentIndex] = answer;

      const allAnswered = newAnswers.every((ans) => ans !== null);
      let correctCount = 0;
      let wrongCount = 0;

      if (allAnswered) {
        correctCount = newAnswers.filter((ans, i) => ans === state.questions[i].correctAnswer).length;
        wrongCount = newAnswers.length - correctCount;
      }

      return {
        userAnswers: newAnswers,
        quizFinished: allAnswered,
        correctCount,
        wrongCount,
      };
    }),

    goToNext: () => set((state) => {
      const nextIndex = state.currentIndex + 1;
      const quizFinished = nextIndex >= state.questions.length;
      return {
        currentIndex: nextIndex,
        quizFinished,
      };
    }),

    goToPrevious: () => set((state) => {
      const prevIndex = state.currentIndex - 1;
      return {
        currentIndex: prevIndex,
        quizFinished: false, // Ensure quizFinished is reset when navigating backward
      };
    }),

  restartQuiz: () =>
    set((state) => ({
      currentIndex: 0,
      userAnswers: new Array(state.questions.length).fill(null),
      quizFinished: false,
      correctCount: 0,
      wrongCount: 0,
    })),
}));
