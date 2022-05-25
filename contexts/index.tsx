import {
  createContext,
  FC,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";
import { receiveMessageOnPort } from "worker_threads";

export type ContextTypes = {
  username?: string;
  setUsername: Dispatch<SetStateAction<string | undefined>>;
  correctAnswers: number;
  setCorrectAnswers: Dispatch<SetStateAction<number>>;
  wrongAnswers: number;
  setWrongAnswers: Dispatch<SetStateAction<number>>;
  showAnalyticsEvents: boolean;
  setShowAnalyicsEvents: Dispatch<SetStateAction<boolean>>;
  resetGame: () => void;
};

const Context = createContext<ContextTypes>({
  username: undefined,
  setUsername: () => null,
  correctAnswers: 0,
  setCorrectAnswers: () => null,
  wrongAnswers: 0,
  setWrongAnswers: () => null,
  resetGame: () => null,
  showAnalyticsEvents: false,
  setShowAnalyicsEvents: () => null,
});

type Props = {
  children: JSX.Element;
};

export const Provider: FC<Props> = ({ children }) => {
  const [username, setUsername] = useState<string>();
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [showAnalyticsEvents, setShowAnalyicsEvents] = useState(false);

  const resetGame = () => {
    setCorrectAnswers(0);
    setWrongAnswers(0);
  };

  return (
    <Context.Provider
      value={{
        username,
        setUsername,
        correctAnswers,
        setCorrectAnswers,
        wrongAnswers,
        setWrongAnswers,
        resetGame,
        showAnalyticsEvents,
        setShowAnalyicsEvents,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useAppContext = () => useContext(Context);
