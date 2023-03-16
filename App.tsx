import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import {
  Nunito_400Regular,
  Nunito_700Bold,
  useFonts,
} from "@expo-google-fonts/nunito";
//testando pra ver modificação
import theme from "./src/theme";
import { Routes } from "./src/routes";
import { DietProvider } from "./src/DataFormContext";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" backgroundColor="transparent" translucent />
      <DietProvider>
        <Routes />
      </DietProvider>
    </ThemeProvider>
  );
}
