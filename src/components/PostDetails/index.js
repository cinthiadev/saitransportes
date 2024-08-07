import React, { useState, useEffect } from 'react';
import './postDetails.css';
import { useParams, Link } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../services/firebaseConnection';

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const postRef = collection(db, 'posts');
      const q = query(postRef, where('__name__', '==', id));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const postData = querySnapshot.docs[0].data();
        setPost({ id: querySnapshot.docs[0].id, ...postData });
      }
    };

    fetchPost();
  }, [id]);

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date.seconds * 1000).toLocaleDateString('pt-BR', options);
  };

  if (!post) {
    return <p>Carregando...</p>;
  }

  return (
    <div className='post-details'>
      <div className='content-post-page'>
        <Link to={`/categoria/${post.category}`} className='post-categoria'>
          <p className='post-categoria'>{post.category}</p>
        </Link>
        <h1>{post.title}</h1>
        <p className='post-page-data'>{formatDate(post.date)}</p>
        {post.imageUrl && <img className='post-page-img' src={post.imageUrl} alt={post.title} />}
        
        <div className='rich-text-content' dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  );
};

export default PostDetails;