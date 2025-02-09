// app/chapter/[id]/page.tsx

"use client";

import {  Button} from "@chakra-ui/react";
import { useEffect } from "react";
import { useParams } from "next/navigation";

import { useQuizStore } from "@/store/quizStore";
import QuizPanelWithProgressBar from "@/components/QuizPanelWithProgressBar";
import Link from "next/link";  // Import Link from Next.js
import { questionBankALL } from "../data/questionsBank";

export default function ChapterQuizPage () { 
  const { setQuestions, currentChapter, setChapter, restartQuiz } = useQuizStore();
  const { id } = useParams();  
  const chapter = `chapter${id}`; // Example: selected chapter is chapter1
  console.log(chapter);
  const chapterQuestionsBank = questionBankALL[chapter];
  console.log(chapterQuestionsBank);


  useEffect(() => {
  // Load questions for the chapter if not already set
  if (currentChapter !== chapter) {
    const chapterQuestions = questionBankALL[chapter] || []; // Get questions for the current chapter
    setQuestions(chapter, chapterQuestions); // Set questions in the store
    setChapter(chapter); // Set the current chapter in the store
  }
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Link Button to go back to the home page */}
      <Link href="/" passHref>
      <Button
  mt="4"
  className="bg-teal-500 hover:bg-teal-600 mb-6 w-full text-white font-semibold p-5 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
  onClick={restartQuiz}
>
  Go Back to Home
</Button>

      </Link>
               
        <QuizPanelWithProgressBar />        
    </div>
  );
};


