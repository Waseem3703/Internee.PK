import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Internship from "./pages/Internship";
import GraduatePrograms from "./pages/GraduatePrograms";
import StudentAmbassador from "./pages/StudentAmbassador";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="/internship" element={ <Internship/>} />
          <Route path="/graduate-program" element={<GraduatePrograms/>}/>
          <Route path="/student-ambassador" element={<StudentAmbassador/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
