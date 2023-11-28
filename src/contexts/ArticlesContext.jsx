import React, { createContext, useContext, useState } from 'react';

const ArticlesContext = createContext();

export const useArticles = () => {
  return useContext(ArticlesContext);
};

// Información tomada de la pagina oficial de Funko: https://funko.com
export const ArticlesProvider = ({ children }) => {
  const [articles, setArticles] = useState([
    {
      id: 1,
      image: '/articulo_1.png',
      name: 'POP! DIE-CAST SPIDER-MAN',
      price: 50.00,
      store: 'Funko',
      user: 'FunkoOfficial',
      rating: 4.5,
      isVisible: true,
      isSelected: false,
      modoAdmin: false
    },
    {
      id: 2,
      image: '/articulo_2.png',
      name: 'POP! URSULA (DIAMOND)',
      price: 15.00,
      store: 'Funko',
      user: 'FunkoOfficial',
      rating: 4.5,
      isVisible: true,
      isSelected: false,
      modoAdmin: false
    },
    {
      id: 3,
      image: '/articulo_3.png',
      name: 'LIMITED EDITION HOGWARTS SCHOOL OF WITCHCRAFT AND WIZARDRY ALBUS DUMBLEDORE POP! & BAG BUNDLE',
      price: 120.00,
      store: 'Funko',
      user: 'FunkoOfficial',
      rating: 4.5,
      isVisible: true,
      isSelected: false,
      modoAdmin: false
    },
    {
      id: 4,
      image: '/articulo_4.png',
      name: 'POP! POLLY GRAY',
      price: 12.00,
      store: 'Funko',
      user: 'FunkoOfficial',
      rating: 4.5,
      isVisible: true,
      isSelected: false,
      modoAdmin: false
    },
    {
      id: 5,
      image: '/articulo_5.png',
      name: 'POP! SANTA JACK (GLOW)',
      price: 15.00,
      store: 'Funko',
      user: 'FunkoOfficial',
      rating: 4.5,
      isVisible: true,
      isSelected: false,
      modoAdmin: false
    },
    {
      id: 6,
      image: '/articulo_6.png',
      name: 'POP! MICHAEL JACKSON (SMOOTH CRIMINAL)',
      price: 12.00,
      store: 'Funko',
      user: 'FunkoOfficial',
      rating: 4.5,
      isVisible: true,
      isSelected: false,
      modoAdmin: false
    },
    {
      id: 7,
      image: '/articulo_7.png',
      name: 'POCKET POP! STAR WARS 24-DAY HOLIDAY ADVENT CALENDAR',
      price: 50.00,
      store: 'Funko',
      user: 'FunkoOfficial',
      rating: 4.5,
      isVisible: true,
      isSelected: false,
      modoAdmin: false
    },
    {
      id: 8,
      image: '/articulo_8.png',
      name: 'HOLIDAY DARTH VADER ORNAMENT',
      price: 13.00,
      store: 'Funko',
      user: 'FunkoOfficial',
      rating: 4.5,
      isVisible: true,
      isSelected: false,
      modoAdmin: false
    },
    {
      id: 9,
      image: '/articulo_9.png',
      name: 'THE CHILD HOLIDAY ORNAMENT',
      price: 10.00,
      store: 'Funko',
      user: 'FunkoOfficial',
      rating: 4.5,
      isVisible: true,
      isSelected: false,
      modoAdmin: false
    },
    {
      id: 10,
      image: '/articulo_10.png',
      name: 'POP! PIN GROGU USING THE FORCE',
      price: 15.00,
      store: 'Funko',
      user: 'FunkoOfficial',
      rating: 4.5,
      isVisible: true,
      isSelected: false,
      modoAdmin: false
    },
    {
      id: 11,
      image: '/articulo_11.png',
      name: 'POP! PIN PAZ VIZSLA',
      price: 15.00,
      store: 'Funko',
      user: 'FunkoOfficial',
      rating: 4.5,
      isVisible: true,
      isSelected: false,
      modoAdmin: false
    },
    {
      id: 12,
      image: '/articulo_12.png',
      name: 'POP! PIN THE ARMORER',
      price: 15.00,
      store: 'Funko',
      user: 'FunkoOfficial',
      rating: 4.5,
      isVisible: true,
      isSelected: false,
      modoAdmin: false
    },
    {
      id: 13,
      image: '/articulo_13.png',
      name: 'POP! PIN THE MANDALORIAN WITH BLASTER',
      price: 15.00,
      store: 'Funko',
      user: 'FunkoOfficial',
      rating: 4.5,
      isVisible: true,
      isSelected: false,
      modoAdmin: false
    },
    {
      id: 14,
      image: '/articulo_14.png',
      name: 'GROGU WITH RANCOR BOXED TEE',
      price: 20.00,
      store: 'Funko',
      user: 'FunkoOfficial',
      rating: 4.5,
      isVisible: true,
      isSelected: false,
      modoAdmin: false
    },
    {
      id: 15,
      image: '/articulo_15.png',
      name: 'POP! MYSTERY',
      price: 5.00,
      store: 'Funko',
      user: 'FunkoOfficial',
      rating: 4.5,
      isVisible: true,
      isSelected: false,
      modoAdmin: false
    },
    {
      id: 16,
      image: '/articulo_16.png',
      name: 'VINYL SODA POWER RANGERS 6-PACK WITH COOLER',
      price: 100.00,
      store: 'Funko',
      user: 'FunkoOfficial',
      rating: 4.5,
      isVisible: true,
      isSelected: false,
      modoAdmin: false
    },
    {
      id: 17,
      image: '/articulo_17.png',
      name: 'POP! ART COVERS RAVENCLAW',
      price: 30.00,
      store: 'Funko',
      user: 'FunkoOfficial',
      rating: 4.5,
      isVisible: true,
      isSelected: false,
      modoAdmin: false
    },
    {
      id: 18,
      image: '/articulo_18.png',
      name: 'POP! SANTA JACK & CHRISTMAS SALLY (DIAMOND) 2-PACK',
      price: 30.00,
      store: 'Funko',
      user: 'FunkoOfficial',
      rating: 4.5,
      isVisible: true,
      isSelected: false,
      modoAdmin: false
    },
    {
      id: 19,
      image: '/articulo_19.png',
      name: 'POP! MEGA LOKI',
      price: 110.00,
      store: 'Funko',
      user: 'FunkoOfficial',
      rating: 4.5,
      isVisible: true,
      isSelected: false,
      modoAdmin: false
    },
    {
      id: 20,
      image: '/articulo_20.png',
      name: 'LIMITED EDITION CASA MADRIGAL MIRABEL POP! AND BAG BUNDLE',
      price: 120.00,
      store: 'Funko',
      user: 'FunkoOfficial',
      rating: 4.5,
      isVisible: true,
      isSelected: false,
      modoAdmin: false
    }
  ]);

  return (
    <ArticlesContext.Provider value={{ articles, setArticles }}>
      {children}
    </ArticlesContext.Provider>
  );
};