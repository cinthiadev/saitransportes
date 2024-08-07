import React, { useEffect, useState, useContext } from 'react';
import { collection, query, orderBy, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebaseConnection';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import './postListEdit.css';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/auth';
import { FaArrowLeft } from 'react-icons/fa';
import ConfirmationModal from '../ConfirmationModal'; // Importe o modal criado

const PostListEdit = () => {
    const { user, logout } = useContext(AuthContext);
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [showModal, setShowModal] = useState(false); // Estado para controlar a exibição do modal
    const [postToDelete, setPostToDelete] = useState(null); // Estado para armazenar o post a ser excluído
    const postsPerPage = 3;
    const navigate = useNavigate();

    async function handleLogout() {
        await logout();
    }

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


    const totalPages = Math.ceil(posts.length / postsPerPage);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

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
        const date = timestamp.toDate();
        return date.toLocaleDateString('pt-BR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };

    const handleDeletePost = (postId) => {
        setPostToDelete(postId); // Armazenar o ID do post a ser excluído
        setShowModal(true); // Mostrar o modal de confirmação
    };

    const confirmDeletePost = async () => {
        try {
            await deleteDoc(doc(db, 'posts', postToDelete));
            toast.success('Post excluído com sucesso!');
            setPosts(posts.filter(post => post.id !== postToDelete));
            setShowModal(false); // Fechar o modal após a exclusão
        } catch (error) {
            console.error('Erro ao excluir o post:', error);
            toast.error('Erro ao excluir o post.');
        }
    };

    const cancelDeletePost = () => {
        setShowModal(false); // Fechar o modal sem excluir o post
    };

    const handleEditPost = (postId) => {
        navigate(`/editar-post/${postId}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <div className='post-list'>
                <Link to='/novo-post' className='add-post-button'>
                    <button className='botao-orcamento'>+ Adicionar um novo post</button>
                </Link>
                {currentPosts.map((post) => (
                    <div className='post-item' key={post.id}>
                        <div className='post-img'>
                            <Link to={`/post/${post.id}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                {post.imageUrl && <img src={post.imageUrl} alt={post.title} />}
                            </Link>
                        </div>
                        <div className='post-content' style={{ flex: 1, paddingRight: '20px' }}>
                            <Link to={`/categoria/${post.category}`} className='post-categoria'>
                                <p className='post-categoria'>{post.category}</p>
                            </Link>
                            <Link to={`/post/${post.id}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                <h3 className='post-title'>{post.title}</h3>
                            </Link>
                            <p className='post-intro'>{post.summary}</p>
                            <p className='post-data'>{formatDate(post.date)}</p>
                            <div className='group-buttons-edit' style={{ marginTop: '10px' }}>
                                <button className='botao-orcamento edit' onClick={() => handleEditPost(post.id)}>Editar</button>
                                <button className='botao-orcamento delete' onClick={() => handleDeletePost(post.id)}>Excluir</button>
                            </div>
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
                <div className='add-post-button button-sair'>
                    <button onClick={handleLogout} className='botao-orcamento sair'><FaArrowLeft className='icon-sair' />Sair</button>
                </div>
            </div>

            {/* Renderizar o modal de confirmação */}
            <ConfirmationModal
                show={showModal}
                handleClose={() => setShowModal(false)}
                handleConfirm={confirmDeletePost}
            />
        </>
    );
};

export default PostListEdit;