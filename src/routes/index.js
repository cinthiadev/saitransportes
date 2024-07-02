import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import MudancasResidenciais from '../pages/MudancasResidenciais';
import MudancasComerciais from '../pages/MudancasComerciais';
import Icamento from '../pages/Icamento';
import Embalagens from '../pages/Embalagens';
import GuardaMoveis from '../pages/GuardaMoveis';

function RoutesApp() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mudancas-residenciais" element={<MudancasResidenciais />} />
            <Route path="/mudancas-comerciais" element={<MudancasComerciais />} />
            <Route path="/icamento" element={<Icamento />} />
            <Route path="/embalagens" element={<Embalagens />} />
            <Route path="/guarda-moveis" element={<GuardaMoveis />} />
        </Routes>
    )
}

export default RoutesApp;