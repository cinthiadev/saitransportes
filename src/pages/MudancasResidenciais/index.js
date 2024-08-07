import { useEffect, useState } from 'react';
import './mudancasResidenciais.css';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import CardsInfo from '../../components/CardsInfo';
import GaleriaServicos from '../../components/GaleriaServicos';
import Duvidas from '../../components/Duvidas';
import TabsOriginal from '../../components/TabsOriginal';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import bannerBackground from '../../assets/1-Residencial-header.jpg';
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
import foto1 from '../../assets/01-Residencial_1.jpeg';
import foto2 from '../../assets/01-Residencial_2.jpg';
import foto3 from '../../assets/01-Residencial_3.jpg';
import foto4 from '../../assets/01-Residencial_4.jpeg';
import foto5 from '../../assets/01-Residencial_5.jpg';
import foto6 from '../../assets/01-Residencial_6.jpeg';
import foto7 from '../../assets/image1.jpg';
import foto8 from '../../assets/image2.jpeg';
import iconcard1 from '../../assets/icon-equipe-cards-info.svg';
import iconcard2 from '../../assets/icon-box-cards-info.svg';
import iconcard3 from '../../assets/icon-people-cards-info.svg';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const MudancasResidenciais = () => {
  const location = useLocation();

  const imagensGaleria = [foto1, foto2, foto3, foto4, foto5, foto6];
  const cardsData = [
    { icon: iconcard1, title: 'Equipe uniformizada', description: 'Profissionais capacitados e uniformizados, para serem identificados na sua residência' },
    { icon: iconcard2, title: 'Embalagem adequada', description: 'Materiais adequados para embalar seus móveis e utensílios' },
    { icon: iconcard3, title: 'Cuidado extremo', description: 'Efetuamos o manuseio de móveis e objeteos de forma cuidadosa' },
  ];
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
        title="Mudanças Residenciais"
        backgroundImage={bannerBackground}
        buttonLink="/"
      />
      <section className='textos-info-servicos'>
        <div className='content-textos'>
          <h1>Transição sem estresse ao novo lar!</h1>
        </div>
      </section>

      <CardsInfo cardsData={cardsData} />

      <div className='content-botao-orcamento' style={{ textAlign: 'center' , marginBottom: '40px' }}>
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

      <GaleriaServicos title="Confira nossas mudanças" imagens={imagensGaleria} />

      <section className='textos-info-servicos'>
        <div className='content-textos'>
          <h3>A Sai transportes possui frota própria, com diversos tipos de caminhões, adaptados e regularizados. O fato de possuir caminhões próprios permite oferecer preços mais competitivos e garantir a qualidade no serviço de transporte.</h3>
          <div className='textos-ao-lado'>
            <div className='texto1'>
              <p>Disponibilizamos equipes especializadas em mudanças residenciais, possuímos experiência em manuseio de móveis e utensílios, oferecendo maior qualidade.  Cuidar de todos os detalhes de uma mudança não é uma tarefa fácil e sabemos que dispor de tempo e habilidade para isso nem sempre é possível  por isso conte conosco para atender e superar suas expectativas. </p>
            </div>
            <div className='texto2'>
              <p>Utilizamos materiais de alta qualidade para embalagem, com densidade suficiente para aguentar impactos e preservar os objetos transportados. Este tipo de material representa um custo importante no serviço de mudanças residenciais, por isso, quando estiver orçando esse serviço, procurar saber quais materiais as empresas oferecem para embalar seus móveis, eletrodomésticos, cristais, vidros e outros utensílios delicados.</p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default MudancasResidenciais; 