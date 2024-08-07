import { useEffect, useState } from 'react';
import './home.css';
import Header from '../../components/Header';
import Banner from '../../components/BannerHome';
import GaleriaServicos from '../../components/GaleriaServicosHome';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import bannerBackground from '../../assets/banner-home-sai.jpeg';
import icon1 from '../../assets/icon-service1.png';
import icon2 from '../../assets/icon-service2.png';
import icon3 from '../../assets/icon-service3.png';
import icon4 from '../../assets/icon-service4.png';
import icon5 from '../../assets/icon-service5.png';
import iconDiferenciais1 from '../../assets/icone-box.svg';
import iconDiferenciais2 from '../../assets/icone-delivery.svg';
import iconDiferenciais3 from '../../assets/icone -building.svg';
import depo1 from '../../assets/depo1.png';
import depo2 from '../../assets/depo2.png';
import depo3 from '../../assets/depo3.png';
import foto1 from '../../assets/image1.jpg';
import foto2 from '../../assets/image2.jpeg';
import foto3 from '../../assets/image3.jpeg';
import foto4 from '../../assets/image4.jpeg';
import foto5 from '../../assets/image5.jpeg';
import foto6 from '../../assets/image6.jpeg';
import foto7 from '../../assets/image1.jpg';
import foto8 from '../../assets/image2.jpeg';
import videoSrc from '../../assets/video-home.mp4';
import videoPoster from '../../assets/video-poster.png'; 
import { FaWhatsapp } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Home = () => {

  const imagensGaleria = [foto1, foto2, foto3, foto4, foto5, foto6];
  const location = useLocation();

  return (
    <div className="container">
      <Header />
      <Banner
        title={
          <>
            Mudança rápida <br /> e fácil é com a gente!
          </>
        }
        backgroundImage={bannerBackground}
        buttonLabel="Solicitar um orçamento"
        buttonLink="/"
      />

      <section className='sobre-nos'>
        <div className='info-sobre-nos'>
          <div className="video-container">
            <video width="600" controls poster={videoPoster}>
              <source src={videoSrc}  type="video/mp4" />
              Seu navegador não suporta a tag de vídeo.
            </video>
          </div>
          <p><strong>Sai Transportes e Mudanças</strong> teve seu começo em 2005, a princípio oferecendo serviços de transportes rápidos com motocicletas. <br />
            A partir daí, nos adequamos para oferecer soluções de transporte que atendessem cada vez mais a necessidade dos nossos clientes. Começamos a oferecer serviços excepcionais de mudanças residenciais e comerciais, içamentos, e agora, guarda móveis. Nosso compromisso nunca mudou, proporcionar serviços para facilitar sua vida com qualidade, segurança, e garantir uma experiência única. <br />
            Diante de um mercado acirrado e competitivo, é fundamental oferecer e proporcionar serviços de alta qualidade, se adequando a necessidade de cada cliente.</p>
          <h2>Nosso Compromisso</h2>
          <p>Atender as expectativas de todos nossos clientes, a fim de garantir uma alta qualidade em nossos serviços, valorizando todo quadro de funcionários e tomadores de serviços.</p>
          <h2>Nossa Visão</h2>
          <p>Continuar inovando e se aperfeiçoando para garantir uma prestação de serviços de transportes em toda e qualquer região de interesse de nossos clientes de forma segura e com preço justo.</p>
        </div>
      </section>

      <section className='servicos'>
        <div className='content-serviços'>
          <h5>Por que nos escolher?</h5>
          <h1>Nossos clientes nos escolhem por que oferecemos os melhores serviços</h1>
          <div className='lista-servicos'>
            <div className='card-descricao-servico'>
              <img className='icon1' src={icon1} alt='icone serviços' />
              <div className='info-servicos'>
                <h2>Mudanças Residenciais</h2>
                <p>Transporte seguro de móveis e pertences pessoais.</p>
              </div>
            </div>
            <div className='card-descricao-servico'>
              <img className='icon2' src={icon2} alt='icone serviços' />
              <div className='info-servicos'>
                <h2>Mudanças Comerciais</h2>
                <p>Transferência eficiente de escritórios e estabelecimentos.</p>
              </div>
            </div>
            <div className='card-descricao-servico'>
              <img className='icon3' src={icon3} alt='icone serviços' />
              <div className='info-servicos'>
                <h2>Içamento</h2>
                <p>Elevação de itens pesados ou grandes.</p>
              </div>
            </div>
            <div className='card-descricao-servico'>
              <img className='icon4' src={icon4} alt='icone serviços' />
              <div className='info-servicos'>
                <h2>Embalagens</h2>
                <p>Proteção especializada para transporte seguro.</p>
              </div>
            </div>
            <div className='card-descricao-servico'>
              <img className='icon5' src={icon5} alt='icone serviços' />
              <div className='info-servicos'>
                <h2>Guarda-Móveis</h2>
                <p>Armazenamento seguro de móveis e pertences.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='cta-contrate'>
        <div className='content-cta'>
          <div className='infos-cta'>
            <h2>Pronto para contratar nossos serviços?</h2>
            <p>Temos uma equipe qualificada e frota própria para realizar sua mudança com segurança e agilidade.</p>
          </div>
          <div className='botoes-acao'>
            <ScrollLink
              to="contato"
              spy={true}
              smooth={true}
              offset={-120}
              duration={1200}
              className={`contato-header nav-link ${location.pathname === '/' ? 'active' : ''}`}
              activeClass="active-scroll"
            >
              <button className='botao-orcamento'>Solicitar um orçamento</button>
            </ScrollLink>
            <button className='botao-whats'><a href='https://wa.me/5511947312874' target='_blank'> <FaWhatsapp className='icon-whats' /> (11) 94731-2874 </a></button>
          </div>
        </div>
      </section>

      <section className='diferenciais'>
        <div className='content-diferenciais'>
          <h5>SOBRE OS NOSSOS SERVIÇOS</h5>
          <h1>Diferenciais que proporcionamos</h1>
          <div className='cards-diferenciais'>
            <div className='card-descricao-diferenciais'>
              <div className='icon-diferenciais'>
                <img src={iconDiferenciais1} alt='icone serviços' />
              </div>
              <h3>Deixa com a gente!</h3>
              <p>Embalagens para transportar seus pertences com segurança</p>
            </div>
            <div className='card-descricao-diferenciais'>
              <div className='icon-diferenciais'>
                <img src={iconDiferenciais2} alt='icone serviços' />
              </div>
              <h3>No seu tempo</h3>
              <p>Horários alternativos para planejar conforme sua agenda</p>
            </div>
            <div className='card-descricao-diferenciais'>
              <div className='icon-diferenciais'>
                <img src={iconDiferenciais3} alt='icone serviços' />
              </div>
              <h3>Cuidado é essencial</h3>
              <p>Responsabilidade certificada para transportes e içamentos</p>
            </div>
          </div>
        </div>
      </section>

      <GaleriaServicos title="Conheça o nosso trabalho" imagens={imagensGaleria} />

      <section className='depoimentos'>
        <h1>O que nossos clientes estão dizendo</h1>
        <div className='cards-depoimentos'>
          <div className='card-descricao-depoimentos'>
            <div className='perfil'>
              <img src={depo1} alt='image perfil' />
              <h3>Priscilla Darin</h3>
            </div>
            <p>"Sai Transportes é simplesmente maravilhoso! Profissionais altamente competentes e serviços de alta qualidade. Não tenho palavras para agradecer pelo excelente trabalho realizado durante a nossa mudança."</p>
          </div>
          <div className='card-descricao-depoimentos'>
            <div className='perfil'>
              <img src={depo2} alt='image perfil' />
              <h3>Lucas Silva</h3>
            </div>
            <p>"Recomendo a todos! Serviço excelente, pontualidade e preço justo. Fizeram um ótimo trabalho na nossa mudança residencial. O içamento foi realizado de forma segura e eficiente. Obrigado, Sai Transportes!"</p>
          </div>
          <div className='card-descricao-depoimentos'>
            <div className='perfil'>
              <img src={depo3} alt='image perfil' />
              <h3>Ana Paula Oliveira</h3>
            </div>
            <p>"Excelente serviço de guarda-móveis. Meu mobiliário ficou bem armazenado e protegido durante todo o período. Atendimento de qualidade e profissionais muito atenciosos. Com certeza, voltarei a utilizar os serviços da Sai Transportes."</p>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default Home;