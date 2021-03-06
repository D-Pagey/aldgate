import { useState, useEffect } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import { useInterval, useGame } from "../hooks";
import { useAppContext } from "../contexts";
import { sendAnalyticsEvent } from "../utilities";

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
    showAnalyticsEvents,
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

      // with more time I would include other data like correct vs wrong
      // maybe even which letter they clicked it on and the total string
      sendAnalyticsEvent(showAnalyticsEvents, "attempt_logged");

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
    <div className="mt-10 flex flex-col">
      <h1 className="text-purple text-2xl">Welcome, {username}</h1>

      <p>You have {2 - wrongAnswers}/2 chances left</p>

      <p className="text-5xl mt-4 text-center">
        {data?.gameString[letterIndex]}
      </p>

      <h2 className="mt-4 self-start">
        Click below if this letter was same as 2 letters ago:
      </h2>

      <button
        type="button"
        className="p-4 text-lg rounded border bg-orange mt-4 uppercase"
        onClick={handleClick}
      >
        click
      </button>
    </div>
  );
};

export default Game;
