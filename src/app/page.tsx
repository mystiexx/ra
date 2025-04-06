"use client";
import { useState } from "react";
import { Keyboard } from "./components/ui/keyboard";
import Line from "./components/ui/line";
import Modal from "./components/ui/modal";
import useHomePage from "./hooks/useHomePage";
import { IoInformationCircle } from "react-icons/io5";
import { getHintFromSolution } from "./helper";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
export default function Home() {
  const {
    word_length,
    solution,
    guesses,
    current_guess,
    handleKeyPress,
    isGameOver,
    loading,
    resetGame,
  } = useHomePage();
  const [show, setShow] = useState(false);

  const handleKey = (key: string) => {
    handleKeyPress(key);
  };

  const hint = getHintFromSolution(solution);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <AiOutlineLoading3Quarters
          size={30}
          color="#A9B2EF"
          className="animate-spin"
        />
      </div>
    );
  }
  return (
    <div className="grid place-items-center">
      <Modal open={show} onClose={() => setShow(!show)} />
      <div className="max-w-[390px] w-full lg:w-[390px] h-screen">
        <div className="border-b border-[#576290] p-3">
          <p className="text-center text-3xl font-bold">Wordle</p>
        </div>
        <div className="flex flex-col justify-between h-[93dvh]">
          <div
            className="flex  justify-end pt-5 px-3"
            onClick={() => setShow(!show)}
          >
            <IoInformationCircle size={20} color="#A9B2EF" />
          </div>
          <div className="grid place-items-center h-full">
            <div>
              <div className="flex flex-col gap-2 p-4 items-center place-self-center">
                {guesses.map((guess, index) => {
                  const isCurrentGuess =
                    index === guesses.findIndex((g) => g == "");
                  return (
                    <Line
                      key={index}
                      guess={isCurrentGuess ? current_guess : guess ?? ""}
                      solution={solution}
                      isFinal={!isCurrentGuess && guess !== ""}
                      word_length={word_length}
                    />
                  );
                })}
              </div>
              <div>
                <p className="text-center">{isGameOver ? `Answer: ${solution}` :  `Hint: ${hint}`}</p>
              </div>
              {isGameOver && (
                <div className="flex justify-center">
                  <button
                    onClick={resetGame}
                    className="mt-3 bg-[#F2940F] text-white font-semibold text-[12px] p-3 rounded-lg cursor-pointer"
                  >
                    Reset Game
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="block lg:hidden">
            <Keyboard handleKeyPress={handleKey} />
          </div>
        </div>
      </div>
    </div>
  );
}
