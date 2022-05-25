import type { AppProps } from "next/app";

import { PageLayout } from "../components/PageLayout";
import { Provider } from "../contexts";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </Provider>
  );
}

export default MyApp;
