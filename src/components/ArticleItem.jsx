import React, { useState } from "react";
import { useArticles } from "../contexts/ArticlesContext";

const ArticleItem = ({ article }) => {
  const userImageStatic = "/user.png";
  const [isSelected, setIsSelected] = useState(false);

  const handleToggleSelection = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div className={`article-item selectable`}>
      <img src={article.image} alt={article.name} className="article-image" />
      <div className="article-content">
        <h3 className="article-title">{article.name}</h3>
        <p className="article-description">Lorem ipsum dolor sit...</p>
        <div className="article-store">
          <p className="store-name">{article.store}</p>
          <p className="article-price">${article.price}</p>
        </div>
        <p className="article-category">{article.category}</p>

        <div className="seller-info">
          <img src={userImageStatic} alt="Usuario" className="user-image" />
          <p className="user-name">{article.user}</p>
        </div>
        <div className="article-rating">
          {"★".repeat(article.rating)}
          {"☆".repeat(5 - article.rating)}
        </div>
      </div>
      {article.modoAdmin && (
        <button
          className={`select-button ${isSelected ? "selected" : ""}`}
          onClick={handleToggleSelection}
          style={{ backgroundColor: isSelected ? "#3498db" : "" }}
        >
          {isSelected ? "Seleccionado" : "Seleccionar"}
        </button>
      )}
    </div>
  );
};

export default ArticleItem;