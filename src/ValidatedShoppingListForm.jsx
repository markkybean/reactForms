import { useState } from "react";
function ValidatedShoppingListForm({ addItem }) {
  const [formData, setFormData] = useState({ product: "", quantity: 0 });
  const [productIsValid, setProductIsValid] = useState(false);
  const validate = (product) => {
    if (product.length === 0) {
      setProductIsValid(false);
    } else {
      setProductIsValid(true);
    }
  };
  const handleChange = (evt) => {
    if (evt.target.name === "product") {
      validate(evt.target.value);
    }
    setFormData((currData) => {
      return {
        ...currData,
        [evt.target.name]: evt.target.value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    if (productIsValid) {
      addItem(formData);
      setFormData({ product: "", quantity: 0 });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>
        {" "}
        Product is: {formData.product} and quantity is: {formData.quantity}{" "}
      </h1>
      <label htmlFor="product"></label>
      <input
        type="text"
        placeholder="product name"
        name="product"
        id="product"
        onChange={handleChange}
        value={formData.product}
      />
      {!productIsValid && <p style={{ color: "red" }}>Product is required</p>}

      <h1> Product is: {formData.product} </h1>
      <label htmlFor="quantity"></label>
      <input
        type="number"
        placeholder="1"
        name="quantity"
        id="product"
        onChange={handleChange}
        value={formData.quantity}
      />
      <button disabled={!productIsValid} >Add item</button>
    </form>
  );
}
export default ValidatedShoppingListForm;
