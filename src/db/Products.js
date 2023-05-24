export function consolesList() {
    const consoles = [
      { id: 1,
        name: 'Xbox series S 512Gb',
        price: 2299.99,
        img: '../imgs/Xbox_series_s.png',
        relevance: 5,
        branch: 'xbox',
        gallery: [
          '../imgs/Xbox_series_s2.jpg',
          '../imgs/Xbox_series_s3.jpg',
          '../imgs/Xbox_series_s5.jpg',
          '../imgs/Xbox_series_s4.jpg'
        ],
        cutDescription: <p className="title-item">Xbox Series S, o menor e mais elegante de todos os tempos. Com taxas de quadros mais altas, tempos de carregamento mais rápidos e mundos mais ricos e dinâmicos, o Xbox Series S oferece desempenho e velocidade de última geração em um formato compacto e totalmente digital. Retrocompatibilidade com milhares de jogos. Prepare-se para tempos de carregamento mais rápidos, resolução mais alta, taxas de quadros mais estáveis e melhor latência de entrada em milhares de jogos...</p>,
        completeDescription: <div>
        <p className="title-item">Xbox Series S, o menor e mais elegante de todos os tempos. Com taxas de quadros mais altas, tempos de carregamento mais rápidos e mundos mais ricos e dinâmicos, o Xbox Series S oferece desempenho e velocidade de última geração em um formato compacto e totalmente digital. Retrocompatibilidade com milhares de jogos. Prepare-se para tempos de carregamento mais rápidos, resolução mais alta, taxas de quadros mais estáveis e melhor latência de entrada em milhares de jogos adaptáveis , Xbox One, Xbox 360 e Xbox Original.</p>
        <br/>
        <h3 className="title-item font-medium text-base">PRONTO PARA AÇÃO</h3>
        <p className="title-item">A próxima geração de jogos traz nossa maior biblioteca de lançamentos digitais para o menor Xbox de todos os tempos. Com mundos mais dinâmicos, tempos de carregamento mais rápidos e a adição do Xbox Game Pass (vendido separadamente), o Xbox Series S totalmente digital é a melhor combinação de jogos.</p>
        <br/>
        <h3 className="title-item font-medium text-base">APARÊNCIA MELHOR. JOGO MELHOR.</h3>
        <p className="title-item">Equipado com as arquiteturas Zen 2 e RDNA 2 da AMD, o rastreamento de raios DirectX oferece iluminação real, sombras e reflexos precisos para criar mundos vivos e dinâmicos.</p>
        <br/>
        <h3 className="title-item font-medium text-base">OUÇA, VOCÊ ESTÁ SENDO CERCADO.</h3>
        <p className="title-item">O Som Espacial em 3D é a próxima evolução em tecnologia de áudio, usando algoritmos avançados para criar mundos realistas e envolventes que colocam você no centro de sua experiência.</p>
        <br/>
        <h3 className="title-item font-medium text-base">Acessórios adaptados</h3>
        <p className="title-item">Use seus acessórios de jogos favoritos adaptados para o Xbox One - incluindo controles, fones de ouvido e muito mais.</p>
        </div>
      },
      { id: 2,
        name: 'Xbox series X 1Tb',
        price: 4699.99,
        img: '../imgs/Xbox_series_x.jpg',
        relevance: 4,
        branch: 'xbox',
        productPage: 'products/xbox_series_s'
      },
      { id: 4,
        name: 'Playstation 5 Edição digital 825Gb',
        price: 3799.99,
        img: '../imgs/PS5_digital.jpg',
        relevance: 5,
        branch: 'playstation',
        productPage: 'products/PS5_digital' 
      },
      { id: 5,
        name: 'Playstation 5 825Gb',
        price: 3999.99,
        img: '../imgs/PS5.jpg',
        relevance: 4,
        branch: 'playstation',
        productPage: 'products/xbox_series_s'
      },
      { id: 6,
        name: 'Xbox one S 500Gb',
        price: 1799.99,
        img: '../imgs/Xbox_one_s.jpg',
        relevance: 3,
        branch: 'xbox',
        productPage: 'products/xbox_series_s'
      },
      { id: 7,
        name: 'Xbox one X 1Tb',
        price: 2499.99,
        img: '../imgs/Xbox_one_x.jpg',
        relevance: 2,
        branch: 'xbox',
        productPage: 'products/xbox_series_s'
      },
      { id: 8,
        name: 'Playstation 4 slim 500Gb',
        price: 1999.99,
        img: '../imgs/PS4_slim.jpg',
        relevance: 3,
        branch: 'playstation',
        productPage: 'products/xbox_series_s'
      },
      { id: 9,
        name: 'Playstation 4 PRO 1Tb',
        price: 2999.99,
        img: '../imgs/PS4_pro.jpg',
        relevance: 2,
        branch: 'playstation',
        productPage: 'products/xbox_series_s'
      },
      { id: 10,
        name: 'Nintendo Switch OLED 64Gb Standard',
        price: 2299.99,
        img: '../imgs/Nintendo_switch_oled.jpg',
        relevance: 3,
        branch: 'nintendo',
        productPage: 'products/xbox_series_s'
      },
      { id: 11,
        name: 'Nintendo Switch 32Gb Standard',
        price: 2099.99,
        img: '../imgs/Nintendo_switch.jpg',
        relevance: 4,
        branch: 'nintendo',
        productPage: 'products/xbox_series_s'
      },
      { id: 12,
        name: 'Nintendo Switch Lite 32Gb Standard',
        price: 1399.99,
        img: '../imgs/Nintendo_switch_lite.jpg',
        relevance: 1,
        branch: 'nintendo',
        productPage: 'products/xbox_series_s'
      }
    ];
  
    return consoles;
  }
  
  export function gamesList() {
    const games = [
      { id: 3, name: 'Resident evil 4', price: 299.99 }
    ];
  
    return games;
  }