import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "./Cadastro";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/" exact element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
