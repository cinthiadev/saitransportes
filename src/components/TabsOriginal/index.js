import React, { useState, useEffect, useRef } from 'react';
import './tabsOriginal.css';
import { FaAngleRight } from "react-icons/fa6";
import iconLixeira from '../../assets/lixeira-1.png.png';
import planta from '../../assets/sala-de-estar-planta-artificial.png';
import { RxBorderSolid } from "react-icons/rx";
import { HiPlusSmall } from "react-icons/hi2";
import emailjs from 'emailjs-com';
import { FaCircleCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { IoCube } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import InputMask from 'react-input-mask';
import { IoAlertCircle } from "react-icons/io5";

const SuccessOrcamentoPopup = ({ message, onClose, handleClose }) => {
    return (
        <div>
            <div className="modal-overlay" onClick={handleClose}></div>
            <div className='modal'>
                <section className='modal-main' style={{ position: 'relative', padding: '40px 40px' }}>
                    <FaCircleCheck size={50} color='var(--cor-principal)' />
                    <h2 style={{ marginTop: '20px', marginBottom: '0px', color: "#000" }}>Orçamento enviado!</h2>
                    <br />
                    <p>Seu orçamento foi enviado com sucesso, fique atento ao meio de contato informado
                        pois enviaremos a resposta em até 48 horas.</p>
                    <div className='modal-buttons' style={{ marginTop: '20px' }}>
                        <button className='btn-cancel-modal' style={{ backgroundColor: "#253A5C", borderRadius: '4px', color: '#fff', width: '50%' }} onClick={onClose}>Entendi</button>
                    </div>
                </section>
            </div>

        </div>
    );
};

const ErrorPopup = ({ message, onClose, handleClose }) => {
    return (
        <div>
            <div className="modal-overlay" onClick={handleClose}></div>

            <div className='modal'>
                <section className='modal-main'>
                    <IoAlertCircle size={50} color='var(--cor-principal)' />
                    <h4 style={{ marginTop: '10px', marginBottom: '10px' }} >Parece que alguns campos estão faltando.</h4>
                    <p style={{ marginTop: '10px', lineHeight: '1.5em' }}>É necessário preencher com números válidos os campos de altura, largura e profundidade.</p>

                    <div className='modal-buttons' style={{ marginTop: '20px' }}>
                        <button className='btn-cancel-modal' onClick={onClose}>Fechar</button>
                    </div>
                </section>
            </div>

        </div>
    );
};

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [tabData, setTabData] = useState([
        [
            { id: 1, title: 'Lixeira', image: iconLixeira, quantity: 0, value: 0.4 },
            { id: 2, title: 'Planta', image: planta, quantity: 0, value: 0.16 },
            { id: 3, title: 'Lixeira', image: iconLixeira, quantity: 0, value: 10 },
            { id: 4, title: 'Lixeira', image: iconLixeira, quantity: 0, value: 10 },
            { id: 5, title: 'Lixeira', image: iconLixeira, quantity: 0, value: 10 },
        ],
        [
            { id: 6, title: 'Produto A Tab 2', image: 'https://via.placeholder.com/150', quantity: 0, value: 12 },
            { id: 7, title: 'Produto B Tab 2', image: 'https://via.placeholder.com/150', quantity: 0, value: 18 },
        ],
        [
            { id: 8, title: 'Produto A Tab 3', image: 'https://via.placeholder.com/150', quantity: 0, value: 11 },
            { id: 9, title: 'Produto B Tab 3', image: 'https://via.placeholder.com/150', quantity: 0, value: 17 },
            { id: 10, title: 'Produto C Tab 3', image: 'https://via.placeholder.com/150', quantity: 0, value: 22 },
            { id: 11, title: 'Produto D Tab 3', image: 'https://via.placeholder.com/150', quantity: 0, value: 25 },
        ],
    ]);

    const [totalItems, setTotalItems] = useState(0);
    const [totalValue, setTotalValue] = useState(0);
    const [cartItems, setCartItems] = useState([]);

    const [altura, setAltura] = useState('');
    const [largura, setLargura] = useState('');
    const [profundidade, setProfundidade] = useState('');
    const [nomeItemPersonalizado, setNomeItemPersonalizado] = useState('');

    const handleAddCustomItem = () => {
        const alturaFloat = parseFloat(altura);
        const larguraFloat = parseFloat(largura);
        const profundidadeFloat = parseFloat(profundidade);

        if (!isNaN(alturaFloat) && !isNaN(larguraFloat) && !isNaN(profundidadeFloat)) {
            const metragem = alturaFloat * larguraFloat * profundidadeFloat;

            const newItem = {
                id: Date.now(),
                title: nomeItemPersonalizado || `Objeto Personalizado ${cartItems.length + 1}`, // Usar cartItems.length para garantir um título único
                image: <IoCube size={22} style={{ margin: '0 4px', color: 'var(--cor-principal)' }} />,
                quantity: 1,
                value: parseFloat(metragem.toFixed(2)), // Convertendo para número
            };

            // Adiciona ao carrinho de compras apenas
            setCartItems([...cartItems, newItem]);

            // Limpar os campos após adicionar o item
            setAltura('');
            setLargura('');
            setProfundidade('');
            setNomeItemPersonalizado('');
        } else {
            handleShowPopupError();
        }
    };

    const updateCart = (productId, change) => {
        let productToUpdate = null;
        let updatedTabs = [...tabData]; // Cópia das abas
        let updatedCart = [...cartItems]; // Cópia do carrinho

        // Verifica se o produto está em uma das abas
        let foundInTabs = false;
        updatedTabs.forEach((tab, tabIndex) => {
            const productIndex = tab.findIndex(product => product.id === productId);
            if (productIndex !== -1) {
                productToUpdate = { ...tab[productIndex] };
                foundInTabs = true;

                const itemIndex = updatedCart.findIndex(item => item.id === productId);
                if (itemIndex === -1 && change > 0) {
                    // Adiciona ao carrinho
                    updatedCart.push({
                        id: productToUpdate.id,
                        title: productToUpdate.title,
                        image: productToUpdate.image,
                        quantity: change,
                        value: parseFloat((productToUpdate.value * change).toFixed(2)),
                    });
                } else if (itemIndex !== -1) {
                    // Atualiza quantidade no carrinho
                    updatedCart[itemIndex].quantity += change;
                    updatedCart[itemIndex].value = parseFloat((productToUpdate.value * updatedCart[itemIndex].quantity).toFixed(2));

                    // Remove do carrinho se a quantidade for zero ou menos
                    if (updatedCart[itemIndex].quantity <= 0) {
                        updatedCart.splice(itemIndex, 1);
                    }
                }
            }
        });

        // Se não encontrou nas abas, trata como item personalizado (Tab 4)
        if (!foundInTabs && activeTab === 4) {
            productToUpdate = updatedCart.find(item => item.id === productId);

            if (productToUpdate) {
                const itemIndex = updatedCart.findIndex(item => item.id === productId);
                updatedCart[itemIndex].quantity += change;
                updatedCart[itemIndex].value = parseFloat((productToUpdate.value * updatedCart[itemIndex].quantity).toFixed(2));

                // Remove do carrinho se a quantidade for zero ou menos
                if (updatedCart[itemIndex].quantity <= 0) {
                    updatedCart.splice(itemIndex, 1);
                }
            }
        }

        // Atualiza os estados com os dados atualizados
        setCartItems(updatedCart);
        setTabData(updatedTabs);
    };

    const handleQuantityChange = (productId, change) => {
        let updatedTabs = [...tabData]; // Cópia das abas

        // Verifica se o produto está em uma das abas
        let foundInTabs = false;
        updatedTabs.forEach((tab, tabIndex) => {
            const productIndex = tab.findIndex(product => product.id === productId);
            if (productIndex !== -1) {
                foundInTabs = true;
                const updatedProduct = { ...updatedTabs[tabIndex][productIndex] };
                updatedProduct.quantity += change;
                updatedProduct.quantity = Math.max(updatedProduct.quantity, 0); // Garante que a quantidade não seja negativa
                updatedTabs[tabIndex][productIndex] = updatedProduct;

                // Atualiza o estado com os dados atualizados das abas
                setTabData([...updatedTabs]);

                // Atualiza o carrinho de compras
                updateCart(productId, change);
            }
        });

        // Se não encontrou nas abas e é item personalizado (Tab 4 ou fora da Tab 4), trata adequadamente
        if (!foundInTabs) {
            const itemIndex = cartItems.findIndex(item => item.id === productId);
            if (itemIndex !== -1) {
                const updatedCart = [...cartItems];
                updatedCart[itemIndex].quantity += change;
                updatedCart[itemIndex].value = parseFloat((updatedCart[itemIndex].value * updatedCart[itemIndex].quantity).toFixed(2));

                // Remove do carrinho se a quantidade for zero ou menos
                if (updatedCart[itemIndex].quantity <= 0) {
                    updatedCart.splice(itemIndex, 1);
                }

                // Atualiza o estado com os dados atualizados do carrinho
                setCartItems(updatedCart);
            }
        }
    };


    useEffect(() => {
        // Calcula o total de itens adicionados e o valor total
        let itemsCount = 0;
        let itemsValue = 0;

        cartItems.forEach((item) => {
            itemsCount += item.quantity;
            itemsValue += parseFloat(item.value); // Converter para número antes de somar
        });

        setTotalItems(itemsCount);
        setTotalValue(itemsValue.toFixed(2)); // Formatando para duas casas decimais
    }, [cartItems]);

    const [showPopup, setShowPopup] = useState(false);
    const [showPopupError, setShowPopupError] = useState(false);

    const handleShowPopup = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        setCartItems([]);
        setTelefone('');
    };

    const handleShowPopupError = () => {
        setShowPopupError(true);
    };

    const handleClosePopupError = () => {
        setShowPopupError(false);
    };

    const [telefone, setTelefone] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Construindo a lista de produtos selecionados como texto formatado
        const selectedProducts = cartItems.map(item => `${item.title} - Quantidade: ${item.quantity}, Total: ${item.value} m³`).join('\n');

        // Coletando os dados do formulário
        const formData = {
            name: event.target.name.value,
            tel: event.target.tel.value,
            email: event.target.email.value,
            items: totalItems,
            total: totalValue + ' m³',  // Adicionando unidade de medida
            selectedProducts: selectedProducts
        };

        // Enviando o formulário usando emailjs
        emailjs.send('service_gquzhes', 'template_r6gfo16', formData, 'DbNcohiwnEQhnc4eO')
            .then((result) => {
                handleShowPopup();
            }, (error) => {
                console.log(error.text);
                alert('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.');
            });

        // Resetando o formulário após o envio
        event.target.reset();
    };

    const [dropdownOpen1, setDropdownOpen1] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const [dropdownOpen3, setDropdownOpen3] = useState(false);

    const toggleDropdown1 = () => {
        setDropdownOpen1(!dropdownOpen1);
    };

    const toggleDropdown2 = () => {
        setDropdownOpen2(!dropdownOpen2);
    };

    const toggleDropdown3 = () => {
        setDropdownOpen3(!dropdownOpen3);
    };

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
        setDropdownOpen1(false);
        setDropdownOpen2(true);
        setDropdownOpen3(true);
    };

    const getTabLabel = () => {
        switch (activeTab) {
            case 1:
                return 'Cozinha/sala de jantar';
            case 2:
                return 'Escritório';
            case 3:
                return 'Garagem';
            case 4:
                return 'Objeto personalizado';
            default:
                return 'Selecionar uma opção';
        }
    };

    return (
        <div className='container-tabs'>
            <h1>Precisa de um orçamento? <br />
                Selecione seus itens e solicite aqui</h1>
            <div className="tabs-orcamento">

                {window.innerWidth < 766 ? (
                    <div className="tab-buttons-orcamento">
                        <div className='content-title-orcamento' style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between' }} onClick={toggleDropdown1}>
                            <div className='' style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span>1</span>
                                <h3>Escolha o Ambiente</h3>
                            </div>
                            <IoIosArrowDown />
                        </div>

                        {dropdownOpen1 && (
                            <div className='content-buttons-orcamento'>
                                <button
                                    className={activeTab === 1 ? 'active' : ''}
                                    onClick={() => handleTabClick(1)}
                                >
                                    Cozinha/sala de jantar
                                    <FaAngleRight />
                                </button>
                                <button
                                    className={activeTab === 2 ? 'active' : ''}
                                    onClick={() => handleTabClick(2)}
                                >
                                    Escritório
                                    <FaAngleRight />
                                </button>
                                <button
                                    className={activeTab === 3 ? 'active' : ''}
                                    onClick={() => handleTabClick(3)}
                                >
                                    Garagem
                                    <FaAngleRight />
                                </button>
                                <button
                                    className={activeTab === 4 ? 'active' : ''}
                                    onClick={() => handleTabClick(4)}
                                >
                                    Objeto personalizado
                                    <FaAngleRight />
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <>
                        <div className="tab-buttons-orcamento">
                            <div className='content-title-orcamento'>
                                <span>1</span>
                                <h3>Escolha o Ambiente</h3>
                            </div>

                            <div className='content-buttons-orcamento'>
                                <button
                                    className={activeTab === 1 ? 'active' : ''}
                                    onClick={() => handleTabClick(1)}
                                >
                                    Cozinha/sala de jantar
                                    <FaAngleRight />
                                </button>
                                <button
                                    className={activeTab === 2 ? 'active' : ''}
                                    onClick={() => handleTabClick(2)}
                                >
                                    Escritório
                                    <FaAngleRight />
                                </button>
                                <button
                                    className={activeTab === 3 ? 'active' : ''}
                                    onClick={() => handleTabClick(3)}
                                >
                                    Garagem
                                    <FaAngleRight />
                                </button>
                                <button
                                    className={activeTab === 4 ? 'active' : ''}
                                    onClick={() => handleTabClick(4)}
                                >
                                    Objeto personalizado
                                    <FaAngleRight />
                                </button>
                            </div>
                        </div>
                    </>
                )}


                {window.innerWidth < 766 ? (
                    <div className="tab-content-orcamento">
                        <div className='content-title-orcamento' style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between' }} onClick={toggleDropdown2}>
                            <div className='' style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span>2</span>
                                <h3>Selecione os itens que deseja orçar</h3>
                            </div>
                            <IoIosArrowDown />
                        </div>
                        {dropdownOpen2 && (
                            <div className='content-produtcs'>
                                {activeTab !== 4 && (
                                    <div className="product-cards">
                                        {tabData[activeTab - 1] && tabData[activeTab - 1].map((product) => (
                                            <div key={product.id} className="product-card">
                                                <h3>{product.title}</h3>
                                                <img src={product.image} alt={product.title} />
                                                <div className="quantity-controls">
                                                    <button
                                                        onClick={() => handleQuantityChange(product.id, -1)}
                                                        disabled={product.quantity === 0}
                                                    >
                                                        <RxBorderSolid className='icon-quantity' />
                                                    </button>
                                                    <span>{product.quantity}</span>
                                                    <button onClick={() => handleQuantityChange(product.id, 1)}>
                                                        < HiPlusSmall className='icon-quantity' />
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {activeTab === 4 && (
                                    <div className="custom-item-form">
                                        <h4>Objeto personalizado</h4>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                value={nomeItemPersonalizado}
                                                onChange={(e) => setNomeItemPersonalizado(e.target.value)}
                                                placeholder='Nome:'
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="number"
                                                value={altura}
                                                onChange={(e) => setAltura(e.target.value)}
                                                placeholder='Altura (m):'
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="number"
                                                value={largura}
                                                onChange={(e) => setLargura(e.target.value)}
                                                placeholder='Largura (m):'
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="number"
                                                value={profundidade}
                                                onChange={(e) => setProfundidade(e.target.value)}
                                                placeholder='Profundidade (m):'
                                            />
                                        </div>
                                        <button className='submit-button' onClick={handleAddCustomItem}>Adicionar Item</button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="tab-content-orcamento">
                        <div className='content-title-orcamento' style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between' }} onClick={toggleDropdown3}>
                            <div className='' style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span>2</span>
                                <h3>Selecione os itens que deseja orçar</h3>
                            </div>
                            <IoIosArrowDown />
                        </div>

                        <div className='content-produtcs'>
                            {activeTab !== 4 && (
                                <div className="product-cards">
                                    {tabData[activeTab - 1] && tabData[activeTab - 1].map((product) => (
                                        <div key={product.id} className="product-card">
                                            <h3>{product.title}</h3>
                                            <img src={product.image} alt={product.title} />
                                            <div className="quantity-controls">
                                                <button
                                                    onClick={() => handleQuantityChange(product.id, -1)}
                                                    disabled={product.quantity === 0}
                                                >
                                                    <RxBorderSolid className='icon-quantity' />
                                                </button>
                                                <span>{product.quantity}</span>
                                                <button onClick={() => handleQuantityChange(product.id, 1)}>
                                                    < HiPlusSmall className='icon-quantity' />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {activeTab === 4 && (
                                <div className="custom-item-form">
                                    <h4>Objeto personalizado</h4>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            value={nomeItemPersonalizado}
                                            onChange={(e) => setNomeItemPersonalizado(e.target.value)}
                                            placeholder='Nome:'
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="number"
                                            value={altura}
                                            onChange={(e) => setAltura(e.target.value)}
                                            placeholder='Altura (m):'
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="number"
                                            value={largura}
                                            onChange={(e) => setLargura(e.target.value)}
                                            placeholder='Largura (m):'
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="number"
                                            value={profundidade}
                                            onChange={(e) => setProfundidade(e.target.value)}
                                            placeholder='Profundidade (m):'
                                        />
                                    </div>
                                    <button className='submit-button' onClick={handleAddCustomItem}>Adicionar Item</button>
                                </div>
                            )}
                        </div>

                    </div>
                )}

                {window.innerWidth < 766 ? (
                    <div className="cart-summary">
                        <div className='content-title-orcamento' style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between' }} onClick={toggleDropdown3}>
                            <div className='' style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span>3</span>
                                <h3>Espaço Necessário</h3>
                            </div>
                            <IoIosArrowDown />
                        </div>

                        {dropdownOpen3 && (
                            <>
                                <ul>
                                    {cartItems.map((item) => (
                                        <>
                                            <li key={item.id}>
                                                <div className='intro-cart-summary'>
                                                    {typeof item.image === 'string' ? (
                                                        <img src={item.image} alt={item.title} />
                                                    ) : (
                                                        item.image // Renderiza diretamente o ícone
                                                    )}
                                                    <strong>{item.title}</strong>
                                                </div>
                                                <div className="quantity-controls">
                                                    <button
                                                        onClick={() => handleQuantityChange(item.id, -1)}
                                                        disabled={item.quantity === 0}
                                                    >
                                                        <RxBorderSolid className='icon-quantity' />
                                                    </button>
                                                    <span>{item.quantity}</span>
                                                    <button onClick={() => handleQuantityChange(item.id, 1)}>
                                                        < HiPlusSmall className='icon-quantity' />
                                                    </button>
                                                </div>
                                            </li>
                                        </>
                                    ))}

                                    <div>
                                        <p>Itens: {totalItems}</p>
                                        <p>Total: {totalValue} m³</p>
                                    </div>
                                </ul>
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <input type="text" id="name" name="name" placeholder='Nome:' required />
                                    </div>

                                    <div className="form-group">
                                        <InputMask
                                            mask="(99) 99999-9999"
                                            id="tel"
                                            type="tel"

                                            onChange={(e) => setTelefone(e.target.value)}
                                            placeholder='Telefone:'
                                            required
                                        />

                                    </div>

                                    <div className="form-group">
                                        <input type="email" id="email" name="email" placeholder='Email:' required />
                                    </div>
                                    <button type="submit" className="submit-button">Solicitar Orçamento</button>
                                </form>
                            </>
                        )}
                    </div>
                ) : (
                    <>
                        <div className="cart-summary">
                            <div className='content-title-orcamento'>
                                <span>3</span>
                                <h3>Espaço Necessário</h3>
                            </div>
                            <ul>
                                {cartItems.map((item) => (
                                    <>
                                        <li key={item.id}>
                                            <div className='intro-cart-summary'>
                                                {typeof item.image === 'string' ? (
                                                    <img src={item.image} alt={item.title} />
                                                ) : (
                                                    item.image // Renderiza diretamente o ícone
                                                )}
                                                <strong>{item.title}</strong>
                                            </div>
                                            <div className="quantity-controls">
                                                <button
                                                    onClick={() => handleQuantityChange(item.id, -1)}
                                                    disabled={item.quantity === 0}
                                                >
                                                    <RxBorderSolid className='icon-quantity' />
                                                </button>
                                                <span>{item.quantity}</span>
                                                <button onClick={() => handleQuantityChange(item.id, 1)}>
                                                    < HiPlusSmall className='icon-quantity' />
                                                </button>
                                            </div>
                                        </li>
                                    </>
                                ))}

                                <div>
                                    <p>Itens: {totalItems}</p>
                                    <p>Total: {totalValue} m³</p>
                                </div>
                            </ul>
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input type="text" id="name" name="name" placeholder='Nome:' required />
                                </div>

                                <div className="form-group">
                                    <InputMask
                                        mask="(99) 99999-9999"
                                        id="tel"
                                        type="tel"

                                        onChange={(e) => setTelefone(e.target.value)}
                                        placeholder='Telefone:'
                                        required
                                    />

                                </div>

                                <div className="form-group">
                                    <input type="email" id="email" name="email" placeholder='Email:' required />
                                </div>
                                <button type="submit" className="submit-button">Solicitar Orçamento</button>
                            </form>
                        </div>
                    </>
                )}

                {showPopup && <SuccessOrcamentoPopup onClose={handleClosePopup} />}
                {showPopupError && <ErrorPopup onClose={handleClosePopupError} />}
            </div>

        </div >
    );
};

export default Tabs;