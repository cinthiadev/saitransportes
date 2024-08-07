import React, { useEffect, useState } from 'react';
import { collection, query, orderBy, onSnapshot, where } from 'firebase/firestore';
import { db } from '../../services/firebaseConnection';
import { Link } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import './postList.css';

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 3;

    useEffect(() => {
        const q = query(collection(db, 'posts'), orderBy('date', 'desc'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const postsData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setPosts(postsData);
        });
        return () => unsubscribe();
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(posts.length / postsPerPage);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const formatDate = (timestamp) => {
        const date = timestamp.toDate(); // Convert Firestore Timestamp to Date
        return date.toLocaleDateString('pt-BR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };

    return (
        <>
            <div className='post-list'>
                <div className='title-blog'>
                    <h1>Blog</h1>
                </div>
                <div className='intro-list'>
                    <h2>Recentes</h2>
                </div>
                {currentPosts.map((post) => (
                    <div className='post-item' key={post.id}>
                        <div className='post-img'>
                            <Link to={`/post/${post.id}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                {post.imageUrl && <img src={post.imageUrl} alt={post.title} />}
                            </Link>
                        </div>
                        <div className='post-content' style={{ flex: 1, paddingRight: '20px' }}>
                            <Link to={`/categoria/${post.category}`} className='post-categoria'>
                                <p className='post-categoria'> {post.category} </p>
                            </Link>
                            <Link to={`/post/${post.id}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                <h3 className='post-title'>{post.title}</h3>
                            </Link>
                            <p className='post-intro'>{post.summary}</p>
                            <p className='post-data'>{formatDate(post.date)}</p>
                        </div>
                    </div>
                ))}
                <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <IoIosArrowBack onClick={goToPreviousPage} size={20} style={{ cursor: 'pointer' }} />
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        {[...Array(totalPages)].map((_, index) => (
                            <span
                                key={index}
                                style={{
                                    margin: '0 10px',
                                    cursor: 'pointer',
                                    fontWeight: currentPage === index + 1 ? 'bold' : 'normal'
                                }}
                                onClick={() => paginate(index + 1)}
                            >
                                {index + 1}
                            </span>
                        ))}
                    </div>
                    <IoIosArrowForward onClick={goToNextPage} size={20} style={{ cursor: 'pointer' }} />
                </div>
            </div>
        </>
    );
};

export default PostList;