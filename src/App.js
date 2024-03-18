import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <GoogleOAuthProvider clientId="655519287693-bsva06glbv19q18p4hnsj8a9fghntfk4.apps.googleusercontent.com">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </GoogleOAuthProvider>
      ;
    </BrowserRouter>
  );
}

export default App;
