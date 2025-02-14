"use client";
import { Progress, Stack, Text } from "@chakra-ui/react";
import { useQuizStore } from "@/store/quizStore";
import QuestionCard from "./QuestionCard";
import QuestionCardImage from "./QuestionCardImage";

function QuizPanelWithProgressBar() {
  const {
    questions,
    currentIndex,
    userAnswers,
    quizFinished,
    correctCount,
    wrongCount,
    selectAnswer,
    goToNext,
    goToPrevious,
    restartQuiz,
  } = useQuizStore();

  if (!questions.length) {
    return <div>Loading questions...</div>; // Or handle loading state here
  }


  const currentQuestion = questions[currentIndex];

  const progressPercentage = ((currentIndex + 1) / questions.length) * 100; // ✅ Calculate progress

  

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-xl mx-auto text-center">
      <h1 className="text-2xl font-bold text-gray-800">Choose correct Option!</h1>


      {quizFinished ? (
        <div className="mt-4">
          <h2 className="text-2xl font-bold text-green-600">🎉 Quiz Completed!</h2>
          <p className="text-green-500">✅ Correct: {correctCount}</p>
          <p className="text-red-500">❌ Incorrect: {wrongCount}</p>

          {/* ✅ Restart Button */}
          <button
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            onClick={restartQuiz}
          >
            🔄 Restart Quiz
          </button>
        </div>
      ) : (
        <>{currentQuestion.question_type === "text" ? (       
          <QuestionCard
            question={currentQuestion.question}
            options={currentQuestion.options}
            correctAnswer={currentQuestion.correctAnswer}
            onAnswerSelect={selectAnswer}
            selectedAnswer={userAnswers[currentIndex]}
          />):( 
          <QuestionCardImage
            imageUrl={currentQuestion.question}
            options={currentQuestion.options}
            correctAnswer={currentQuestion.correctAnswer}
            onAnswerSelect={selectAnswer}
            selectedAnswer={userAnswers[currentIndex]}
          />)
        }

          <div className="flex justify-between mt-4">
            <button
              className="px-4 py-2 bg-gray-400 text-white rounded-lg disabled:opacity-50"
              onClick={goToPrevious}
              disabled={currentIndex === 0}
            >
              Previous
            </button>

      {/* ✅ Updated Progress Bar with Chakra 3.0 */}
      <Stack gap="2" align="center" mt="4">
        <Text fontWeight="bold">
          {currentIndex + 1} / {questions.length} Completed
        </Text>

        <Progress.Root width="100%" value={progressPercentage} colorPalette="green" variant="outline">
          <Progress.Track>
            <Progress.Range />
          </Progress.Track>
        </Progress.Root>
      </Stack>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
              onClick={goToNext}
              disabled={currentIndex === questions.length - 1}
            >
              {currentIndex === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default QuizPanelWithProgressBar;
