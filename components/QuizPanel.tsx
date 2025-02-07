"use client";

import { useState } from "react";
import QuestionCard from "./QuestionCard";

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

interface QuizPanelProps {
  questions: Question[];
}

function QuizPanel({ questions }: QuizPanelProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const currentQuestion = questions[currentIndex];

  const handleAnswerSelect = (selected: string) => {
    if (selectedAnswer !== null) return; // Prevent re-selection

    setSelectedAnswer(selected);

    if (selected === currentQuestion.correctAnswer) {
      setCorrectCount((prev) => prev + 1);
    } else {
      setWrongCount((prev) => prev + 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null); // Reset selection for the new question
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setSelectedAnswer(null); // Reset selection
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-xl mx-auto text-center">
      <h1 className="text-2xl font-bold text-gray-800">Choose Correct Word!</h1>
 
  

      <QuestionCard
        question={currentQuestion.question}
        options={currentQuestion.options}
        correctAnswer={currentQuestion.correctAnswer}
        onAnswerSelect={handleAnswerSelect} // Pass handler
        selectedAnswer={selectedAnswer}
      />

      <div className="flex justify-between mt-4">
        <button
          className="px-4 py-2 bg-gray-400 text-white rounded-lg disabled:opacity-50"
          onClick={goToPrevious}
          disabled={currentIndex === 0}
        >
          Previous
        </button>
        {/* <p className="text-green-500">✅  {correctCount}</p>
        <p className="text-red-500">❌  {wrongCount}</p> */}
        <p className="text-gray-600 mt-2">
        Question {currentIndex + 1} / {questions.length}
      </p>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
          onClick={goToNext}
          disabled={currentIndex === questions.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default QuizPanel;
