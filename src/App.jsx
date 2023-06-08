import { Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Index from "./Index/Index";
import Signup from "./Signup/Signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
