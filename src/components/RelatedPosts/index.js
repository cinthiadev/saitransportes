import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../services/firebaseConnection';
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import { FaArrowCircleLeft } from "react-icons/fa";
import './relatedPosts.css';

const RelatedPosts = ({ relatedPosts }) => {
  const { category } = useParams();
  const [postsByCategory, setPostsByCategory] = useState([]);

  useEffect(() => {
    const fetchPostsByCategory = async () => {
      try {
        const q = query(collection(db, 'posts'), where('category', '==', category));
        const querySnapshot = await getDocs(q);
        const postsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setPostsByCategory(postsData);
      } catch (error) {
        console.error('Error fetching posts by category:', error);
      }
    };

    if (category) {
      console.log('Fetching posts for category:', category);
      fetchPostsByCategory();
    }
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
      <div className='title-main-relatedPosts'>
        <h2>Continue Lendo</h2>
      </div>
      <div className='group-relatedPosts'>
        <div className='post-list-relatedPosts'>
          {relatedPosts.map((post) => (
            <div className='post-item-relatedPosts' key={post.id}>
              <div className='post-img-relatedPosts'>
                {post.imageUrl && <img src={post.imageUrl} alt={post.title} />}
              </div>
              <div className='post-content-relatedPosts' style={{ flex: 1, paddingRight: '20px' }}>
                <Link to={`/categoria/${post.category}`} className='post-categoria' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  <p className='post-categoria-relatedPosts'>{post.category}</p>
                </Link>
                <Link to={`/post/${post.id}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  <h3 className='post-title-relatedPosts'>{post.title}</h3>
                </Link>
                <p className='post-intro-relatedPosts'>{post.summary}</p>
                <p className='post-data-relatedPosts'>{formatDate(post.createdAt.toDate())}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RelatedPosts;