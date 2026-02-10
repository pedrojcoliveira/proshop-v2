import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import LoginScreen from '../screens/LoginScreen';

export function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/" element={<LoginScreen />} />
      </Routes>
    </>
  );
}

export default App;
