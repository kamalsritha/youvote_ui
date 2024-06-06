import Login from "./pages/login/Login";
import ValidateLogin from "./pages/validateLogin/ValidateLogin";
import Register from "./pages/register/Register";
import VerifyEmailPhone from "./pages/verifyEmailPhone/VerifyEmailPhone";
import Home from "./pages/home/Home";
import { useAuth } from './AuthContext';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

function App() {
  const { isAuthenticated } = useAuth();
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login/>}/>
            <Route path="validateLogin" element={<ValidateLogin/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="verifyEmailPhone" element={<VerifyEmailPhone/>}/>
            <Route path="home" element={
            (isAuthenticated()) ? <Home/> : <Navigate to="/" replace />
            }/>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
