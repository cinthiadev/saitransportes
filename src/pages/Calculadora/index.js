import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import CardsInfo from '../../components/CardsInfo';
import GaleriaServicos from '../../components/GaleriaServicos';
import Duvidas from '../../components/Duvidas';
import TabsOriginal from '../../components/TabsOriginal';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import bannerBackground from '../../assets/banner-home-sai.jpeg';
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
import foto1 from '../../assets/image1.jpg';
import foto2 from '../../assets/image2.jpeg';
import foto3 from '../../assets/image3.jpeg';
import foto4 from '../../assets/image4.jpeg';
import foto5 from '../../assets/image5.jpeg';
import foto6 from '../../assets/image6.jpeg';
import foto7 from '../../assets/image1.jpg';
import foto8 from '../../assets/image2.jpeg';
import iconcard1 from '../../assets/icon-equipe-cards-info.svg';
import iconcard2 from '../../assets/icon-box-cards-info.svg';
import iconcard3 from '../../assets/icon-people-cards-info.svg';



const MudancasResidenciais = () => {

  const imagensGaleria = [foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8];
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
      
      <div style={{ marginTop: '120px'}}>
        
      <TabsOriginal />
      </div>

      <Footer />
    </div>
  );
};

export default MudancasResidenciais; 