import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../services/firebaseConnection';
import PostDetails from '../../components/PostDetails';
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import RelatedPosts from '../../components/RelatedPosts';
import PostListRelated from '../../components/PostListRelated';
import Categoria from '../Categoria';

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const postRef = doc(db, 'posts', id);
      const postSnap = await getDoc(postRef);
      if (postSnap.exists()) {
        setPost(postSnap.data());
        const category = postSnap.data().category;
        fetchRelatedPosts(category);
      } else {
        console.log('No such document!');
      }
    };
    fetchPost();
  }, [id]);

  const fetchRelatedPosts = async (category) => {
    const q = query(collection(db, 'posts'), where('category', '==', category));
    const querySnapshot = await getDocs(q);
    const relatedPostsData = [];
    querySnapshot.forEach((doc) => {
      relatedPostsData.push(doc.data());
    });
    setRelatedPosts(relatedPostsData);
  };

  return (
    <div>
      <Header />
      <h1 className='title-blog'>Blog</h1>
      {post ? <PostDetails post={post} /> : <p>Loading...</p>}
      <PostListRelated />
      <Footer />
    </div>
  );
};

export default PostPage;