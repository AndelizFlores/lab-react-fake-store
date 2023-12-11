import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { ProductContext } from "../context/products.context";


function ProductDetailsPage() {

  const [product, setProduct] = useState(null);

  const { productId } = useParams()

  const { loading, products, getProducts } = useContext(ProductContext)

  useEffect(() => {

    if (!products.length) {
      getProducts()
    } else {
      console.log("Product Id ===>", productId)
      console.log("Products at 21 ===>", products)
      let thisProduct = products.find((product) => product.id === Number(productId))
      setProduct(thisProduct)
  
      console.log("This product ===>", thisProduct)
    }


  }, [products, productId])

  return (
    <div className="ProductDetailsPage">

      {
        product &&
        <div className="details">
          <img src={product.image}  alt="product-image"/>
          <p>{product.category}</p>
          <h1>{product.title}</h1>
          <div className="details-container">

            <p>{product.description}</p>
            <p>{product.price}</p>

          </div>

        </div>
      }

    <hr />

    <Link to='/'>
      <button>Back</button>
    </Link>
    
    </div>
  );
}

export default ProductDetailsPage;