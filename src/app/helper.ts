import axios from "axios";

export const getHintFromSolution = (solution: string): string => {
    return solution
      .split("")
      .map((char, i) => {
        // Reveal first and fourth letters, you can change this logic
        if (i === 0 || i === 3) {
          return char.toUpperCase();
        }
        return "_";
      })
      .join(" ");
  };


  export const getWords =  async () => {
    const response = await axios.get(`/api/wordle`)
    const data = response.data
    return data
  }