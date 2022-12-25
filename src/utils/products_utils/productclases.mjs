// No estoy usando este archivo, se usó a principio, pero cambié a fetch de un archivo json en data

function createStockProducts(name, description, img, keywords, color) {
  return {
    name: name,
    description: description,
    img: img,
    keywords: keywords,
    color: color,
    promo: false,
    setPromo(boolean) {
      this.promo = boolean;
      return;
    },
  };
}

export function createVelas(name, description, img, keywords, color, price) {
  let Velas = createStockProducts(name, description, img, keywords, color);
  Velas.content = {
    medium: {
      stock: 0,
      price: price,
      'sub-description': 'Recipiente circular de 5cm de alto y 7cm de diametro',
    },
    big: {
      stock: 0,
      price: price * 1.25,
      'sub-description':
        'Recipiente circular de 8cm de alto y 10cm de diametro',
    },
  };
  Velas.type = 'vela';
  Velas.setStock = function (arr) {
    this.content.medium.stock = arr[0];
    if (arr.length > 1) {
      this.content.big.stock = arr[1];
    }
  };
  return Velas;
}

export function createBombasefervecentes(
  name,
  description,
  img,
  keywords,
  color,
  price
) {
  let BombasEfervecentes = createStockProducts(
    name,
    description,
    img,
    keywords,
    color
  );
  return {
    ...BombasEfervecentes,
    content: '10 unidades de 20g cada',
    type: 'bomba',
    price: price,
    setStock: function (num) {
      this.stock = num;
    },
  };
}

export function createSalesdeBano(
  name,
  description,
  img,
  keywords,
  color,
  price
) {
  let SalesdeBano = createStockProducts(
    name,
    description,
    img,
    keywords,
    color
  );
  return {
    ...SalesdeBano,
    content: '250g',
    type: 'sal',
    price: price,
    setStock: function (num) {
      this.stock = num;
    },
  };
}

export function createDifusoresDeVarilla(
  name,
  description,
  img,
  keywords,
  color,
  price
) {
  let DifusoresDeVarilla = createStockProducts(
    name,
    description,
    img,
    keywords,
    color
  );
  return {
    ...DifusoresDeVarilla,
    content: '250ml',
    type: 'difusor',
    price: price,
    setStock: function (num) {
      this.stock = num;
    },
  };
}
/* class Products {
  constructor(name, description, img, keywords, color) {
    this.name = name;
    this.description = description;
    this.img = img;
    this.keywords = keywords;
    this.color = color;
    this.promo = false;
  }
  setPromo(boolean) {
    this.promo = boolean;
    if (boolean === true) {
      this.price *= 0.75;
    }
    return this;
  }
}
export class Velas extends Products {
  constructor(name, description, img, keywords, color, price) {
    super(name, description, img, keywords, color);
    this.content = {
      medium: {
        price: price,
        stock: 0,
        'sub-description':
          'Recipiente circular de 5cm de alto y 7cm de diametro',
      },
      big: {
        price: 1.2 * price,
        stock: 0,
        'sub-description':
          'Recipiente circular de 8cm de alto y 10cm de diametro',
      },
    };
    this.type = 'vela';
  }
  set setStock(arr) {
    this.content.medium.stock = arr[0];
    if (arr.length > 1) {
      this.content.big.stock = arr[1];
    }
  }
}
export class Bombasefervecentes extends Products {
  constructor(name, description, img, keywords, color, price) {
    super(name, description, img, keywords, color);
    this.price = price;
    this.content = '10 unidades de 20g cada';
    this.type = 'bomba';
  }
  set setStock(num) {
    this.stock = num;
  }
}
export class SalesdeBano extends Products {
  constructor(name, description, img, keywords, color, price) {
    super(name, description, img, keywords, color);
    this.price = price;
    this.content = '250g';
    this.type = 'sal';
  }
 
  set setStock(num) {
    this.stock = num;
  }
}
export class DifusoresDeVarilla extends Products {
  constructor(name, description, img, keywords, color, price) {
    super(name, description, img, keywords, color);
    this.price = price;
    this.content = '300ml';
    this.type = 'difusor';
  }
  
  set setStock(num) {
    this.stock = num;
  }
}
export class Kits extends Products {
  constructor(name, description, img, keywords, color, price) {
    super(name, description, img, keywords, color);
    this.price = price;
    this.content = '0.8kg - 1.5kg';
    this.type = 'kit';
  }
  
  set setStock(num) {
    this.stock = num;
  }
}
 */
