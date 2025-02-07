import { Grid, GridItem, Box } from "@chakra-ui/react";
import ChapterCard from "./ChapterCard";
import { useState } from "react";
import QuestionCardImage from "./QuestionCardImage"; // This would be a separate component for quiz questions

const QuizPanelKIIP = () => {
  const chapters = Array.from({ length: 18 }, (_, index) => ({
    name: `Chapter ${index + 1}`,
    image: `/chapters/chapter${index + 1}.jpg`, // Place chapter images in the `public/quiz_images` directory
    id: index + 1,
  }));

  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);

  const handleSelectChapter = (id: number) => {
    setSelectedChapter(id);
  };

  return (
    <Box>
      {selectedChapter === null ? (
        // Display the grid of cards for selecting a chapter
        <Grid
          templateColumns="repeat(6, 1fr)"  // Create 5 equal-width columns
          templateRows="repeat(3, auto)"    // Create 4 rows with automatic height
          gap={6}                           // Add space between grid items
        >
          {chapters.map((chapter) => (
            <GridItem key={chapter.id}>
              <ChapterCard
                chapterName={chapter.name}
                chapterImage={chapter.image}
                onSelect={() => handleSelectChapter(chapter.id)}
              />
            </GridItem>
          ))}
        </Grid>
      ) : (
        // Display the quiz for the selected chapter
        <QuestionCardImage
          imageUrl={"/chapters/chapter1.jpg"} // Use the actual image URL here
          options={["Option 1", "Option 2", "Option 3", "Option 4"]}
          correctAnswer="Option 1"
          onAnswerSelect={(answer) => console.log(answer)}
          selectedAnswer={null}/>
      )}
    </Box>
  );
};

export default QuizPanelKIIP;
