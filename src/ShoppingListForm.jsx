import { useState } from "react";
function ShoppingListForm({addItem}) {
  const [formData, setFormData] = useState({ product: "", quantity: 0 });
  const handleChange = (evt) => {
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
    addItem(formData);
    setFormData({ product: "", quantity: 0 });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1> Product is: {formData.product} and quantity is: {formData.quantity} </h1>
      <label htmlFor="product"></label>
      <input
        type="text"
        placeholder="product name"
        name="product"
        id="product"
        onChange={handleChange}
        value={formData.product}
      />

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
      <button>Add item</button>
    </form>
  );
}
export default ShoppingListForm;
