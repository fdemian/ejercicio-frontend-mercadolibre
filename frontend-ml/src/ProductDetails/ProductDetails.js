import React, { Component } from 'react';
import './ProductDetails.css';

class ProductDetails extends Component {

  componentDidMount(){
    const { match } = this.props;
    const { id } = match.params;
    this.props.onLoad(id);
  }

  render(){
    const { product, products, match } = this.props;
    const { id } = match.params;
    const product = products.filter(p => p.id === parseInt(id))[0];

    return(
    <div className="ProductDetailsContainer">

      <div className="ProductHeadingFlex">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="ProductDetailsImage"
          />
        </div>

        <div>
          <div className="ProductStatus"><p>Nuevo - 234 vendidos</p></div>
          <div className="ProductDetailsTitle"><p>{product.title}</p></div>
          <div className="ProductDetailsPrice"><p>{product.price}</p></div>
          <div className="PurchaseButton">
            <button type="button">
              Comprar
            </button>
          </div>
        </div>
      </div>

      <div className="ProductDetailsDescription">
        <p className="DescriptionHeading">Descripción del producto</p>
        <p className="DescriptionText">{product.description}</p>
      </div>

    </div>
    );
  }

}

export default ProductDetails;
