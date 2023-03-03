import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { Home } from "./src/screens/Home";
import {
  Nunito_400Regular,
  Nunito_700Bold,
  useFonts,
} from "@expo-google-fonts/nunito";

import theme from "./src/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
