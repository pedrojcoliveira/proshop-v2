import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AuthProvider } from '../contexts/AuthProvider';
import { CartProvider } from '../contexts/CartProvider';
import HomePage from '../pages/HomePage';
import ProfilePage from '../pages/ProfilePage';
import CartPage from '../pages/CartPage';
import Loader from '../components/Loader';

const LoginScreen = lazy(() => import('mfeAuth/LoginScreen'));

export function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Header />
          
          <main style={{ flex: 1 }}>
            <Container>
              <Suspense fallback={<Loader />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/login" element={<LoginScreen />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/cart" element={<CartPage />} />
                </Routes>
              </Suspense>
            </Container>
          </main>

          <Footer />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
