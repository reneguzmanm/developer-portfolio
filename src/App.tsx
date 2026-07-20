import { Route, Routes } from "react-router";
import Home from "./views/Home";
import IndustrialWeighing from "./views/IndustrialWeighing";
import DistributedCapture from "./views/DistributedCapture";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/case-studies/industrial-weighing"
        element={<IndustrialWeighing />}
      />

      <Route
        path="/case-studies/distributed-capture"
        element={<DistributedCapture />}
      />

      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;