import React from 'react'

const Line = ({ guess, solution, isFinal, word_length}: any) => {
    const tiles = [];

    for (let i = 0; i < word_length; i++) {
      const char = guess[i];
      let className =
        "border-1 border-[#576290] w-10 h-10 text-[14px] font-semibold grid place-items-center capitalize rounded-md text-white";
  
        // className += " bg-[#576290]";
      if (isFinal) {
        if (char.toUpperCase() === solution[i]) {
          className += " bg-[#14B077]";
        } else if (solution.includes(char.toUpperCase())) {
          className += " bg-[#F2940F]";
        } else  {
          className += " bg-[#0D1947]";
        }
      }
  
      tiles.push(
        <div key={i} className={className}>
          {char}
        </div>
      );
    }
    return <div className="flex gap-2">{tiles}</div>;
}

export default Line