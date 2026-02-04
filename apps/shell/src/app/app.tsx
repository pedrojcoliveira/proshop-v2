import Footer from '../components/Footer';

export function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <main style={{ flex: 1, padding: '20px' }}>
        <h1>Welcome to Shell</h1>
        <p>Application Shell with Module Federation</p>
        <p>Footer successfully extracted from monolith!</p>
      </main>

      <Footer />
    </div>
  );
}

export default App;
