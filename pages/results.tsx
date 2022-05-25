import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useAppContext } from "../contexts";

const Results: NextPage = () => {
  const { correctAnswers, wrongAnswers, resetGame } = useAppContext();
  const router = useRouter();

  const handleRetry = () => {
    resetGame();
    router.push("/game");
  };

  return (
    <div className="border mt-12 flex flex-col items-center">
      <h1 className="text-purple text-xl">Results Yo</h1>

      <p>
        Correct answers: <span>{correctAnswers}</span>
      </p>
      <p>
        Wrong answers: <span>{wrongAnswers}</span>
      </p>

      <button
        className="bg-blue-500 p-4 rounded hover:bg-blue-600"
        onClick={handleRetry}
      >
        Try again
      </button>
    </div>
  );
};

export default Results;
