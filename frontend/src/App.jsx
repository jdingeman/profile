import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import UserList from './components/UserList.jsx';
import LoginPage from './pages/LoginPage.jsx';
import { ProtectedRoute } from './components/ProtectedRoute.jsx';
import { Secret } from './pages/Secret.jsx';
import { AuthProvider } from './hooks/useAuth.jsx';

function App() {

  return (
    
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
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
