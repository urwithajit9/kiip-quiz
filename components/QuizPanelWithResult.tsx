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
  const [userAnswers, setUserAnswers] = useState<(string | null)[]>(new Array(questions.length).fill(null));
  const [quizFinished, setQuizFinished] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);

  const currentQuestion = questions[currentIndex];

  const handleAnswerSelect = (selected: string) => {
    if (userAnswers[currentIndex] !== null) return; // Prevent re-selection

    const newAnswers = [...userAnswers];
    newAnswers[currentIndex] = selected;
    setUserAnswers(newAnswers);

    // If last question is answered, calculate results
    if (newAnswers.every((answer) => answer !== null)) {
      calculateResults(newAnswers);
      setQuizFinished(true);
    }
  };

  const calculateResults = (answers: (string | null)[]) => {
    let correct = 0;
    let incorrect = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        correct++;
      } else {
        incorrect++;
      }
    });
    setCorrectCount(correct);
    setWrongCount(incorrect);
  };

  const goToNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-xl mx-auto text-center">
      <h1 className="text-2xl font-bold text-gray-800">Choose correct Word !</h1>
  

      {quizFinished ? (
        <div className="mt-4">
          <h2 className="text-2xl font-bold">Quiz Completed!</h2>
          <p className="text-green-500">✅ Correct: {correctCount}</p>
          <p className="text-red-500">❌ Incorrect: {wrongCount}</p>
        </div>
      ) : (
        <>
          <QuestionCard
            question={currentQuestion.question}
            options={currentQuestion.options}
            correctAnswer={currentQuestion.correctAnswer}
            onAnswerSelect={handleAnswerSelect}
            selectedAnswer={userAnswers[currentIndex]}
          />

          <div className="flex justify-between mt-4">
            <button
              className="px-4 py-2 bg-gray-400 text-white rounded-lg disabled:opacity-50"
              onClick={goToPrevious}
              disabled={currentIndex === 0}
            >
              Previous
            </button>
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
        </>
      )}
    </div>
  );
}

export default QuizPanel;
