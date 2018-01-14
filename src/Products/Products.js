import React, { Component } from 'react';
import './Products.css';

class Products extends Component {
  constructor(props) {
    super(props);
    this.products = [
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
  }

  render() {
    return (
      <div className="wrapper">
        <div className="column left">
        </div>
        <div className="column right">
          <div className="products">
            {
              this.products.map((product, index) =>
                <div className="product border" key={index}>
                  <a>
                    <img className="mx-auto mb-3 d-block" src={require("../assets/img/" + product.name + ".jpg")} alt={product.name}></img>
                    <div className="text-primary font-weight-bold">{product.name}</div>
                  </a>
                  <div>By: {product.brand}</div>
                  <div>OS: {product.os}</div>
                  <div>Price: {product.price}</div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Products;
