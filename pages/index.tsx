import { FormEvent, SyntheticEvent, useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { sentenceCase } from "change-case";

import { useAppContext } from "../contexts";
import { Toggle } from "../components/Toggle";
import { sendAnalyticsEvent } from "../utilities";

const Home: NextPage = () => {
  const [name, setName] = useState("");

  const { setUsername, showAnalyticsEvents } = useAppContext();

  const router = useRouter();

  const handleNameChange = (event: FormEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    // set name in global state
    setUsername(sentenceCase(name));

    sendAnalyticsEvent(showAnalyticsEvents, "started_game");

    router.push("/game");
  };

  return (
    <div className="mt-10 flex flex-col">
      <h1 className="text-purple text-xl">Game 1</h1>

      <p className="mt-2">
        This is a small memory game. You will be shown a series of letters one
        after the other. If the current letter you are seeing, is the same as
        the one you saw{" "}
        <span className="text-purple font-semibold">2 letters</span> ago then
        click the button.
      </p>

      <p className="my-2">
        The game will end either at the end of the sequence or after 2 incorrect
        answers.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col">
        <label className="flex flex-col gap-2 mt-4 text-purple">
          Please enter your name
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            className="text-lg border rounded p-2 text-black"
            required
            placeholder="Enter name here..."
          />
        </label>

        <button
          type="submit"
          className="bg-green-400 hover:bg-green-500 py-4 px-6 rounded mt-4 self-end"
        >
          START
        </button>
      </form>

      <div className="self-end mt-12">
        <Toggle />
      </div>
    </div>
  );
};

export default Home;
