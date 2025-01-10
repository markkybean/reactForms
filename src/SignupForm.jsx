import { useState } from "react";
function SignupForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const updateFirstName = (evt) => {
    console.log("here");
    console.log(evt.target.value);
    setFirstName(evt.target.value);
  };
  const updateLastName = (evt) => {
    console.log("here");
    console.log(evt.target.value);
    setLastName(evt.target.value);
  };
  const handleSubmit = () => {
    console.log(firstName, lastName);
  };
  return (
    <div>
      <label htmlFor="firstname">Enter a First Name</label>
      <input
        type="text"
        placeholder="firsname"
        value={firstName}
        onChange={updateFirstName}
        id="firstname"
      />

      <label htmlFor="lastname">Enter a First Name</label>
      <input
        type="text"
        placeholder="lastname"
        value={lastName}
        onChange={updateLastName}
        id="lastname"
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default SignupForm;
