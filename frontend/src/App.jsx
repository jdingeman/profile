import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import UserList from './components/UserList.jsx';
import LoginPage from './pages/LoginPage.jsx';
import { ProtectedRoute } from './components/ProtectedRoute.jsx';
import { Secret } from './pages/Secret.jsx';
import { AuthProvider } from './hooks/useAuth.jsx';
import TemplatePage from './pages/TemplatePage.jsx';
import UserCreationPage from './pages/UserCreationPage.jsx';
import useToken from './hooks/useToken.js';
import NewAccountPage from './pages/NewAccountPage.jsx';
import Dashboard from './pages/Dashboard.jsx';

function App() {

  const { token, setToken } = useToken();

  if (!token) {
    return <LoginPage setToken={setToken} />
  }

  return (
    
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/templates" element={<TemplatePage />} />
          <Route path="/create-user" element={<UserCreationPage />} />
          <Route path="/new-account" element={<NewAccountPage />} />
          <Route path="/secret" element={
            <ProtectedRoute>
              <Secret/>
            </ProtectedRoute>
          } />
          <Route path="/users" element={<UserList />} />
        </Routes>
        </AuthProvider>
    </BrowserRouter>
  )
}

export default App
