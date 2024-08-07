import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import MudancasResidenciais from '../pages/MudancasResidenciais';
import MudancasComerciais from '../pages/MudancasComerciais';
import Icamento from '../pages/Icamento';
import Embalagens from '../pages/Embalagens';
import GuardaMoveis from '../pages/GuardaMoveis';
import PostPage from '../pages/PostPage';
import Blog from '../pages/Blog';
import NovoPost from '../pages/NovoPost';
import Categoria from '../pages/Categoria';
import Posts from '../pages/Posts';
import EditarPost from '../pages/EditarPost';
import SignIn from '../pages/SignIn';
import Calculadora from '../pages/Calculadora';
import SignUp from '../pages/SignUp';
import Private from './Private';

function RoutesApp() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mudancas-residenciais" element={<MudancasResidenciais />} />
            <Route path="/mudancas-comerciais" element={<MudancasComerciais />} />
            <Route path="/icamento" element={<Icamento />} />
            <Route path="/embalagens" element={<Embalagens />} />
            <Route path="/guarda-moveis" element={<GuardaMoveis />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/calculadora-testes" element={<Calculadora />} />
            <Route path="/acesso-blog-sai" element={<SignIn />} />
            <Route path="/cadastro" element={<SignUp />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/categoria/:category" element={<Categoria />} />

            <Route path="/posts" element={ <Private> <Posts /> </Private>} />
            <Route path="/novo-post" element={<Private> <NovoPost /> </Private>} />
            <Route path="/editar-post/:id" element={<Private> <EditarPost /> </Private>} />

        </Routes>
    )
}

export default RoutesApp;