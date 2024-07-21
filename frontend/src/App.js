import React from "react";
import LoginForm from "./Components/LoginForm/LoginForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Components/RegisterForm/RegisterForm";
import DataPage from "./DataPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/login" exact element={<LoginForm />}></Route>
          <Route path="/register" exact element={<Register />}></Route>
          <Route path="/data" exact element={<DataPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
