import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./components/Login";
import RegistationPage from "./components/Registration";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistationPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
