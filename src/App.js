import { BrowserRouter } from 'react-router-dom'
import RoutesApp from './routes'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './contexts/auth'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ToastContainer
          autoClose={5000}
          position="bottom-right"
          toastClassName="custom-toast-container"
        />
        <RoutesApp />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
