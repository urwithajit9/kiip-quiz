"use client";

import Link from "next/link";
import chapters from "@/app/chapter/data/chapter_name";

export default function Home() {
  const bgColors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-teal-500",
    "bg-orange-500",
  ];

  const chaptersWithColors = chapters.map((chapter) => {
    const randomColor = bgColors[Math.floor(Math.random() * bgColors.length)];
    return { ...chapter, bgColor: randomColor };
  });
  
  
  
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
        <h1 className="text-4xl font-bold mb-6 text-teal-500">KIIP Quiz: Select a Chapter</h1>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
          {chaptersWithColors.map((chapter) => (
            <Link
              key={chapter.chapter_number}
              href={`/chapter/${chapter.chapter_number}`}
              passHref
            >
              <div
                className="w-80 h-60 p-4 flex flex-col items-center justify-center text-white text-xl font-semibold rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105 bg-[#92d3d3]"
              >
                <div className="mb-2">{chapter.chapter_number} </div>
                <div>{chapter.chapter_name} </div>
                <div className="justify-center items-center">{chapter.chapter_name_eng} </div>
                {/* <div className="text-sm mt-1 justify-center">({chapter.chapter_description}) </div> */}
                
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
