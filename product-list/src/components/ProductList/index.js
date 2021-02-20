import React from "react";

class ProductList extends React.Component {
  state = {
    products: [
      {
        _id: "34rg",
        name: "iPhone X",
        price: 799.99,
        inStock: true
      },
      {
        _id: "36gu",
        name: "iron",
        price: 29.99,
        inStock: false
      },
      {
        _id: "97ux",
        name: "coffee mug",
        price: 9.0,
        inStock: true
      }
    ]
  };

  addProductToList = (newProduct) => {
    // console.log("here is a new product: ", newProduct);

    // this.state.products.push(newProduct) ===> 🚨🚨🚨🚨 don't mutate the state
    // instead make a copy of it and then add a new product
    const prodCopy = [...this.state.products];

    prodCopy.push(newProduct);

    this.setState({
      products: prodCopy
    });

    // because setState is an async method, we need to set the state this way
    // to make sure it is set before the "render()" method executes

    // this.setState(prevState => ({
    //     products: [...prevState, newProduct]
    // }))
  };

  deleteProduct = (i) => {
    const prodCopy = [...this.state.products];

    prodCopy.splice(i, 1);

    this.setState({
      products: prodCopy
    });
  };

  render() {
    const { products } = this.state;

    const list = products.map((product, index) => {
      return (
        <li key={product._id}>
          <h3>
            {product.name} - {product.price}
          </h3>

          {(product.inStock && <p>In Stock</p>) || <p>Out of Stock</p>}

          <button onClick={() => this.deleteProduct(index)}>Delete</button>
        </li>
      );
    });

    return (
      <>
        <ul>{list}</ul>

        <button onClick={() => this.addProductToList({ _id: "blah", name: "ironShirt", price: 20, inStock: true })}>
          Add product
        </button>
      </>
    );
  }
}

export default ProductList;
