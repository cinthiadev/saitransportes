import { useEffect, useState } from 'react';
import './blog.css';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import GaleriaServicos from '../../components/GaleriaServicos';
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
import { FaWhatsapp } from "react-icons/fa";
import PostList from '../../components/PostList';

const Blog = () => {

  const imagensGaleria = [foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8];

  return (
    <div className="container">
      <Header />
      <PostList />
      <Contact />
      <Footer />
    </div>
  );
};

export default Blog;