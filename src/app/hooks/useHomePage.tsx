import axios from "axios";
import { useEffect, useState } from "react";
import { getWords } from "../helper";

const word_length = 5;

const useHomePage = () => {
  const [solution, setSolution] = useState("");
  const [guesses, setGuess] = useState(Array(6).fill(""));
  const [current_guess, setCurrentGuess] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if all guesses are filled
    if (guesses.every((guess) => guess !== "")) {
      setIsGameOver(true);
      return;
    }
  }, [guesses]);

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      console.log(event.key);
      if (isGameOver) {
        return;
      }

      if (event.key === "Enter") {
        if (current_guess.length !== word_length) {
          return;
        }
        const newGuesses = [...guesses];
        newGuesses[newGuesses.findIndex((g) => g === "")] = current_guess;
        setGuess(newGuesses);
        setCurrentGuess("");
        const isCorrect = current_guess === solution;
        if (isCorrect) {
          setIsGameOver(true);
        }
      } else if (event.key === "Backspace") {
        setCurrentGuess((prev) => prev.slice(0, -1));
        return;
      }
      if (/^[a-z]$/.test(event.key) === false) return;

      if (current_guess.length === word_length) {
        return;
      }
      setCurrentGuess((prev) => prev + event.key);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [current_guess, isGameOver, solution]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await getWords();
      const word = response[Math.floor(Math.random() * response.length)];
      setSolution(word);
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleKeyPress = (key: string) => {
    if (isGameOver) {
      return;
    }
    if (key === "ENTER") {
      if (current_guess.length !== word_length) {
        return;
      }
      const newGuesses = [...guesses];
      newGuesses[newGuesses.findIndex((g) => g === "")] = current_guess;
      setGuess(newGuesses);
      setCurrentGuess("");
      const isCorrect = current_guess === solution;
      if (isCorrect) {
        setIsGameOver(true);
      }
    } else if (key === "DEL") {
      setCurrentGuess((prev) => prev.slice(0, -1));
      return;
    }

    if (/^[a-z]$/.test(key) === false) {
      return;
    }
    if (current_guess.length === word_length) {
      return;
    }
    setCurrentGuess((prev) => prev + key);
  };

  const fetchData = async () => {
    setLoading(true);
    const response = await getWords();
    const word = response[Math.floor(Math.random() * response.length)];
    setSolution(word);
    setLoading(false);
  };

  const resetGame = () => {
    fetchData();
    setGuess(Array(6).fill(""));
    setCurrentGuess("");
    setIsGameOver(false);
  };

  return {
    word_length,
    solution,
    guesses,
    current_guess,
    isGameOver,
    handleKeyPress,
    loading,
    resetGame,
  };
};

export default useHomePage;
