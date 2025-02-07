"use client";

import Option from "./Option";

interface OptionListProps {
  options: string[];
  correctAnswer: string;
  onAnswerSelect: (selected: string) => void;
  selectedAnswer: string | null;
}

function OptionList({
  options,
  correctAnswer,
  onAnswerSelect,
  selectedAnswer,
}: OptionListProps) {
  return (
    <ul className="space-y-2 w-full">
      {options.map((option) => (
        <Option
          key={option}
          option={option}
          correctAnswer={correctAnswer}
          onSelect={onAnswerSelect}
          isSelected={option === selectedAnswer}
          isCorrect={option === selectedAnswer ? option === correctAnswer : null}
        />
      ))}
    </ul>
  );
}

export default OptionList;
