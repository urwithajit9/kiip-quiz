// QuestionCardImage.tsx
import React from "react";
import { Box, Image,  VStack, Text } from "@chakra-ui/react";
import OptionList from "./OptionList";

interface QuestionCardImageProps {
  imageUrl: string;
  options: string[];
  correctAnswer: string;
  onAnswerSelect: (answer: string) => void;
  selectedAnswer: string | null;
}

const QuestionCardImage: React.FC<QuestionCardImageProps> = ({
  imageUrl,
  options,
  correctAnswer,
  onAnswerSelect,
  selectedAnswer,
}) => {
  return (
    <Box  className="bg-white shadow-md rounded-lg p-6 w-full">
      <VStack gap={4} align="center">
        {/* Image Display */}
        <Image src={imageUrl} alt="Question" boxSize="250px" objectFit="contain" />

       {/* OptionList (Options List rendered here) */}
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
      </VStack>
    </Box>
  );
};

export default QuestionCardImage;
