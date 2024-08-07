import React, { useEffect, useState } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../../services/firebaseConnection';
import { Link } from 'react-router-dom';

const PostListRelated = () => {
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

    const formatDate = (date) => {
        return date.toDate().toLocaleDateString('pt-BR', {
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

                    {currentPosts.map((post) => (
                        <div className='post-item-relatedPosts' key={post.id}>
                            <div className='post-img-relatedPosts'>
                                {post.imageUrl && <img src={post.imageUrl} alt={post.title} />}
                            </div>
                            <div className='post-content-relatedPosts' style={{ flex: 1, paddingRight: '20px' }}>
                                <Link to={`/categoria/${post.category}`} className='post-categoria' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                    <p className='post-categoria-relatedPosts'> {post.category} </p>
                                </Link>
                                <Link to={`/post/${post.id}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                    <h3 className='post-title-relatedPosts'>{post.title}</h3>
                                </Link>
                                <p className='post-intro-relatedPosts'>{post.summary}</p>
                                <p className='post-data-relatedPosts'>{formatDate(post.date)}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    );
};

export default PostListRelated;