import ThemeProvider from "./theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/auth/login";
import RegisterPage from "./pages/auth/register";
import Homepage from "./pages/private/home";
import ProfilePage from "./pages/private/home/profile";
import PrivateLayout from "./layouts/private-layout";
import PublicLayout from "./layouts/public-layout";

function App() {
  

  return (
    <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicLayout>
              <LoginPage />
            </PublicLayout>
          }
        />
        <Route
          path="/register"
          element={
            <PublicLayout>
              <RegisterPage />
            </PublicLayout>
          }
        />
        <Route
          path="/"
          element={
            <PrivateLayout>
              <Homepage />
            </PrivateLayout>
          }
        />

       
        <Route
          path="/profile"
          element={
            <PrivateLayout>
              <ProfilePage />
            </PrivateLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
  )
}

export default App
