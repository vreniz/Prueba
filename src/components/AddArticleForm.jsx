import React, { useState, useContext } from 'react';
import { useArticles } from '../contexts/ArticlesContext';
import './AddArticleForm.css';

const AddArticleForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [store, setStore] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const { setArticles } = useArticles();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArticle = { name, price, store, description, image };
    setArticles((prevArticles) => [...prevArticles, newArticle]);
    setName('');
    setPrice('');
    setStore('');
    setDescription('');
    setImage('');
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="form-container"> {/* Contenedor agregado */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre del artículo:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre del artículo"
        />

        <label htmlFor="price">Precio:</label>
        <input
          id="price"
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="$"
        />

        <label htmlFor="store">Tienda:</label>
        <input
          id="store"
          type="text"
          value={store}
          onChange={(e) => setStore(e.target.value)}
          placeholder="Tienda"
        />

        <label htmlFor="description">Descripción:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descripción"
        ></textarea>

        <label htmlFor="image">Imagen del producto:</label>
        <input
          id="image"
          type="file"
          onChange={handleImageChange}
        />

        <button type="submit">Agregar Artículo</button>
      </form>
    </div>
  );
};

export default AddArticleForm;
