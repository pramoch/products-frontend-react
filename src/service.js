class Service {
  static myInstance = null;

  products = [
    {
      name: 'iPhone X 256 GB',
      brand: 'Apple',
      os: 'iOS',
      price: '1149'
    },
    {
      name: 'Galaxy S8',
      brand: 'Samsung',
      os: 'Android',
      price: '719'
    },
    {
      name: 'iPhone 8 256 GB',
      brand: 'Apple',
      os: 'iOS',
      price: '849'
    },
    {
      name: 'iPhone 8 Plus 256 GB',
      brand: 'Apple',
      os: 'iOS',
      price: '949'
    },
    {
      name: 'Galaxy Note 8',
      brand: 'Samsung',
      os: 'Android',
      price: '950'
    },
    {
      name: 'OPPO R9S',
      brand: 'OPPO',
      os: 'Android',
      price: '449'
    }
  ];

  static getInstance() {
    if (Service.myInstance === null) {
      Service.myInstance = new Service();
    }

    return Service.myInstance;
  }

  getAllProducts() {
    return new Promise((resolve, reject) => {
      resolve(this.products);
    });
  }
}

export default Service;