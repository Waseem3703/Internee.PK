import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Internship from "./pages/Internship";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="/internship" element={ <Internship/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
