import { Advertise } from "./Components/Advertise";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Routes/Home";
import { Celebrity } from "./Routes/Celebrity";
import { Movies } from "./Routes/Movies";
import { NotFound } from "./Routes/NotFound";
import { TV } from "./Routes/TV";
import { Login } from "./Routes/Login";
import { Nav } from "./Components/Navigater";
import { useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState("Unkown");
  const loginStatus = (x) => {
    setIsLogin(x);
  };
  const getUserName = (user) => {
    setUserName(user);
  };
  return (
    <>
      <Router>
        <Nav isLogin={isLogin} loginStatus={loginStatus} userName={userName} />
        <Advertise />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/celebrity" element={<Celebrity />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/TV" element={<TV />} />
          <Route path="/movies/:id" element={<Movies />} />
          <Route path="/TV/:id" element={<TV />} />
          <Route
            path="/login"
            element={
              <Login loginStatus={loginStatus} getUserName={getUserName} />
            }
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
