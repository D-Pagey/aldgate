import { FormEvent, SyntheticEvent, useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { sentenceCase } from "change-case";

import { useAppContext } from "../contexts";
import { Toggle } from "../components/Toggle";

const Home: NextPage = () => {
  const [name, setName] = useState("");

  const { setUsername } = useAppContext();

  const router = useRouter();

  const handleNameChange = (event: FormEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    setUsername(sentenceCase(name));
    // set name in global state
    router.push("/game");
  };

  return (
    <div className="mt-10 flex flex-col">
      <h1 className="text-purple text-xl">Game 1</h1>

      <p className="mt-2">
        This is a small memory exercise. You need to remember if the current
        letter matches the letter from 2 ago....TODO FIX EXPLANATION
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
          className="bg-green-500 py-4 px-6 rounded mt-4 self-end"
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
