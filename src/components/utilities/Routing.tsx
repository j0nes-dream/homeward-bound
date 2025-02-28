import { BrowserRouter, Routes, Route } from "react-router";
import { Login } from "../../pages/auth/Login";
import { Register } from "../../pages/auth/Register";
import { UserAuth } from "../../pages/auth/UserAuth";
import { Pup } from "../../pages/pups/Pup";
import { Pups } from "../../pages/pups/Pups";
import { Home } from "../../pages/home/Home";

export const Routing: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<UserAuth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="pups">
          <Route index element={<Pups />} />
          <Route path=":pup" element={<Pup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
