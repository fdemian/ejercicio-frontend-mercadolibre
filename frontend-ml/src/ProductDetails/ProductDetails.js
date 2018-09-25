import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { formatWithSeparator, formatDecimalPart} from '../utils.js';
import './ProductDetails.css';

class ProductDetails extends Component {

  componentDidMount(){
    const { match } = this.props;
    const { id } = match.params;
    this.props.onLoad(id);
  }

  render(){

    const { product } = this.props;

    if(!product)
      return null;

    return(
    <div className="ProductDetailsContainer">

      <Helmet>
        <title>{product.title}</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Detalle del producto" />
        <meta name="og:title" content={product.title} />
        <meta name="og:type" ccontent="Detalle del producto" />
        <meta name="og:image" content="https://http2.mlstatic.com/ui/navigation/4.0.8/mercadolibre/logo__large_plus@2x.png" />
        <meta name="og:url" content="http://mercadolibre.com.ar" />
      </Helmet>

      <div className="ProductHeadingFlex">
        <div>
          <img
            src={product.picture}
            alt={product.title}
            className="ProductDetailsImage"
          />
        </div>

        <div>
          <div className="ProductStatus"><p>Nuevo - 234 vendidos</p></div>
          <div className="TitleHeadingContainer">
            <p className="ProductDetailsTitle">{product.title}</p>
            <p className="ProductDetailsPrice">
              ${formatWithSeparator(product.price.amount, ".")}
              <sup>{formatDecimalPart(product.price.decimals)}</sup>
            </p>
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
