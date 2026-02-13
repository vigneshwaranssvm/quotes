import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormPage from "./components/FormPage.jsx";
import DisplayPage from "./components/DisplayPage.jsx";


function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/display" element={<DisplayPage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
