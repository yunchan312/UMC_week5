import { Nav } from "./Components/Navigater";
import { Advertise } from "./Components/Advertise";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Routes/Home";
import { Celebrity } from "./Routes/Celebrity";
import { Movies } from "./Routes/Movies";
import { NotFound } from "./Routes/NotFound";
import { TV } from "./Routes/TV";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Advertise />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/celebrity" element={<Celebrity />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/TV" element={<TV />} />
          <Route path="/movies/:id" element={<Movies />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
