import React from "react";

interface Props {
  handleKeyPress: (key: string) => void;
}

const ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "DEL"],
];

export const Keyboard = ({ handleKeyPress }: Props) => {
  return (
    <div className="flex flex-wrap justify-center bg-white rounded-lg gap-2  py-6">
      {ROWS.map((row, index) => (
        <div key={index}>
          {row.map((key) => (
            <button
              onClick={() => {
                console.log(key)
                handleKeyPress(key)
              }}
              key={key}
              className="py-2 px-3 text-[10px] rounded-md ml-1 text-black bg-[#EFF3F7]"
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};
