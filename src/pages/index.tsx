import Image from "next/image";
import { useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [clicked, setClicked] = useState(0);
  const wordsList = ["I'm Cyantr09.", "I love Python.", "I'm learning Unity."];
  const handleClick = () => {
    setClicked(clicked == 2 ? 0 : clicked + 1);
  };
  return (
    <main className="h-screen flex justify-center items-center cursor-not-allowed">
      <div className="flex flex-col">
        <h1 className="font-mono text-center text-[10vw] md:text-[5vw] self-center">
          Portfolio.
        </h1>
        <div
          className="w-[60vw] md:w-[30vw] h-[5vh] rounded-xl bg-slate-700 dark:bg-white text-white dark:text-slate-500 flex justify-center items-center self-center cursor-help"
          onClick={handleClick}
        >
          <span>{wordsList[clicked]}</span>
        </div>
      </div>
    </main>
  );
}
