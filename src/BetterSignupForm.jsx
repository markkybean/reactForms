import { useState } from "react";
function BetterSignupForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
  });

  const handleSubmit = () => {
    console.log(firstName, lastName);
  };

  const handleChange = (evt) => {
    const changeField = evt.target.name;
    const newValue = evt.target.value;
    console.log(changeField, newValue);
    setFormData((currData) => {
      return {
        ...currData,
        [changeField]: newValue,
      }
    });
  };
  return (
    <div>
      <label htmlFor="firstname">Enter a First Name</label>
      <input
        type="text"
        placeholder="firsname"
        value={formData.firstName}
        onChange={handleChange}
        name="firstName"
        id="firstname"
      />

      <label htmlFor="lastname">Enter a Last Name</label>
      <input
        type="text"
        placeholder="lastname"
        value={formData.lastName}
        onChange={handleChange}
        name="lastName"
        id="lastname"
      />

      <label htmlFor="password">password</label>
      <input
        type="password"
        placeholder="password"
        value={formData.password}
        onChange={handleChange}
        name="password"
        id="password"
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default BetterSignupForm;
