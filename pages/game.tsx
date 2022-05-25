import { useState, useEffect, useCallback } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import useInterval from "../hooks/useInterval";
import { useAppContext } from "../contexts";

// TODO: move from here to api response
const testString = "AHGFGAHGFGAHGFG";

const Game: NextPage = () => {
  const [letterIndex, setLetterIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const {
    username,
    setCorrectAnswers,
    correctAnswers,
    wrongAnswers,
    setWrongAnswers,
  } = useAppContext();

  const router = useRouter();

  useInterval(
    () => {
      setLetterIndex(letterIndex + 1);
    },
    isPaused ? null : 2000
  );

  useEffect(() => {
    if (wrongAnswers >= 2 || letterIndex === testString.length - 1) {
      router.push("/results");
    }
  }, [wrongAnswers, letterIndex, router]);

  const handleClick = () => {
    const currentLetter = testString[letterIndex];
    const comparisonLetter = testString[letterIndex - 2];

    // pause interval
    setIsPaused(true);

    // check if you're right
    if (currentLetter === comparisonLetter) {
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setWrongAnswers(wrongAnswers + 1);
    }

    // unpause
    setIsPaused(false);
  };

  return (
    <div className="mt-10 flex flex-col items-center">
      <h1 className="text-purple text-xl">Welcome, {username}</h1>

      <h2 className="text-xl mt-4">
        Click yes if this letter was same as 2 letters ago:
      </h2>

      <p className="text-5xl mt-4 text-center">{testString[letterIndex]}</p>

      <button
        type="button"
        className="bg-orange-500 hover:bg-orange-600 p-4 text-lg rounded"
        onClick={handleClick}
      >
        CLICK
      </button>
    </div>
  );
};

export default Game;
