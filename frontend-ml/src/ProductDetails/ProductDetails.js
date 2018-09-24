import React, { Component } from 'react';
import './ProductDetails.css';

class ProductDetails extends Component {

  componentDidMount(){
    const { match } = this.props;
    const { id } = match.params;
    this.props.onLoad(id);
  }

  render(){
    const { product, match } = this.props;

    if(!product)
      return null;

    return(
    <div className="ProductDetailsContainer">

      <div className="ProductHeadingFlex">
        <div>
          <img
            src={product.picture}
            alt={product.name}
            className="ProductDetailsImage"
          />
        </div>

        <div>
          <div className="ProductStatus"><p>Nuevo - 234 vendidos</p></div>
          <div className="TitleHeadingContainer">
            <p className="ProductDetailsTitle">{product.title}</p>
            <p className="ProductDetailsPrice">${product.price.amount}</p>
          </div>
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
