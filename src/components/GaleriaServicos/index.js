import React, { useEffect, useState } from 'react';
import './galeriaServicos.css';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import videoPoster from '../../assets/video-poster2.png'; 
import videoSrc from '../../assets/SAITRANSPORTESHOME.mp4';

const GaleriaServicos = ({ imagens, title }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="galeria-container">
      <h1>{title}</h1>
      <div className="video-container" >
        <video width="600" controls poster={videoPoster}>
          <source src={videoSrc} type="video/mp4" />
          Seu navegador não suporta a tag de vídeo.
        </video>
      </div>
      {isMobile ? (
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="swiper-container"
        >
          {imagens.map((imagem, index) => (
            <SwiperSlide key={index}>
              <div className="galeria-foto-item">
                <img src={imagem} alt={`Foto ${index + 1}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="galeria-content">
          {imagens.map((imagem, index) => (
            <div key={index} className="galeria-foto-item">
              <img src={imagem} alt={`Foto ${index + 1}`} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

GaleriaServicos.propTypes = {
  imagens: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GaleriaServicos;