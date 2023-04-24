import axios from "axios";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/header";
import { Routers } from "./routes/index.routes";
import { GlobalStyle } from "./styles.global";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routers />
    </BrowserRouter>
  );
}

export default App;
