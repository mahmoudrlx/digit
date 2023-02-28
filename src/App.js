import { ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { light, dark } from "./assets/layout/theme";
import { CssBaseline } from "@mui/material";

import Home from "./pages/home";

import "./App.css";

const App = () => {
  const themeMode = useSelector((state) => state?.theme?.value);

  return (
    <ThemeProvider theme={themeMode === "light" ? light : dark}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
};

export default App;
