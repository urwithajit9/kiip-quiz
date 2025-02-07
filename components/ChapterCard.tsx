import { Box, Text, Image, Button, VStack } from "@chakra-ui/react";

interface ChapterCardProps {
  chapterName: string;
  chapterImage: string;
  onSelect: () => void;
}

const ChapterCard: React.FC<ChapterCardProps> = ({ chapterName, chapterImage, onSelect }) => {
  return (
    <Box
      width="200px"
      height="300px"
      border="1px"
      borderRadius="md"
      boxShadow="md"
      overflow="hidden"
      cursor="pointer"
      onClick={onSelect}
      _hover={{ transform: "scale(1.05)", transition: "transform 0.3s" }}
    >
      <Image src={chapterImage} alt={chapterName} height="60%" width="100%" objectFit="cover" />
      <VStack gap={2} p="4">
        <Text fontSize="xl" fontWeight="bold" textAlign="center">{chapterName}</Text>
        <Button variant="solid" colorScheme="blue" width="100%">Start Quiz</Button>
      </VStack>
    </Box>
  );
};

export default ChapterCard;
