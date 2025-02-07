"use client";

import OptionList from "./OptionList";
import { Text } from "@chakra-ui/react";

interface QuestionCardProps {
  question: string;
  options: string[];
  correctAnswer: string;
  onAnswerSelect: (selected: string) => void;
  selectedAnswer: string | null;
}

function QuestionCard({
  question,
  options,
  correctAnswer,
  onAnswerSelect,
  selectedAnswer,
}: QuestionCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{question}</h2>
      <OptionList
        options={options}
        correctAnswer={correctAnswer}
        onAnswerSelect={onAnswerSelect}
        selectedAnswer={selectedAnswer}
      />
       {/* Option Feedback */}
              {selectedAnswer && (
                <Text fontSize="lg" fontWeight="bold" color={selectedAnswer === correctAnswer ? "green.500" : "red.500"}>
                  {selectedAnswer === correctAnswer ? "Correct!" : "Wrong!"}
                </Text>
              )}
    </div>
  );
}

export default QuestionCard;
