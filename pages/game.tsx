import { useState, useEffect } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import { useInterval, useGame } from "../hooks";
import { useAppContext } from "../contexts";

const Game: NextPage = () => {
  const [letterIndex, setLetterIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { data, isLoading, isError } = useGame();

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
    if (data) {
      if (wrongAnswers >= 2 || letterIndex === data.gameString.length - 1) {
        router.push("/results");
      }
    }
  }, [wrongAnswers, letterIndex, router, data]);

  const handleClick = () => {
    if (data) {
      const currentLetter = data.gameString[letterIndex];
      const comparisonLetter = data.gameString[letterIndex - 2];

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
    }
  };

  if (isError) {
    return <p>There was an error fetching the game data</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="mt-10 flex flex-col items-center">
      <h1 className="text-purple text-xl">Welcome, {username}</h1>

      <h2 className="text-xl mt-4">
        Click yes if this letter was same as 2 letters ago:
      </h2>

      <p className="text-5xl mt-4 text-center">
        {data?.gameString[letterIndex]}
      </p>

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
