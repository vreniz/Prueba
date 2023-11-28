import React from 'react';
import { useArticles } from '../contexts/ArticlesContext';
import ArticleItem from './ArticleItem';

const ArticleList = ({ articlesPerPage, currentPage }) => {
  const { articles } = useArticles();

  // Filtrar los artículos por la propiedad isVisible
  const visibleArticles = articles.filter((article) => article.isVisible === true);

  // Calcular los índices de inicio y fin basados en la paginación
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;

  // Obtener los artículos visibles dentro del rango de la página actual
  const displayedArticles = visibleArticles.slice(startIndex, endIndex);

  return (
    <div className="article-list">
      {displayedArticles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;