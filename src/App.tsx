import { ColorModeProvider } from "./components/ui/color-mode";
import AppRouter from "./router";

function App() {
  return (
    <ColorModeProvider>
      <AppRouter />
    </ColorModeProvider>
  );
}

export default App;
