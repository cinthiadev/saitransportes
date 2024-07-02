import { BrowserRouter } from 'react-router-dom'
import RoutesApp from './routes'

function App() {
  return (
    <BrowserRouter basename="/saitransportes">
      <RoutesApp />
    </BrowserRouter>
  );
}

export default App;
