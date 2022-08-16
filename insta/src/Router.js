import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/pages/Main";
import LogIn from "./components/pages/LogIn";
import SignUp from "./components/pages/SignUp";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/log-in" element={<LogIn />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
