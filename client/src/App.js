import { Route, Routes } from 'react-router-dom';
import Bar from './components/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Form from './pages/Form';
import Theme from './theme';
import Footer from './components/Footer';
import Payment from './pages/Payment';
import Landing from './pages/Landing';

function App() {
  return (
    <div className="App">
      <Theme>
        <CssBaseline />
        <Bar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="form" element={<Form />} />
          <Route path="payment" element={<Payment />} />
          <Route path="*" element={<Landing />} />
        </Routes>
        <Footer />
      </Theme>
    </div>
  );
}

export default App;
