import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Postdetail } from "./pages/Postdetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="details" element={<Postdetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
