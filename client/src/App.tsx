import ThemeProvider from "./theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/auth/login";
import RegisterPage from "./pages/auth/register";
import Homepage from "./pages/private/home";
import ProfilePage from "./pages/private/home/profile";

function App() {
  

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
