import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db, storage } from '../../services/firebaseConnection';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { FiUpload } from 'react-icons/fi';
import { MdEditNote } from 'react-icons/md';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './editPost.css';
import { IoAlertCircle } from "react-icons/io5";

const categories = [
  'Mudanças Residenciais',
  'Mudanças Comerciais',
  'Içamento',
  'Embalagens',
  'Guarda Móveis',
];

const ErrorPopup = ({ message, onClose, handleClose }) => {
  return (
    <div>
      <div className="modal-overlay" onClick={handleClose}></div>

      <div className='modal'>
        <section className='modal-main'>
          <IoAlertCircle size={50} color='var(--cor-principal)' />
          <h4 style={{ marginTop: '10px', marginBottom: '10px' }} >O tamanho dessa imagem compromete o tempo de carregamento da página.  </h4>
          <p style={{ marginTop: '10px', lineHeight: '1.5em' }}>Selecione uma nova imagem considerando as dimensões abaixo:</p>
          <p style={{ marginTop: '10px' }} p>Tamanho máximo: 500KB por imagem</p>
          <p>Dimensões máximas: 1920x1080 pixels por imagem</p>
          <div className='modal-buttons' style={{ marginTop: '20px' }}>
            <button className='btn-cancel-modal' onClick={onClose}>Fechar</button>
          </div>
        </section>
      </div>

    </div>
  );
};

const EditPost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [date, setDate] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [initialImageUrl, setInitialImageUrl] = useState(''); // State to store initial image URL
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false); // Estado para controlar o popup de erro
  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  useEffect(() => {
    const fetchPost = async () => {
      const docRef = doc(db, 'posts', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const postData = docSnap.data();
        setTitle(postData.title);
        setCategory(postData.category);
        setSummary(postData.summary);
        setContent(postData.content || ''); // Ensure content is not undefined
        setImageUrl(postData.imageUrl);
        setInitialImageUrl(postData.imageUrl); // Store initial image URL
        setDate(postData.date.toDate().toISOString().split('T')[0]);
      } else {
        console.log('No such document!');
      }
    };
    fetchPost();
  }, [id]);

  useEffect(() => {
    setIsFormValid(
      title.trim() !== '' &&
      category.trim() !== '' &&
      summary.trim() !== '' &&
      content.trim() !== '' &&
      date.trim() !== ''
    );
  }, [title, category, summary, content, date]);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleContentChange = (value) => {
    setContent(value); // Update content state directly with the value from ReactQuill
  };

  const handleSave = async (e) => {
    e.preventDefault();

    let newImageUrl = imageUrl;

    if (image) {
      const imageRef = ref(storage, `images/${image.name}`);
      await uploadBytes(imageRef, image);
      newImageUrl = await getDownloadURL(imageRef);
    }

    if (content.length > 1048487) {
      handleShowPopup();
      return;
    }

    const postDate = new Date(`${date}T00:00:00`);

    try {
      const postRef = doc(db, 'posts', id);
      await updateDoc(postRef, {
        title,
        category,
        summary,
        content,
        imageUrl: newImageUrl,
        date: postDate,
        updatedAt: new Date(),
      });
      toast.success('Post editado com sucesso!');
      navigate('/posts');

      // Scroll to the top of the page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Error saving post data:', error);
      toast.error('Ocorreu um erro ao salvar os dados.');
    }
  };

  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['link', 'image'],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
  ];

  return (
    <div className="criar-post">
      <div className="container-criar-post">
        <div className="intro-criar-post">
          <MdEditNote className="icon-add-post icon-edit" />
          <h2>Editar Postagem</h2>
        </div>
        <form className="form-criar-post">
          <div className="group-infos">
            <div className="select-post">
              <label>Selecione a categoria</label>
              <select value={category} onChange={(e) => setCategory(e.target.value)} required>
                <option value="" disabled>
                  Selecione uma categoria
                </option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <div className="data-post">
              <label>Data do post</label>
              <input
                type="date"
                value={date}
                max={new Date().toISOString().split('T')[0]}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
          </div>

          <label>Título do post</label>
          <input
            type="text"
            placeholder="Digite o título do post"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label>Breve descrição</label>
          <input
            type="text"
            value={summary}
            placeholder="Resumo do post"
            onChange={(e) => setSummary(e.target.value)}
            maxLength={150}
            required
          />
          <label>Alterar a imagem principal do post</label>

          <div className="add-image-post">
            <label htmlFor="imagem-editar-post" className="upload-label">
              <FiUpload size={22} className="icon-upload" /> Inserir imagem
              <input
                id="imagem-editar-post"
                type="file"
                onChange={handleImageChange}
                className="imagem-criar-post"
              />
            </label>
            {imageUrl && !image && (
              <div className="image-preview">
                <img src={imageUrl} alt="Preview" />
              </div>
            )}
            {!imageUrl && initialImageUrl && (
              <div className="image-preview">
                <img src={initialImageUrl} alt="Initial Preview" />
              </div>
            )}
          </div>

          <div className="conteudo-principal">
            <ReactQuill
              value={content}
              onChange={handleContentChange}
              modules={modules}
              formats={formats}
            />
          </div>
          <div className="group-buttons">
            <button
              type="button"
              className="botao-orcamento cancel"
              onClick={() => {
                navigate('/posts');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Cancelar
            </button>
            <button className="botao-orcamento save" onClick={handleSave} disabled={!isFormValid}>
              Publicar Edição
            </button>
          </div>
        </form>
      </div>
      {showPopup && (
        <ErrorPopup
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default EditPost;