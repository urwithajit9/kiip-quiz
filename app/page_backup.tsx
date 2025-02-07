"use client";
// import QuizPanel from "@/components/QuizPanel";
// import QuizPanelWithResult from "@/components/QuizPanelWithResult";
import QuizPanelWithProgressBar from "@/components/QuizPanelWithProgressBar";
import QuizPanelKIIP from "@/components/QuizPanelKIIP";
import { useEffect } from "react";
import { useQuizStore } from "@/store/quizStore";

const questionBank = [
  {"question_type": "text", "question":"안녕하세요","options":["Hello","Goodbye","Thank you","Welcome"], "correctAnswer": "Hello"},
  {"question_type": "image","question":"/quiz_images/kid.png","options":["어린이","아들","딸","오이"], "correctAnswer": "어린이"},
  {"question_type": "text","question":"감사합니다","options":["Hello","Goodbye","Thank you","Welcome"], "correctAnswer": "Thank you"},
  {"question_type": "text","question":"안녕히 가세요","options":["Hello","Goodbye","Thank you","Welcome"], "correctAnswer": "Goodbye"},
  {"question_type": "text","question":"어서 오세요","options":["Hello","Goodbye","Thank you","Welcome"], "correctAnswer": "Welcome"},
  
];

export default function QuizPage() {
  const { setQuestions } = useQuizStore();

  useEffect(() => {
    // Set questions when the page loads
    setQuestions(questionBank);
  }, [setQuestions]);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* <QuizPanel questions={questionBank} /> */}
      {/* <QuizPanelWithResult questions={questionBank} /> */}
      {/* <QuizPanelWithProgressBar  /> */}
      <QuizPanelKIIP />
    </div>
  );
}
