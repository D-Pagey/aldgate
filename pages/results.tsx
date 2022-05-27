import type { NextPage } from "next";
import { useRouter } from "next/router";

import { useAppContext } from "../contexts";
import { sendAnalyticsEvent } from "../utilities";

const Results: NextPage = () => {
  const { correctAnswers, wrongAnswers, resetGame, showAnalyticsEvents } =
    useAppContext();
  const router = useRouter();

  const handleRetry = () => {
    resetGame();

    sendAnalyticsEvent(showAnalyticsEvents, "clicked_restart_game");
    router.push("/game");
  };

  return (
    <div className="mt-12 flex flex-col">
      <h1 className="text-purple text-2xl mb-2">Game Results</h1>

      <p className="text-xl">
        <span className="font-semibold">Correct answers:</span>{" "}
        <span>{correctAnswers}</span>
      </p>
      <p className="text-xl">
        <span className="font-semibold">Wrong answers:</span>{" "}
        <span>{wrongAnswers}</span>
      </p>

      <button
        className="bg-orange p-4 rounded self-end mt-4"
        onClick={handleRetry}
      >
        Try again
      </button>
    </div>
  );
};

export default Results;
