import Header from '../components/Header';
import Footer from '../components/Footer';
import { AuthProvider } from '../contexts/AuthProvider';
import { CartProvider } from '../contexts/CartProvider';

export function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Header />
          
          <main style={{ flex: 1, padding: '20px' }}>
            <h1>Welcome to Shell</h1>
            <p>Application Shell with Module Federation</p>
            <p> AuthContext integrated</p>
            <p> CartContext integrated</p>
            <p> Header with Auth & Cart integrated</p>
          </main>

          <Footer />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
