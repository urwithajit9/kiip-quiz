"use client";

import { CheckCircleIcon, XCircleIcon } from "lucide-react"; // Icons for correct/wrong answers

interface OptionProps {
  option: string;
  correctAnswer: string;
  onSelect: (selected: string) => void;
  isSelected: boolean;
  isCorrect: boolean | null;
}

function Option({ option, onSelect, isSelected, isCorrect }: OptionProps) {
  return (
    <button
      className={`flex items-center justify-between w-full p-3 rounded-lg shadow-md m-2 text-lg font-semibold transition-all duration-200 
        ${isSelected ? (isCorrect ? "bg-green-400" : "bg-red-400") : "bg-orange-300 hover:bg-orange-400"} 
        cursor-pointer`}
      onClick={() => onSelect(option)}
      disabled={isSelected} // Disable after selection
    >
      {option}
      {isSelected &&
        (isCorrect ? (
          <CheckCircleIcon className="text-white" />
        ) : (
          <XCircleIcon className="text-white" />
        ))}
    </button>
  );
}

export default Option;
