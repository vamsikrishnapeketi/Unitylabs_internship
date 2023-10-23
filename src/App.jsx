import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Postdetail } from "./pages/Postdetail";

const App = () => {
  return (
    <div className="border-x w-full max-w-7xl mx-auto px-4">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Postdetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
