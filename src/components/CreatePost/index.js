import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../services/firebaseConnection';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './createPost.css';
import { FiUpload } from 'react-icons/fi';
import { HiOutlineSquaresPlus } from 'react-icons/hi2';
import { toast } from 'react-toastify';
import imageCompression from 'browser-image-compression';
import { v4 as uuidv4 } from 'uuid'; // Importação do uuidv4
import { IoAlertCircle } from "react-icons/io5";

const categories = [
  'Mudanças Residenciais',
  'Mudanças Comerciais',
  'Içamento',
  'Embalagens',
  'Guarda Móveis'
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

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [paragraphs, setParagraphs] = useState([{ text: '', subtitle: '' }]);
  const [image, setImage] = useState(null);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState(
    new Date().toLocaleTimeString('en-GB').slice(0, 5)
  );
  const navigate = useNavigate();
  const [isFormValid, setIsFormValid] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // Estado para controlar o popup de erro

  useEffect(() => {
    setIsFormValid(
      title.trim() !== '' &&
      category.trim() !== '' &&
      summary.trim() !== '' &&
      content.trim() !== '' &&
      image !== null &&
      date.trim() !== '' &&
      time.trim() !== ''
    );
  }, [title, category, summary, content, image, date, time]);

  const handleImageChange = async (e) => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      setShowErrorMessage(false);

      try {
        const options = {
          maxSizeMB: 1,
          maxWidthOrHeight: 800,
          useWebWorker: true
        };
        const compressedFile = await imageCompression(file, options);

        setImage(compressedFile); // Define a imagem comprimida para o estado
      } catch (error) {
        console.error('Erro ao comprimir a imagem: ', error);
      }
    }
  };

  const handleParagraphChange = (index, field, value) => {
    const newParagraphs = [...paragraphs];
    newParagraphs[index][field] = value;
    setParagraphs(newParagraphs);
  };

  const handleAddParagraph = () => {
    setParagraphs([...paragraphs, { text: '', subtitle: '' }]);
  };

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (content.length > 1048487) {
      handleShowPopup();
      return;
    }

    const postDate = new Date(`${date}T${time}:00`); // Definição de postDate

    if (!isFormValid) {
      setShowErrorMessage(true);
      return;
    }

    try {
      const imageRef = ref(storage, `images/${image.name}`);
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);

      const postData = {
        title,
        summary,
        category,
        content,
        paragraphs: paragraphs.map((paragraph) => ({
          text: paragraph.text,
          subtitle: paragraph.subtitle
        })),
        imageUrl,
        date: postDate,
        createdAt: new Date(),
        visible: postDate <= new Date()
      };

      await addDoc(collection(db, 'posts'), postData);

      setTitle('');
      setSummary('');
      setCategory('');
      setContent('');
      setParagraphs([{ text: '', subtitle: '' }]);
      setImage(null);
      setDate(new Date().toISOString().split('T')[0]);
      setTime(new Date().toLocaleTimeString('en-GB').slice(0, 5));
      navigate('/posts');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      toast.success('Post publicado com sucesso!');
    } catch (error) {
      console.error('Erro ao publicar post: ', error);
    }
  };

  const handleCancel = () => {
    navigate('/posts');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const modules = {
    toolbar: [
      [{ header: '1', title: 'Cabeçalho 1' }, { header: '2', title: 'Cabeçalho 2' }],
      [{ size: [], title: 'Tamanho da fonte' }],
      ['bold', 'italic', 'underline', 'strike', { blockquote: '', title: 'Citação' }],
      [
        { list: 'ordered', title: 'Lista ordenada' },
        { list: 'bullet', title: 'Lista com marcadores' },
        { indent: '-1', title: 'Diminuir recuo' },
        { indent: '+1', title: 'Aumentar recuo' }
      ],
      ['link', 'image'],
      ['clean']
    ]
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
    'image'
  ];

  const maxDate = new Date().toISOString().split('T')[0];

  const [isLoading, setIsLoading] = useState(false);
  const [showLengthExceededMessage, setShowLengthExceededMessage] = useState(false);

  return (
    <div className='criar-post'>
      <div className='container-criar-post'>
        <div className='intro-criar-post'>
          <HiOutlineSquaresPlus className='icon-add-post' />
          <h2>Adicionar nova postagem</h2>
        </div>
        <form onSubmit={handleSubmit} className='form-criar-post'>
          <div className='group-infos'>
            <div className='select-post'>
              <label>Selecione a categoria</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value='' disabled>
                  Selecione uma categoria
                </option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className='data-post'>
              <label>Data do post</label>
              <input
                type='date'
                value={date}
                onChange={(e) => setDate(e.target.value)}
                max={maxDate}
                required
              />
            </div>
          </div>

          <label>Título do post</label>
          <input
            type='text'
            placeholder='Digite o titulo do post'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label>Breve descrição</label>
          <input
            type='text'
            value={summary}
            placeholder='Resumo do post'
            onChange={(e) => {
              setSummary(e.target.value);
              if (e.target.value.length >= 200) {
                setShowLengthExceededMessage(true);
              } else {
                setShowLengthExceededMessage(false);
              }
            }}
            maxLength={200}
            required
          />
          {showLengthExceededMessage && (
            <p className='error-message'>Limite de caracteres atingido.</p>
          )}
          <label>Alterar a imagem principal do post</label>
          <div className='add-image-post'>
            <label htmlFor='imagem-criar-post' className='upload-label'>
              <FiUpload size={22} className='icon-upload' /> Inserir imagem
              <input
                id='imagem-criar-post'
                type='file'
                onChange={handleImageChange}
                className='imagem-criar-post'
                required
              />
            </label>
            {showErrorMessage && (
              <p className='error-message'>Preencha todos os campos</p>
            )}
            {image && (
              <img
                src={URL.createObjectURL(image)}
                alt='Imagem selecionada'
                className='preview-image'
              />
            )}
          </div>

          <div className='conteudo-principal'>
            <ReactQuill
              value={content}
              onChange={setContent}
              modules={modules}
              formats={formats}
            />
          </div>

          <div className='group-buttons'>
            <button
              type='button'
              className='botao-orcamento cancel'
              onClick={handleCancel}
            >
              Cancelar
            </button>
            <button
              className={`botao-orcamento save ${isLoading ? 'loading' : ''}`}
              type='submit'
              disabled={!isFormValid || isLoading}
            >
              {isLoading ? 'Salvando...' : 'Publicar'}
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


export default CreatePost;