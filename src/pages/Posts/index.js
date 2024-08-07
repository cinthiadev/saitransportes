import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebaseConnection';
import PostDetails from '../../components/PostDetails';
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import PostListEdit from '../../components/PostListEdit';

const NovoPost = () => {

  return (
    <div>
      <Header />
      <h1 className='title-blog'>Posts</h1>
      <PostListEdit />
      <Footer />
    </div>
  );
};

export default NovoPost;