import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Postdetail } from "./pages/Postdetail";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="details" element={<Postdetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
