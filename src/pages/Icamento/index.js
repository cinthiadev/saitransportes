import { useEffect, useState } from 'react';
import './icamento.css';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import CardsInfo from '../../components/CardsInfo';
import GaleriaServicos from '../../components/GaleriaServicos';
import Duvidas from '../../components/Duvidas';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import bannerBackground from '../../assets/3-Icamento-header.jpg';
import icon1 from '../../assets/icon-service1.png';
import icon2 from '../../assets/icon-service2.png';
import icon3 from '../../assets/icon-service3.png';
import icon4 from '../../assets/icon-service4.png';
import icon5 from '../../assets/icon-service5.png';
import iconDiferenciais1 from '../../assets/iconDiferenciais1.png';
import iconDiferenciais2 from '../../assets/iconDiferenciais2.png';
import iconDiferenciais3 from '../../assets/iconDiferenciais3.png';
import depo1 from '../../assets/depo1.png';
import depo2 from '../../assets/depo2.png';
import depo3 from '../../assets/depo3.png';
import foto1 from '../../assets/03-Icamento_1.jpeg';
import foto2 from '../../assets/03-Icamento_2.jpeg';
import foto3 from '../../assets/03-Icamento_3.jpeg';
import foto4 from '../../assets/03-Icamento_4.jpeg';
import foto5 from '../../assets/03-Icamento_5.jpg';
import foto6 from '../../assets/03-Icamento_6.jpeg';
import foto7 from '../../assets/image1.jpg';
import foto8 from '../../assets/image2.jpeg';
import iconcard1 from '../../assets/icon-equipe-cards-info.svg';
import iconcard2 from '../../assets/icon-box-cards-info.svg';
import iconcard3 from '../../assets/icon-people-cards-info.svg';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';


const Icamento = () => {
  const location = useLocation();
  const imagensGaleria = [foto1, foto2, foto3, foto4, foto5, foto6];

  const faqData = [
    {
      question: 'Quanto tempo para iniciar minha mudança?',
      answer: 'Comece organizando seus pertences, descartando ou doando o que não usa mais. Utilize caixas de papelão resistentes e materiais de embalagem adequados para proteger seus itens durante o transporte. Etiquete as caixas com o conteúdo para facilitar a organização na nova casa. Limpe a casa antiga antes de se mudar e não se esqueça de atualizar seu endereço em documentos, contas bancárias e cartões de crédito.',
    },
    {
      question: 'Como posso me organizar para a mudança?',
      answer: 'Comece organizando seus pertences, descartando ou doando o que não usa mais. Utilize caixas de papelão resistentes e materiais de embalagem adequados para proteger seus itens durante o transporte. Etiquete as caixas com o conteúdo para facilitar a organização na nova casa. Limpe a casa antiga antes de se mudar e não se esqueça de atualizar seu endereço em documentos, contas bancárias e cartões de crédito.',
    },
    {
      question: 'Como fazer o agendamento?',
      answer: 'Comece organizando seus pertences, descartando ou doando o que não usa mais. Utilize caixas de papelão resistentes e materiais de embalagem adequados para proteger seus itens durante o transporte. Etiquete as caixas com o conteúdo para facilitar a organização na nova casa. Limpe a casa antiga antes de se mudar e não se esqueça de atualizar seu endereço em documentos, contas bancárias e cartões de crédito.',
    },
    {
      question: 'O que preciso embalar por conta própria?',
      answer: 'Comece organizando seus pertences, descartando ou doando o que não usa mais. Utilize caixas de papelão resistentes e materiais de embalagem adequados para proteger seus itens durante o transporte. Etiquete as caixas com o conteúdo para facilitar a organização na nova casa. Limpe a casa antiga antes de se mudar e não se esqueça de atualizar seu endereço em documentos, contas bancárias e cartões de crédito.',
    },
    {
      question: 'Posso cancelar o contrato de prestação de serviços com a empresa de mudança?',
      answer: 'Comece organizando seus pertences, descartando ou doando o que não usa mais. Utilize caixas de papelão resistentes e materiais de embalagem adequados para proteger seus itens durante o transporte. Etiquete as caixas com o conteúdo para facilitar a organização na nova casa. Limpe a casa antiga antes de se mudar e não se esqueça de atualizar seu endereço em documentos, contas bancárias e cartões de crédito.',
    },
  ];

  return (
    <div className="container">
      <Header />
      <Banner
        title="Içamento"
        backgroundImage={bannerBackground}
        buttonLabel="Solicitar um orçamento"
        buttonLink="/"
      />
      <section className='textos-info-servicos'>
        <div className='content-textos'>
          <h1>Içamento em São Paulo</h1>
          <h3>A Sai Transportes é Certificada para Trabalho em Altura e conta com profissionais especializados para realizar içamento em locais de difícil acesso, onde o objeto a ser transportado excede as medidas do elevador e das escadas.</h3>
        </div>
      </section>

      <div className='content-botao-orcamento' style={{ textAlign: 'center', marginBottom: '40px' }}>
        <ScrollLink
          to="contato"
          spy={true}
          smooth={true}
          offset={-120}
          duration={1200}
          className={`contato-header nav-link ${location.pathname === '/' ? 'active' : ''}`}
          activeClass="active-scroll"

        >
          <button className="botao-orcamento">
            Solicitar um orçamento
          </button>
        </ScrollLink>
      </div>

      <GaleriaServicos title="Confira nossos içamentos" imagens={imagensGaleria} />

      <section className='textos-info-servicos'>
        <div className='content-textos'>
          <div className='textos-ao-lado' id='textos-ao-lado'>
            <div className='texto1'>
              <h4>Içamento de móveis</h4>
              <p>O serviço de içamento de móveis necessita de atenção diferenciada, afim de evitar danos durante o transporte. Os içamentos serão efetuados após a certificação de que tudo esteja em completa segurança para o início do trabalho.</p>
            </div>
            <div className='texto2'>
              <h4>Içamento de vidros</h4>
              <p>Nossa maior demanda por Içamento de Vidros é derivada de apartamentos de luxo na Grande São Paulo. O vidro oferece segurança sem comprometer a vista e o design do imóvel. Para este tipo de serviço, temos equipamentos e técnicas especiais, devido a fragilidade do material.</p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default Icamento; 