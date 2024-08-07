import './signIn.css';
import logo from '../../assets/logo-footer-sai.png';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';

export default function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signIn } = useContext(AuthContext);

    async function handleSignIn(event) {
        event.preventDefault();
        if (email !== '' && password !== '') {
            await signIn(email, password);
        }
    }

    return (
        <div className='container-panel banner-contact' >
            <div className="content-area-login">
                <div className="header-login">
                    <img className="logo" src={logo} />
                    <h1>Painel do Administrador</h1>
                </div>
                <form className="form-login" onSubmit={handleSignIn}>
                    <div className="form-group">
                        <label>Usuario:</label>
                        <input
                            type="name"
                            placeholder="email@exemplo.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label> Senha: </label>
                        <input
                            type='password'
                            placeholder="********"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="submit-button">
                        Entrar
                    </button>
                    <div className='btn-acess'>
                        <button type='submit' className='access-registration'>
                            <Link to="/cadastro">Novo cadastro</Link>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}