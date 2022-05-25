import { FC } from "react";
import Head from "next/head";
import Link from "next/link";
import { Toaster } from "react-hot-toast";

type Props = {
  children: JSX.Element;
};

export const PageLayout: FC<Props> = ({ children }) => (
  <div className="flex flex-col items-center min-h-screen">
    <Head>
      <title>Aldgate</title>
      <meta name="description" content="N-back assessment" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    {/* for toast notifications - mainly used to demo analytics in this case */}
    <Toaster position="top-right" />

    <header className="p-4 md:px-10 shadow flex w-full">
      <Link href="/">
        <a className="text-purple text-2xl">Aldgate</a>
      </Link>
    </header>

    <main
      className="flex flex-col w-full p-4 lg:px-0"
      style={{ maxWidth: 500 }}
    >
      {children}
    </main>
  </div>
);
