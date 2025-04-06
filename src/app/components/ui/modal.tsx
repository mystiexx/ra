import React from "react";
import { IoMdCloseCircle } from "react-icons/io";

const word = "TOPSI";
const word2 = "SHORT";
const word3 = "SHOTS";
const solution = "SHOTS";

interface Props {
  open: boolean;
  onClose: () => void;
}

const Modal = ({ open, onClose }: Props) => {
  return (
    <div
      className={`fixed duration-700 ease-in-out text-[#A9B2EF] top-0 lg:w-[390px] w-full h-screen bg-[#09155A] rounded-t-xl transition-all  ${
        open ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b border-[#A9B2EF]">
        <p className="text-[16px]  font-semibold">How to play with wordle?</p>
        <IoMdCloseCircle onClick={onClose} size={20} />
      </div>

      <div className="p-4 flex flex-col gap-3 py-10">
        <p className="text-[14px]">You must find the right words in 6 steps</p>

        <p className="text-[14px] font-medium">
          Click the submit or Enter button on the keyboard after each word you
          type and check if you guessed correctly.
        </p>

        <div className="flex flex-col gap-3">
          <p className="font-semibold">Examples</p>
          <div>
            <p className="mb-1 text-[14px]">
              The letter T, O, S is in the word, but in the wrong place
            </p>
            <Solution word={word} solution={solution} />
          </div>
          <div>
            <p className="mb-1 text-[14px]">
              The letter S,H,O is in the word and in the correct place
            </p>
            <Solution word={word2} solution={solution} />
          </div>
          <div>
            <p className="mb-1 text-[14px]">
              The letter SHOTS is in the word and in the correct place
            </p>
            <Solution word={word3} solution={solution} />
          </div>

          <div className="bg-[#1A2585] rounded-lg p-3 w-full mt-6">
            Wordle will be waiting with new words every day at the same time.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

interface SolutionProps {
  word: string;
  solution: string;
}

const Solution = ({ word, solution }: SolutionProps) => {
  return (
    <div className="flex items-center gap-2">
      {word.split("").map((char: string, index: number) => {
        return (
          <span
            key={index}
            className={`${
              char === solution[index]
                ? "bg-[#14B077]"
                : solution.includes(char)
                ? "bg-[#F2940F]"
                : "bg-[#576290]"
            }  w-10 h-10 text-[14px] font-semibold grid place-items-center capitalize rounded-md text-white mx-1`}
          >
            {char}
          </span>
        );
      })}
    </div>
  );
};
