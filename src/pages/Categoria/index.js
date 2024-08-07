import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../services/firebaseConnection';
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import { FaArrowCircleLeft } from "react-icons/fa";
import './categoria.css'

const categories = ['Mudanças Residenciais', 'Mudanças Comerciais', 'Içamento', 'Embalagens', 'Guarda Móveis'];

const Categoria = () => {
  const { category } = useParams();
  const [postsByCategory, setPostsByCategory] = useState([]);

  useEffect(() => {
    const fetchPostsByCategory = async () => {
      const postsPromises = categories.map(async cat => {
        if (cat === category) {
          const q = query(collection(db, 'posts'), where('category', '==', category));
          const querySnapshot = await getDocs(q);
          return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
        }
        return [];
      });

      const postsByCategoryData = await Promise.all(postsPromises);
      setPostsByCategory(postsByCategoryData.find(posts => posts.length > 0) || []);
    };

    fetchPostsByCategory();
  }, [category]);

  const formatDate = (date) => {
    return date.toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <>
      <Header />
      <div className='title-blog-categoria'>
        <h1>Blog</h1>
      </div>
      <div className='categoria'>
        <div className='post-list-categoria'>
          <div className='intro-list-categoria'>
            <h2>{category}</h2>
          </div>
          {postsByCategory.map(post => (
            <div className='post-item' key={post.id}>
              <div className='post-img'>
                <Link to={`/post/${post.id}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  {post.imageUrl && <img src={post.imageUrl} alt={post.title} />}
                </Link>
              </div>
              <div className='post-content' style={{ flex: 1, paddingRight: '20px' }}>
                <Link to={`/categoria/${post.category}`} className='post-categoria' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  <p className='post-categoria'>{post.category}</p>
                </Link>
                <Link to={`/post/${post.id}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  <h3 className='post-title'>{post.title}</h3>
                </Link>
                <p className='post-intro'>{post.summary}</p>
                <p className='post-data'>{formatDate(post.createdAt.toDate())}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default Categoria;