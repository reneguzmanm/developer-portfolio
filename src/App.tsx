import { Route, Routes } from "react-router";
import Home from "./views/Home";
import IndustrialWeighing from "./views/IndustrialWeighing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/case-studies/industrial-weighing"
        element={<IndustrialWeighing />}
      />

      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;