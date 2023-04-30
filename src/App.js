import React from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import TobBar from "./scenes/global/TobBar";
import Sidebar from "./scenes/global/SideBar";
function App() {
  const [theme, colorMode] = useMode();

  // return <h1>hello</h1>;

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <div className='app'>
          <Sidebar />
          <main className='content'>
            <CssBaseline />
            <TobBar />

            <Routes>
              <Route path='/' />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
export default App;
