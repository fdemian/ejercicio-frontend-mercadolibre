import React from 'react';

const ProductDetails = ({ products, match }) => {

    const { id } = match.params;
    const product = products.filter(p => p.id === parseInt(id))[0];
    
    return(
    <div>
      {product.description}
    </div>
    );
}

export default ProductDetails;
