import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormPage from "./components/FormPage";
import DisplayPage from "./components/DisplayPage";


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
