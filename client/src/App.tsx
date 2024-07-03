import ThemeProvider from "./theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/auth/login";
import RegisterPage from "./pages/auth/register";
import Homepage from "./pages/private/home";
import ProfilePage from "./pages/private/home/profile";
import PrivateLayout from "./layouts/private-layout";
import PublicLayout from "./layouts/public-layout";
import EditEventPage from "./pages/private/admin/events/edit";
import CreateEvenetPage from "./pages/private/admin/events/create";
import EventsPage from "./pages/private/admin/events";
import EventInfoPage from "./pages/private/event";

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

<Route
            path="/admin/events"
            element={
              <PrivateLayout>
                <EventsPage />
              </PrivateLayout>
            }
          />

          <Route
            path="/admin/events/create"
            element={
              <PrivateLayout>
                <CreateEvenetPage />
              </PrivateLayout>
            }
          />
          <Route
            path="/event/:id"
            element={
              <PrivateLayout>
                <EventInfoPage />
              </PrivateLayout>
            }
          />
          <Route
            path="/admin/events/edit/:id"
            element={
              <PrivateLayout>
                <EditEventPage />
              </PrivateLayout>
            }
          />

      </Routes>
    </BrowserRouter>
  </ThemeProvider>
  )
}

export default App
