import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebaseConnection';
import PostDetails from '../../components/PostDetails';
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import CreatePost from '../../components/CreatePost';

const NovoPost = () => {

  return (
    <div>
      <Header />
      <h1 className='title-blog'>Blog</h1>
      <CreatePost />
      <Footer />
    </div>
  );
};

export default NovoPost;