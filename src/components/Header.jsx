import React, { useState } from "react";
import { useArticles } from "../contexts/ArticlesContext";
import "./Header.css";

const Header = ({ onAddArticle, onToggleVisibility }) => {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const { setArticles } = useArticles();

  const toggleAdminMode = () => {
    setArticles((prevArticles) =>
      prevArticles.map((article) => ({
        ...article,
        modoAdmin: !isAdminMode,
      }))
    );
  
    setIsAdminMode(!isAdminMode);
    if (isAdminMode) onToggleVisibility(false);
  };

  return (
    <nav className="navbar">
      {/* Ícono de usuario solo visible en modo administrador */}
      {isAdminMode && (
      <div className="user-icon-container">
        <img src="/user.png" alt="Admin User" className="user-icon" />
        <span className="seller-text">Vendedor</span>
        </div>
        )}
      
      <div className="logo">
        <img src="/online-shopping.png" alt="Logo" />
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Buscar..." />
        <button className="search-button">Buscar</button>
      </div>

      <ul className="nav-links">
        <li>
          <button className="admin-button" onClick={toggleAdminMode}>
            {isAdminMode ? "Modo Visitante" : "Modo Administrador"}
          </button>
        </li>
        
        {isAdminMode && (
          <>
            <li>
              <button className="add-button" onClick={() => onAddArticle(true)}>Agregar</button>
            </li>
           
          </>
        )}
      </ul>
    </nav>
  );
};

export default Header;

