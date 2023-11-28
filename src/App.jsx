import React, { useState } from "react";
import "./App.css";
import ArticleList from "./components/ArticleList";
import Pagination from "./components/Pagination";
import Header from "./components/Header";
import AddArticleForm from "./components/AddArticleForm";
import HideItem from "./components/HideItem";
import { ArticlesProvider, useArticles } from "./contexts/ArticlesContext";

function App() {
  const { articles } = useArticles();
  const [currentPage, setCurrentPage] = useState(1);
  const [showAddForm, setShowAddForm] = useState(false); // Estado para controlar la visibilidad del formulario

  const articlesPerPage = 10;
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleAddArticle = () => {
    setShowAddForm(true); // Mostrar formulario
  };

  const handleToggleVisibility = () => {
    setShowAddForm(false); // Ocultar formulario y mostrar lista de artículos
  };

  return (
    <div className="App">
      <Header
        onAddArticle={handleAddArticle}
        onToggleVisibility={handleToggleVisibility}
      />
      <div className="content-container">
        <div className="message">
          {/* Mensaje condicional según el estado de showAddForm */}
          <p>
            {showAddForm
              ? "Datos del nuevo artículo:"
              : "Los artículos más recientes son:"}
          </p>
        </div>
        <ArticlesProvider>
          {showAddForm ? (
            <AddArticleForm />
          ) : (
            <>
              <ArticleList
                articlesPerPage={articlesPerPage}
                currentPage={currentPage}
              />
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </>
          )}
        </ArticlesProvider>
      </div>
    </div>
  );
}

export default App;
