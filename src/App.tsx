import AppContextWrapper from "./AppContext";
import Home from "./pages/Home";

function App() {
  return (
    <AppContextWrapper>
      <Home />
    </AppContextWrapper>
  );
}

export default App;
