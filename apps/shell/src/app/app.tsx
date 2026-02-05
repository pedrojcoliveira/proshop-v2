import Footer from '../components/Footer';
import { AuthProvider } from '../contexts/AuthProvider';

export function App() {
  return (
    <AuthProvider>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <main style={{ flex: 1, padding: '20px' }}>
          <h1>Welcome to Shell</h1>
          <p>Application Shell with Module Federation</p>
          <p>AuthContext successfully integrated!</p>
        </main>

        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
