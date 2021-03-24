import React, { lazy, Suspense } from "react";
import { useRecoilState } from "recoil";
import { ThemeProvider } from "styled-components";
import Loading from "components/Loading";
import constants from "atoms/constants";

const Main = lazy(() => import("screens/Main"));

function App() {
  const [theme] = useRecoilState(constants.theme);

  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Loading />}>
        <Main />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
